// /api/register — Engine capture (primary persistence Supabase + E0 confirm)
// + Resend E1 (+5p, qua engine /api/send) + Salekit best-effort (legacy, đang khai tử).
// PORT pattern aiboss-landing-v2 (variant A — Option 1 PM/Owner duyệt 17-18/6, wire 2/7 TASK#4 P0-1):
//  - Đăng ký LUÔN trả 200 nếu validate OK. 3 lưới (engine/E1/Salekit) ĐỘC LẬP, chạy NỀN waitUntil().
//  - Engine = nơi LƯU chính (CRM + tag + E0 enroll 'aiboss-workshop-pre'). Engine fail KHÔNG nuốt im:
//    console.error LOUD + alert hook (REGISTER_ALERT_WEBHOOK_URL nếu set) — mất lead = đúng cái Owner sợ.

import { randomUUID } from 'node:crypto';
import { waitUntil } from '@vercel/functions';
import { sendE1Email } from '@/lib/resend-e1';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

// Salekit (legacy, best-effort tier 3)
const SALEKIT_ENDPOINT = process.env.SALEKIT_ENDPOINT;
const SALEKIT_TOKEN = process.env.SALEKIT_TOKEN;
const LEAD_TAG = 'aiboss-ocathanh';

// Engine — primary persistence + E0
const ENGINE_SUBSCRIBE_URL =
  process.env.ENGINE_SUBSCRIBE_URL || 'https://email.aiboss.vn/api/subscribe';
const WORKSHOP_SEQUENCE_SLUG = 'aiboss-workshop-pre';
const ENGINE_TIMEOUT_MS = 12000;

const REGISTER_ALERT_WEBHOOK_URL = process.env.REGISTER_ALERT_WEBHOOK_URL;
const ALERT_TIMEOUT_MS = 3000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message) {
  return Response.json({ ok: false, error: message }, { status: 400 });
}

async function sendRegisterAlert(text) {
  console.error('[register] ALERT', text);
  if (!REGISTER_ALERT_WEBHOOK_URL) return;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ALERT_TIMEOUT_MS);
  try {
    await fetch(REGISTER_ALERT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: `[register] ${text}`, source: 'aiboss.ocathanh.com/register' }),
      signal: ctrl.signal,
    });
  } catch (err) {
    console.error('[register] alert webhook lỗi', String(err));
  } finally {
    clearTimeout(timer);
  }
}

// Engine = primary. Fail/capture-only/404 → alert LOUD (bài học gap 15-18/6: alert-on-fail bắt buộc).
async function enrollViaEngine({ full_name, email, eventId }) {
  const payload = {
    email,
    name: full_name,
    source: 'workshop-ocathanh',
    sequence_slug: WORKSHOP_SEQUENCE_SLUG,
    tags: ['aiboss-ocathanh'],
    metadata: { event_id: eventId, page: 'aiboss.ocathanh.com' },
    honeypot: '',
  };

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ENGINE_TIMEOUT_MS);
  try {
    const res = await fetch(ENGINE_SUBSCRIBE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
    const data = await res.json().catch(() => ({}));

    const enrolledOk =
      res.ok &&
      data?.success === true &&
      (data.enrolled === true || data.already_enrolled === true || data.suppressed === true);

    if (!enrolledOk) {
      await sendRegisterAlert(
        `ENGINE ENROLL FAILED (E0 KHÔNG đảm bảo) status=${res.status} resp=${JSON.stringify(data)} email=${email}`
      );
      return;
    }
    if (data.enrolled === true && data.e0_sent === false) {
      await sendRegisterAlert(`ENGINE enrolled nhưng E0 KHÔNG gửi (e0_sent=false) email=${email}`);
    }
  } catch (err) {
    await sendRegisterAlert(`ENGINE network/timeout error (E0 KHÔNG đảm bảo) ${String(err)} email=${email}`);
  } finally {
    clearTimeout(timer);
  }
}

// Salekit forward — best-effort tier 3. Thiếu env / lỗi đều KHÔNG hỏng đăng ký.
async function forwardSalekit({ full_name, email }) {
  if (!SALEKIT_ENDPOINT || !SALEKIT_TOKEN) return;
  try {
    await fetch(SALEKIT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Token: SALEKIT_TOKEN },
      body: JSON.stringify({
        full_name,
        email,
        tag: LEAD_TAG,
        src: 'aiboss.ocathanh.com',
        type: 2,
      }),
    });
  } catch (err) {
    console.error('[register] salekit best-effort lỗi', String(err));
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest('Dữ liệu gửi đi không hợp lệ.');
  }

  const full_name = (body?.full_name || '').toString().trim();
  const email = (body?.email || '').toString().trim().toLowerCase();

  if (!full_name || full_name.length < 2) {
    return badRequest('Vui lòng nhập họ và tên của bạn.');
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return badRequest('Email không đúng định dạng.');
  }

  const eventId = randomUUID();

  // 3 lưới độc lập chạy nền — form trả 200 tức thì.
  waitUntil(
    Promise.allSettled([
      enrollViaEngine({ full_name, email, eventId }),
      sendE1Email({ fullName: full_name, email, eventId }).catch((err) =>
        console.error('[register] E1 best-effort lỗi (đăng ký vẫn OK):', String(err))
      ),
      forwardSalekit({ full_name, email }),
    ])
  );

  return Response.json({ ok: true });
}
