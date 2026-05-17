const PAINS = [
  {
    num: '01',
    heading: 'Mỗi lần mở chat mới, bạn lại nhắc AI mình là ai từ đầu.',
    body: [
      'Một ngày vài chat AI mới.',
      'Mỗi chat lại phải nhắc: bạn là ai, bạn bán gì, bạn nói với ai, giọng thế nào, điều gì tránh.',
      'Mất vài phút mỗi lần. Một tháng, việc nhỏ đó cộng lại thành rất nhiều thời gian.',
      'Có tháng Thanh mở hơn năm mươi phiên chat khác nhau — chỉ để làm nội dung.',
      'Bạn cũng từng như vậy chứ?',
    ],
  },
  {
    num: '02',
    heading: 'Sáng nào cũng tự hỏi: mai đăng cái gì?',
    body: [
      'Bạn có Facebook. Có YouTube. Có TikTok. Có Email.',
      'Mỗi sáng lại bắt đầu bằng câu hỏi cũ: bài này viết cho ai?',
      'Khách mới chưa biết bạn — hay khách cũ đã mua một lần?',
      'Bài nào để khách biết tới bạn? Bài nào để khách hiểu giá trị? Bài nào để khách quyết định mua?',
      'Bạn không thiếu chủ đề. Bạn thiếu một cái khung để chọn chủ đề.',
    ],
  },
  {
    num: '03',
    heading: 'Bài viết ra nghe đúng — nhưng không giống bạn.',
    body: [
      'Bạn gõ câu lệnh dài. Dán bối cảnh. Dán ví dụ. Dán yêu cầu cụ thể.',
      'AI trả về một bài.',
      'Nghe đúng. Nghe sạch. Nghe có vẻ chuyên nghiệp.',
      'Nhưng đọc lại vẫn thấy thiếu chất.',
      'Không phải tại bạn lười. Không phải tại AI dở. Tại bạn chưa có khung câu lệnh khớp với DNA và Ma trận của bạn.',
    ],
  },
  {
    num: '04',
    heading: '30 lần một ngày, bạn nhảy giữa quá nhiều màn hình.',
    body: [
      'Tab Zalo trả khách. Tab email trả đối tác. Tab ChatGPT viết bài. Tab Gemini kiểm chéo. Tab Facebook duyệt quảng cáo.',
      'Mỗi lần đổi màn hình, đầu cần 20 phút để lấy lại tập trung sâu.',
      '30 lần một ngày = 10 tiếng năng lượng tinh thần bốc hơi.',
      'Bạn không mệt vì làm nhiều. Bạn mệt vì cái đầu phải khởi động lại 30 lần.',
    ],
  },
];

export default function Pain() {
  return (
    <section className="section bg-navy-50">
      <div className="container-page">
        <div className="text-center mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-navy-500 mb-3">
            Có quen không?
          </div>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-navy-900 max-w-3xl mx-auto leading-tight">
            Bạn có đang sống trong<br className="hidden sm:block" />
            những cảnh này không?
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
          {PAINS.map((pain, i) => (
            <article
              key={pain.num}
              className={`grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 ${
                i % 2 === 1 ? 'md:pl-16' : ''
              }`}
            >
              <div className="display-text text-6xl sm:text-7xl font-bold
                              text-gold-400 leading-none select-none">
                {pain.num}
              </div>
              <div>
                <h3 className="display-text text-2xl sm:text-3xl font-bold
                               text-navy-900 mb-5 leading-tight">
                  {pain.heading}
                </h3>
                <div className="space-y-3 text-navy-700 leading-relaxed">
                  {pain.body.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 sm:mt-24 text-center">
          <div className="inline-block">
            <p className="display-text text-2xl sm:text-3xl lg:text-4xl
                          font-medium text-navy-900 leading-tight max-w-3xl">
              Vấn đề không phải AI yếu.<br />
              Vấn đề là{' '}
              <span className="italic text-gold-600">
                bạn đang dùng AI rời rạc — chưa thành một hệ thống.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
