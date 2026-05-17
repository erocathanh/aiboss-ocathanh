const TESTIMONIALS = [
  {
    name: 'bạn Hairteen Hùng',
    role: 'Chủ salon tóc và học viện đào tạo tóc',
    quote: 'Cái gì nó cũng có bí quyết của nó cả.',
    body: [
      'Trước đây bạn Hairteen Hùng nghĩ đơn giản là cứ lên quay video là được.',
      'Sau khi học, bạn ấy nhận ra video cần có bố cục, cách mở đầu và cách dẫn dắt để khách hàng xem tiếp.',
      'Kênh YouTube của bạn ấy đạt hơn ba mươi nghìn người theo dõi, có trang đích tiếp cận khách hàng và có học viên đăng ký khóa đào tạo salon tóc.',
    ],
  },
  {
    name: 'anh Khánh Toàn',
    role: 'Giám đốc công ty bao bì giấy B2B (HCM)',
    quote: 'Cộng đồng có Sport hỗ trợ học viên đến tận khuya. Thầy dạy không ngừng nghỉ.',
    body: [
      'Trước khi học, anh Khánh Toàn rất sợ quảng cáo — nghĩ chạy quảng cáo là mất tiền.',
      'Sau khoá học, anh ấy đổi tư duy: quảng cáo không phải chi phí, mà là đầu tư có thể đo được.',
      'Điều anh Khánh Toàn nhắc rõ nhất là cộng đồng và đội Coach + Support hỗ trợ học viên đến tận khuya.',
    ],
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-navy-50">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="text-sm font-bold uppercase tracking-widest text-gold-600 mb-3">
            Học viên Eroca
          </div>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-navy-900">
            Học viên Eroca Thanh nói gì?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-white p-7 sm:p-9 shadow-sm
                         hover:shadow-lg transition-shadow"
            >
              {t.quote && (
                <div className="quote-mark mb-2">
                  <p className="display-text text-xl sm:text-2xl
                                font-medium italic text-navy-900 leading-snug">
                    {t.quote}
                  </p>
                </div>
              )}

              <div className="space-y-3 text-navy-700 leading-relaxed text-sm sm:text-base">
                {t.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-navy-100">
                <div className="font-bold text-navy-900">{t.name}</div>
                <div className="text-sm text-navy-500">{t.role}</div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-navy-600 max-w-2xl mx-auto leading-relaxed">
          Học viên Eroca Thanh đến từ nhiều ngành — salon tóc, bán hàng online,
          dịch vụ chuyên gia, xây thương hiệu cá nhân.<br />
          Mỗi người một ngách khác nhau — nhưng cùng một điểm: có quy trình thì
          nội dung rõ hơn, dễ kiểm tra hơn, và dễ dẫn người xem đi tiếp hơn.
        </p>
      </div>
    </section>
  );
}
