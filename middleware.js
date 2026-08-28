import { NextResponse } from 'next/server';

// ĐANG TẠM DẪN HẾT VỀ LỚP FREE BIMATAI (Owner chốt 28/7/2026).
//
// Trang này là bản landing workshop AIBOSS AUTO CONTENT (biến thể ocathanh) và
// đang mời đợt 14-16/7/2026 — đã qua. Workshop 68k thì Owner chưa dựng (chờ làm
// webinar tự động). Nên mọi lượt vào trang gốc được chuyển sang lớp free đang mở:
// https://bimatai.erocathanh.com
//
// 👉 CÁCH LẬT LẠI khi có đợt mới cho trang này: xoá file middleware.js này (trang
//    gốc trong repo GIỮ NGUYÊN, không xoá gì), hoặc đổi REDIRECT_TO.
//    Dùng 307 (tạm thời) có chủ ý — trình duyệt KHÔNG cache cứng như 301/308.

const REDIRECT_TO = 'https://bimatai.erocathanh.com';

export function middleware(request) {
  const target = new URL(REDIRECT_TO);

  // Giữ nguyên query gốc (UTM từ quảng cáo/bài đăng) để còn đo được nguồn.
  request.nextUrl.searchParams.forEach((v, k) => target.searchParams.set(k, v));
  if (!target.searchParams.has('utm_source')) {
    target.searchParams.set('utm_source', 'aiboss-ocathanh');
    target.searchParams.set('utm_medium', 'referral');
    target.searchParams.set('utm_campaign', 'bimatai-k3');
  }

  return NextResponse.redirect(target, 307);
}

// Chỉ chạy ở trang gốc landing (không đụng /api, /_next, static asset).
export const config = {
  matcher: ['/'],
};
