const OLD_WAY = [
  'Mở chat mới mỗi lần',
  'Dán lại bối cảnh mỗi phiên chat',
  'Nhiều kênh, nhiều giọng khác nhau',
  'Bài ra đúng nhưng nghe chung chung',
  'Câu lệnh rời rạc → nội dung rời rạc',
  'Càng dùng AI càng dễ giống người khác',
];

const NEW_WAY = [
  'Một văn phòng ảo có trí nhớ — không phải cửa sổ chat rời rạc',
  'Dự án AI có file DNA cá nhân làm nền',
  'Thiết lập một lần — dùng lại nhiều lần',
  'Nhiều kênh nhưng có cùng một gốc giọng',
  'Bài ra có định hướng hơn, gần đúng chất của bạn hơn',
  'Càng dùng AI càng có dữ liệu để chỉnh hệ thống rõ hơn',
];

export default function CounterPositioning() {
  return (
    <section className="section bg-cream-paper">
      <div className="container-page">
        <div className="text-center mb-14">
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-navy-900 max-w-3xl mx-auto leading-tight mb-6">
            Bạn cần một hệ thống —{' '}
            <span className="italic text-gold-600">không phải</span> thêm
            một thư viện câu lệnh.
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-navy-700 leading-relaxed">
            <p>
              Bạn không cần thêm một thư viện câu lệnh để chép cho nhanh hơn.
            </p>
            <p>
              Bạn cần một hệ thống để AI hiểu bạn, hiểu khách hàng của bạn,
              và tạo nội dung có vị trí trong hành trình mua hàng.
            </p>
            <p className="font-semibold text-navy-900">
              Câu lệnh rời rạc chỉ tạo ra nội dung rời rạc.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {/* Cách cũ */}
          <article className="rounded-2xl bg-white p-7 sm:p-8 shadow-sm
                              border-l-4 border-navy-200">
            <div className="text-xs font-bold uppercase tracking-widest text-navy-400 mb-2">
              Cách cũ
            </div>
            <h3 className="display-text text-xl font-bold text-navy-700 mb-6">
              Câu lệnh rời rạc
            </h3>
            <ul className="space-y-3.5">
              {OLD_WAY.map((line, i) => (
                <li key={i} className="flex gap-3 text-sm text-navy-600 leading-relaxed">
                  <span className="text-navy-300 mt-1 flex-shrink-0">✕</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* AI Content OS */}
          <article className="rounded-2xl bg-navy-900 p-7 sm:p-8 shadow-xl
                              text-cream relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gold-500/15 blur-2xl" />
            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-widest text-gold-300 mb-2">
                AI Content OS
              </div>
              <h3 className="display-text text-xl font-bold text-cream mb-6">
                Hệ thống có nền
              </h3>
              <ul className="space-y-3.5">
                {NEW_WAY.map((line, i) => (
                  <li key={i} className="flex gap-3 text-sm text-cream/90 leading-relaxed">
                    <span className="text-gold-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
