// /api/register — Salekit proxy

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Salekit credentials stay server-side and should be set in Vercel env vars.
const SALEKIT_ENDPOINT = process.env.SALEKIT_ENDPOINT;
const SALEKIT_TOKEN = process.env.SALEKIT_TOKEN;
const LEAD_TAG = 'aiboss-ocathanh';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message) {
  return Response.json({ ok: false, error: message }, { status: 400 });
}

function serverError(message) {
  return Response.json({ ok: false, error: message }, { status: 500 });
}

export async function POST(request) {
  if (!SALEKIT_ENDPOINT || !SALEKIT_TOKEN) {
    console.error('[register] Missing Salekit environment variables');
    return serverError('Hệ thống đăng ký chưa được cấu hình. Vui lòng thử lại sau.');
  }

  // Parse body
  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest('Dữ liệu gửi đi không hợp lệ.');
  }

  const full_name = (body?.full_name || '').toString().trim();
  const email = (body?.email || '').toString().trim().toLowerCase();

  // Validate
  if (!full_name || full_name.length < 2) {
    return badRequest('Vui lòng nhập họ và tên của bạn.');
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return badRequest('Email không đúng định dạng.');
  }

  // Forward to Salekit
  try {
    const salekitRes = await fetch(SALEKIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Token': SALEKIT_TOKEN,
      },
      body: JSON.stringify({
        full_name,
        email,
        tag: LEAD_TAG,
        src: 'aiboss.ocathanh.com',
        type: 2,
      }),
    });

    if (!salekitRes.ok) {
      const text = await salekitRes.text().catch(() => '');
      console.error('[register] Salekit error', salekitRes.status, text);
      return serverError(
        'Không thể gửi đăng ký lúc này. Vui lòng thử lại sau ít phút.'
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('[register] Network error', err);
    return serverError('Kết nối tới hệ thống đăng ký bị gián đoạn. Vui lòng thử lại.');
  }
}
