const PERSONAS = [
  {
    label: 'Chủ doanh nghiệp nhỏ và vừa',
    body: [
      'Bạn đã bán hàng online được rồi.',
      'Bạn đang dùng AI nhưng chưa hệ thống hoá.',
      'Bạn muốn AI hỗ trợ theo đúng thương hiệu mình, thay vì tạo ra bài viết chung chung.',
    ],
  },
  {
    label: 'Chuyên gia / thương hiệu cá nhân',
    body: [
      'Bạn là người đồng hành, tư vấn, đào tạo, dạy học, hoặc xây thương hiệu cá nhân.',
      'Bạn có chuyên môn, có câu chuyện, có quan điểm.',
      'Bạn muốn mở rộng nội dung đa kênh nhưng vẫn giữ đúng dấu ấn riêng.',
    ],
  },
  {
    label: 'Đội ngũ nội dung 1-5 người',
    body: [
      'Team bạn đang dùng AI nhưng output không đồng bộ.',
      'Mỗi người một giọng. Mỗi kênh một kiểu.',
      'Bạn cần một hệ thống chung để team làm cùng một chuẩn.',
    ],
  },
];

export default function Audience() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="text-sm font-bold uppercase tracking-widest text-gold-600 mb-3">
            Dành cho ai
          </div>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-navy-900 mb-5">
            Workshop này dành cho ai?
          </h2>
          <p className="text-base text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Nếu bạn đã dùng AI 1-2 năm rồi nhưng nội dung vẫn chưa đúng chất,
            chưa đồng bộ giữa các kênh, chưa ra hệ thống — workshop này dành cho bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {PERSONAS.map((p, i) => (
            <article
              key={p.label}
              className="rounded-2xl bg-white p-7 hover:shadow-lg transition-shadow"
            >
              <div className="display-text text-3xl font-bold text-gold-400 mb-2">
                0{i + 1}
              </div>
              <h3 className="display-text text-lg font-bold text-navy-900 mb-5
                             leading-tight border-b border-navy-100 pb-4">
                {p.label}
              </h3>
              <div className="space-y-3 text-sm text-navy-700 leading-relaxed">
                {p.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-navy-500 italic max-w-2xl mx-auto">
          Workshop không dành cho người tìm &ldquo;làm giàu nhanh&rdquo;
          hoặc muốn AI làm hết mọi việc thay mình.
        </p>
      </div>
    </section>
  );
}
