import { config } from '@/lib/config';

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 bg-cream-paper -z-10" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold-200/30 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-navy-200/40 blur-3xl -z-10" />

      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full
                          bg-navy-900 text-cream px-4 py-1.5
                          text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
            Workshop miễn phí · {config.nextWorkshop.dateRange}
          </div>

          <h1 className="display-text text-4xl sm:text-5xl lg:text-6xl
                         font-bold text-navy-900 leading-[1.05] mb-6">
            Bạn không mệt<br />
            vì làm nhiều.<br />
            Bạn mệt vì{' '}
            <span className="italic text-gold-600">nhảy giữa<br />quá nhiều màn hình.</span>
          </h1>

          <p className="text-lg sm:text-xl text-navy-700 mb-6 leading-relaxed max-w-xl">
            Một sáng — Zalo trả 5 khách, email trả đối tác, mở ChatGPT viết bài,
            qua Gemini kiểm chéo, Facebook duyệt quảng cáo, quay lại Zalo.
            Mỗi lần đổi màn hình, não cần 20 phút để lấy lại tập trung sâu.
          </p>

          <p className="text-base sm:text-lg text-navy-700 mb-8 leading-relaxed max-w-xl">
            <span className="font-semibold text-navy-900">30 lần một ngày = 10 tiếng năng lượng bốc hơi.</span>{' '}
            Cuối ngày bạn mệt — không phải vì suy nghĩ nhiều, mà vì
            cái đầu phải khởi động lại 30 lần.
          </p>

          <p className="text-sm text-navy-500 mb-10 max-w-xl leading-relaxed">
            Workshop miễn phí 3 buổi giúp bạn xây AI Content OS — một dòng lệnh
            thay 5 tab, để dành năng lượng cho việc thật sự đáng làm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#register" className="btn-primary">
              Đăng ký workshop miễn phí {config.nextWorkshop.dateShort}
            </a>
            <a href="#workshop" className="btn-ghost">
              Xem 3 buổi workshop
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2
                          text-sm text-navy-600">
            <span className="flex items-center gap-2">
              <span className="text-gold-500">●</span> 20h-23h giờ Việt Nam
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold-500">●</span> Trực tiếp qua mạng
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold-500">●</span> Miễn phí
            </span>
          </div>

          <p className="mt-6 text-sm text-navy-500 italic leading-relaxed">
            Workshop diễn ra 2 lần/tháng. Phiên bản gần nhất: {config.nextWorkshop.dateRange}.
          </p>

          {/* Story quote — anchor signature của Eroca, variant B */}
          <blockquote className="mt-10 rounded-2xl bg-cream/70 border-l-4 border-gold-500
                                  p-6 sm:p-7 max-w-xl">
            <p className="display-text text-base sm:text-lg italic text-navy-900
                          leading-snug mb-3">
              &ldquo;Có một hôm Thanh nhận ra:
              mình không mệt vì làm nhiều.<br />
              Mình mệt vì 30 lần một ngày — Zalo, email,
              &lsquo;ây ai&rsquo;, Facebook, quay lại Zalo.&rdquo;
            </p>
            <footer className="text-xs text-navy-500 uppercase tracking-wider font-semibold">
              — Eroca Thanh
            </footer>
          </blockquote>
        </div>

        {/* RIGHT — portrait */}
        <div className="relative animate-fade-in order-first lg:order-last">
          <div className="relative">
            {/* Decorative frame behind */}
            <div className="absolute -inset-4 sm:-inset-6 bg-navy-900 rounded-3xl rotate-3" />
            <div className="absolute -inset-2 sm:-inset-3 border-2 border-gold-400 rounded-3xl -rotate-2" />

            <img
              src="/eroca-laptop.jpg"
              alt="Eroca Thanh — người tổ chức và điều phối nhiều trợ lý AI"
              className="relative rounded-3xl w-full object-cover aspect-[4/3] shadow-2xl"
              loading="eager"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-cream
                            rounded-2xl shadow-xl p-4 sm:p-5 max-w-[260px]
                            border-l-4 border-gold-500">
              <div className="text-xs uppercase tracking-wider text-navy-500 font-bold mb-1">
                Eroca Thanh
              </div>
              <div className="text-sm text-navy-800 font-medium leading-snug">
                Người sáng lập Maracafi Limited tại Anh.
                Người tổ chức và điều phối nhiều trợ lý AI
                cho công việc hằng ngày.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Punchline strip */}
      <div className="container-page mt-20 sm:mt-28">
        <div className="rounded-3xl bg-navy-900 text-cream
                        p-8 sm:p-12 lg:p-16 text-center
                        relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="relative">
            <p className="display-text text-2xl sm:text-3xl lg:text-4xl
                          font-medium leading-tight">
              Vấn đề không phải bạn lười.<br />
              Vấn đề là{' '}
              <span className="text-gold-300 italic">
                đầu bạn đang trả phí chuyển ca 30 lần mỗi ngày.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
