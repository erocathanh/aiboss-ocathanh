const SESSIONS = [
  {
    day: 'BUỔI 1',
    date: 'Thứ Ba 19/5 · 20h-23h',
    title: 'Thiết lập AI Content OS — Hệ điều hành nội dung cá nhân',
    experiences: [
      'Hiểu AI Content OS là hệ điều hành cá nhân — không phải thêm một công cụ',
      'Phân biệt 3 cách dùng AI qua 3 ẩn dụ dễ nhớ: thực tập sinh não cá vàng, đường ống nhựa cứng, văn phòng ảo',
      'Diễn thử trực tiếp 3-5 người + thực hành viết DNA 6 lớp v0.1',
      'Giới thiệu Ma trận 4×3 — chọn 1 ô để bắt đầu',
    ],
    outputs: [
      'File DNA cá nhân v0.1 — đủ 6 lớp: giọng, câu chuyện, quan điểm, điều tránh, cách kể, ngách',
      'Project Claude đầu tiên đã nạp sẵn DNA cá nhân của bạn',
      'Bài tập 1 ô trong Ma trận 4×3 — nộp nhóm kín trong 24 giờ',
    ],
    framework: 'AI Content OS + DNA 6 lớp',
  },
  {
    day: 'BUỔI 2',
    date: 'Thứ Tư 20/5 · 20h-23h',
    title: 'Phương pháp lớn hơn công cụ — Từ một ý tưởng đến nội dung đúng giai đoạn',
    experiences: [
      'Phân biệt 2 lớp: tri thức (DNA + Ma trận) và thực thi (câu lệnh + phần mềm)',
      '3 câu chuyện thật: Chị Mai làm với ChatGPT đơn giản, Anh Tú tự ráp với Claude, Công ty Bất Động Sản X giải phóng 2 nhân sự',
      'Đi sâu Ma trận 4×3 — thực hành đủ 12 ô',
      'Bộ 9 ô câu lệnh — thử ngay một ô tại buổi',
    ],
    outputs: [
      '1 bài nội dung hoàn chỉnh áp dụng DNA + Ma trận + bộ câu lệnh khung',
      'Trợ lý AI Eroca chấm bài tự động — trả điểm + nhận xét cụ thể',
      'Bài tập nộp nhóm kín 24 giờ — bài 8/10+ nhận quà từ Thanh',
    ],
    framework: 'Tri thức và Thực thi + 9 ô câu lệnh',
  },
  {
    day: 'BUỔI 3',
    date: 'Thứ Năm 21/5 · 20h-23h',
    title: 'Bản đồ 5 tầng AI Content OS — Vị trí của bạn và bước đi tiếp theo',
    experiences: [
      'Bản đồ 5 tầng đầy đủ: DNA → Kho tri thức + Ma trận → 9 ô câu lệnh → Phần mềm AIBOSS → Hệ điều hành riêng',
      'Phân loại Nhóm A (hướng ngoại) và Nhóm B (hướng nội) — công thức ông bầu cho người hướng nội',
      'Hỏi đáp trực tiếp + nhóm kín đồng hành sau workshop',
    ],
    outputs: [
      'Bản đồ 5 tầng AI Content OS — biết mình đang ở tầng nào',
      'Lộ trình tự xây hệ thống nội dung cho ngách của mình',
      'Hiểu rõ AI Content OS vận hành thế nào trong 90 ngày đầu',
    ],
    framework: 'Bản đồ 5 tầng AI Content OS',
  },
];

export default function WorkshopAgenda() {
  return (
    <section id="workshop" className="section">
      <div className="container-page">
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-gold-600 mb-3">
            Workshop · 3 buổi liên tiếp
          </div>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-navy-900 mb-5">
            Ba buổi.<br />
            Ba kết quả cầm về tay.
          </h2>
          <p className="text-base sm:text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Workshop này không dạy bạn chép câu lệnh nhanh hơn.
            Workshop này giúp bạn thiết lập nền tảng để AI làm việc theo
            DNA cá nhân, hành trình khách hàng và chiến lược nội dung của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {SESSIONS.map((s, i) => (
            <article
              key={s.day}
              className="relative rounded-2xl bg-white p-7 sm:p-8
                         shadow-sm hover:shadow-xl transition-all
                         border-t-4 border-gold-400"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="display-text text-3xl sm:text-4xl font-bold text-gold-500">
                  {s.day}
                </span>
                <span className="text-xs text-navy-400 font-mono">0{i + 1}/03</span>
              </div>
              <div className="text-xs text-navy-500 font-medium mb-5">
                {s.date}
              </div>

              <h3 className="display-text text-xl sm:text-2xl font-bold
                             text-navy-900 leading-tight mb-6 min-h-[3.5rem]">
                {s.title}
              </h3>

              {s.experiences && (
                <>
                  <div className="text-xs uppercase tracking-wider text-navy-500 font-bold mb-3">
                    Trải nghiệm trong buổi
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {s.experiences.map((e, j) => (
                      <li key={j} className="flex gap-3 text-sm text-navy-700 leading-relaxed">
                        <span className="text-gold-500 font-bold flex-shrink-0">→</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="text-xs uppercase tracking-wider text-navy-500 font-bold mb-3">
                Bạn cầm về tay
              </div>
              <ul className="space-y-2.5 mb-6">
                {s.outputs.map((o, j) => (
                  <li key={j} className="flex gap-3 text-sm text-navy-700 leading-relaxed">
                    <span className="text-gold-500 font-bold flex-shrink-0">→</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-navy-100">
                <div className="text-xs uppercase tracking-wider text-navy-400 font-semibold">
                  Khung phương pháp
                </div>
                <div className="text-sm font-semibold text-navy-800 mt-1">
                  {s.framework}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Boundary note */}
        <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
          <p className="text-sm text-navy-500 italic text-center leading-relaxed">
            Workshop miễn phí tập trung vào phương pháp, tài liệu thực hành,
            nhóm kín và hướng dẫn trực tiếp. Quyền dùng phần mềm riêng không nằm trong workshop miễn phí.
          </p>
        </div>
      </div>
    </section>
  );
}
