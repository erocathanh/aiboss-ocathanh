// E1 — email tài liệu + nhóm Zalo + lịch 3 buổi, gửi QUA cổng engine /api/send
// (log /crm/sent + idempotency + scheduledAt +5p native). PORT từ aiboss-landing-v2 (variant A,
// pattern PM-verified 29/6) — copy/QR/bridge GIỮ NGUYÊN funnel chung; chỉ đổi sourceApp + utm_content.
// Nội dung ngày ĐỌC DYNAMIC config.nextWorkshop (per convention — auto-đúng mọi edition).

import { config } from './config';

const ENGINE_SEND_URL = process.env.ENGINE_SEND_URL || 'https://email.aiboss.vn/api/send';
const E1_DELAY_MINUTES = 5;
const REPLY_TO = 'admin@erocathanh.com';
const BRIDGE_URL = process.env.E1_BRIDGE_URL || 'https://zalo.ocathanh.vn/aiboss-workshop';
const BRIDGE_URL_UTM = `${BRIDGE_URL}?utm_source=email-aiboss-workshop&utm_medium=email&utm_campaign=aiboss-workshop-r4&utm_content=e1-ocathanh`;
// QR dùng asset LIVE của variant A (workshop.aiboss.vn — cùng nhóm Zalo, cùng funnel;
// repo này không có file QR local. Email proxy tải URL public tuyệt đối OK).
const QR_URL = 'https://workshop.aiboss.vn/zalo-qr.jpg';

const SUBJECT = 'Trong nhóm Zalo có sẵn tài liệu cho bạn rồi';
const PREHEADER =
  'DNA Starter + Ma trận 4×3 + video setup + link Zoom — tất cả trong nhóm kín.';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Topic 3 buổi ỔN ĐỊNH mọi edition; chỉ NGÀY dynamic từ config.nextWorkshop.sessions.
const SESSION_TOPICS = [
  'DNA cá nhân 6 lớp + Ma trận 4×3',
  'Tri thức và Thực thi + 9 ô câu lệnh',
  '5 tầng AI Content OS + 3 con đường đi tiếp',
];
function scheduleItems() {
  return config.nextWorkshop.sessions.map((s, i) => {
    const dayDate = String(s.date || '').split(' · ')[0].trim(); // "Thứ Ba 14/7"
    return `Buổi ${i + 1} (tối ${dayDate}): ${SESSION_TOPICS[i] || ''}`;
  });
}

function buildHtml(safeName) {
  const link = `<a href="${BRIDGE_URL_UTM}" style="color:#a3771b;font-weight:600;text-decoration:underline;">Vào nhóm Zalo kín của lớp</a>`;
  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;font-size:16px;line-height:1.65;color:#102a43;max-width:600px;margin:0 auto;">
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${PREHEADER}</div>
    <p>Hi ${safeName},</p>
    <p>Đây là link nhóm Zalo kín lớp mình — như Thanh hứa trong email trước:</p>
    <p>👉 ${link}</p>
    <p style="margin:0 0 6px;"><img src="${QR_URL}" alt="QR vào nhóm Zalo kín của lớp" width="200" style="display:block;width:200px;max-width:100%;height:auto;border:0;" /></p>
    <p>Vào nhóm rồi, bạn nhận được:</p>
    <ul style="padding-left:18px;margin:0 0 20px;">
      <li style="margin:0 0 8px;">File DNA Cá Nhân Starter — template 6 lớp để bạn warm up trước Buổi 1</li>
      <li style="margin:0 0 8px;">File Ma trận 4×3 Starter — 12 ô chiến lược nội dung</li>
      <li style="margin:0 0 8px;">Video hướng dẫn tạo Project Claude/ChatGPT trong 5 phút</li>
      <li style="margin:0 0 8px;">Link vào phòng Zoom cả 3 buổi</li>
      <li style="margin:0 0 8px;">Chỗ để bạn hỏi — Thanh và đội hỗ trợ trả lời ngay trong nhóm</li>
    </ul>
    <p>3 buổi đi qua 3 chặng:</p>
    <ul style="padding-left:18px;margin:0 0 20px;">
      ${scheduleItems().map((it) => `<li style="margin:0 0 8px;">${it}</li>`).join('')}
    </ul>
    <p>Mỗi buổi xây 1-2 phần. Bạn cố gắng đừng vắng buổi nào nha.</p>
    <p>Hẹn bạn trong nhóm.</p>
    <p style="margin-top:28px;">— Eroca Thanh</p>
    <p style="font-size:14px;color:#243b53;">P.S. Bạn chưa thấy nhóm hiện ra? Có thể Thanh đang duyệt — bạn chờ chút, hoặc reply email này Thanh duyệt nhanh cho bạn.</p>
  </div>`;
}

function buildText(fullName) {
  return `Hi ${fullName},

Đây là link nhóm Zalo kín lớp mình — như Thanh hứa trong email trước:

👉 Vào nhóm Zalo kín của lớp: ${BRIDGE_URL}

Vào nhóm rồi, bạn nhận được:
- File DNA Cá Nhân Starter — template 6 lớp để bạn warm up trước Buổi 1
- File Ma trận 4×3 Starter — 12 ô chiến lược nội dung
- Video hướng dẫn tạo Project Claude/ChatGPT trong 5 phút
- Link vào phòng Zoom cả 3 buổi
- Chỗ để bạn hỏi — Thanh và đội hỗ trợ trả lời ngay trong nhóm

3 buổi đi qua 3 chặng:
${scheduleItems().map((it) => `- ${it}`).join('\n')}

Mỗi buổi xây 1-2 phần. Bạn cố gắng đừng vắng buổi nào nha.

Hẹn bạn trong nhóm.

— Eroca Thanh

P.S. Bạn chưa thấy nhóm hiện ra? Có thể Thanh đang duyệt — bạn chờ chút, hoặc reply email này Thanh duyệt nhanh cho bạn.`;
}

// "Name <email>" → { fromName, fromEmail }
function parseFrom(s) {
  const m = String(s || '').match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  if (m) return { fromName: m[1] || undefined, fromEmail: m[2].trim() };
  const v = String(s || '').trim();
  return { fromName: undefined, fromEmail: v || undefined };
}

// Gửi E1 QUA cổng engine. Throw khi lỗi — caller PHẢI try/catch (lỗi không được fail form).
export async function sendE1Email({ fullName, email, eventId }) {
  const apiKey = process.env.INTERNAL_SEND_API_KEY;
  if (!apiKey) {
    console.error('[resend-e1] Missing INTERNAL_SEND_API_KEY — skip E1');
    return null;
  }

  const { fromName, fromEmail } = parseFrom(process.env.RESEND_FROM || 'Eroca Thanh <admin@ocathanh.vn>');
  const scheduledAt = new Date(Date.now() + E1_DELAY_MINUTES * 60 * 1000).toISOString();

  const res = await fetch(ENGINE_SEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-internal-key': apiKey },
    body: JSON.stringify({
      toEmail: email,
      subject: SUBJECT,
      html: buildHtml(escapeHtml(fullName)),
      plain: buildText(fullName),
      kind: 'transactional',
      fromName,
      fromEmail,
      replyTo: REPLY_TO,
      scheduledAt,
      idempotencyKey: eventId ? `e1-${eventId}` : `e1-${String(email).toLowerCase()}`,
      sourceApp: 'aiboss-ocathanh-e1',
      metadata: { trigger_url: 'https://aiboss.ocathanh.com' }, // #8 provenance — trang kích hoạt E1
    }),
  });

  if (res.status === 409) {
    console.log('[resend-e1] đã gửi trước đó (idempotent)', email);
    return { alreadySent: true };
  }
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`engine /api/send ${res.status}: ${detail.slice(0, 300)}`);
  }

  const data = await res.json().catch(() => null);
  console.log('[resend-e1] E1 scheduled (qua engine)', data?.id || '(no id)', 'for', scheduledAt);
  return data;
}
