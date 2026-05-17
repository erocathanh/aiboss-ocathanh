import { config } from '@/lib/config';

export default function MidCTA() {
  return (
    <section className="section relative overflow-hidden bg-navy-900 text-cream">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-page relative grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-gold-300 mb-5">
            Câu định vị
          </div>
          <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl
                         font-bold leading-[1.05] mb-8">
            AI không cần<br />
            bạn diễn.<br />
            <span className="italic text-gold-300">AI cần bạn rõ.</span>
          </h2>

          <p className="text-lg text-cream/80 max-w-xl mb-8 leading-relaxed">
            Đăng ký workshop miễn phí {config.nextWorkshop.dateShort} để vào nhóm kín cùng Thanh
            và nhận tài liệu chuẩn bị trước.
          </p>

          <a href="#register" className="btn-primary">
            Giữ chỗ workshop miễn phí
          </a>
        </div>

        <div className="hidden lg:block w-72">
          <div className="relative">
            <div className="absolute -inset-3 border-2 border-gold-400/40 rounded-3xl rotate-3" />
            <img
              src="/eroca-energy.jpg"
              alt="Eroca Thanh"
              className="relative rounded-3xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
