import RegisterForm from './RegisterForm';
import { config } from '@/lib/config';

export default function ClosingCTA() {
  return (
    <section
      id="register"
      className="section relative overflow-hidden bg-navy-900 text-cream"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px]
                      rounded-full bg-gold-500/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px]
                      rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-page relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — Câu định vị + portrait */}
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-gold-300 mb-5">
            Đăng ký workshop miễn phí
          </div>
          <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl
                         font-bold leading-[1.05] mb-8">
            AI không cần<br />
            bạn diễn.<br />
            <span className="italic text-gold-300">AI cần bạn rõ.</span>
          </h2>

          <p className="text-base sm:text-lg text-cream/80 mb-6 max-w-xl leading-relaxed">
            Nếu bạn đã dùng AI nhưng nội dung vẫn chưa đúng chất, chưa đồng bộ,
            chưa ra hệ thống — workshop AIBOSS AUTO CONTENT có thể giúp bạn thiết lập nền tảng.
          </p>

          <p className="text-base text-cream/80 mb-10 max-w-xl leading-relaxed">
            Đăng ký để giữ chỗ workshop {config.nextWorkshop.dateShort} và vào nhóm kín cùng Thanh.
          </p>

          <div className="hidden lg:block max-w-sm">
            <img
              src="/eroca-welcome.jpg"
              alt="Eroca Thanh — chào đón"
              className="rounded-3xl shadow-2xl border-2 border-gold-400/30"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT — Form card */}
        <div className="relative">
          <div className="rounded-3xl bg-cream p-7 sm:p-10 shadow-2xl">
            <h3 className="display-text text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
              Đăng ký workshop AIBOSS AUTO CONTENT miễn phí
            </h3>
            <p className="text-sm text-navy-600 mb-7">
              {config.nextWorkshop.dateRange} · {config.nextWorkshop.timeShort} · 3 buổi liên tiếp · Trực tiếp qua mạng
            </p>

            <RegisterForm />
          </div>

          <p className="mt-6 text-center text-sm text-cream/70 italic">
            Thanh ưu tiên chia sẻ cho bạn nào đăng ký trước.
          </p>
        </div>
      </div>
    </section>
  );
}
