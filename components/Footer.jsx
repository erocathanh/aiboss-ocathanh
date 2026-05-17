import { config } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-cream/70 py-10 border-t border-cream/10">
      <div className="container-page text-center text-sm leading-relaxed">
        <p className="mb-3">
          Workshop miễn phí · 3 buổi liên tiếp · {config.nextWorkshop.dateRange} ·
          {config.nextWorkshop.timeRange} · Trực tiếp qua mạng · Nhóm kín chuẩn bị trước workshop
        </p>
        <p className="text-xs text-cream/50">
          © 2026 AIBOSS AUTO CONTENT · Eroca Thanh · Maracafi Limited
        </p>
      </div>
    </footer>
  );
}
