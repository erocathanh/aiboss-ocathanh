const ASSETS = [
  {
    icon: '🎁',
    title: 'File Workflow Claude Automation',
    description: 'Bộ tài liệu chính bạn nhận sau khi đăng ký. Đủ ba phần: sách điện tử 20+ trang về 4 bước Thanh đang dùng, gói Project Claude template để bạn nhập ngay, và video Thanh quay màn hình 15 phút đi qua đủ 4 bước. Thiết lập một lần. Dùng mãi.',
    format: 'PDF + Gói tài liệu + Video',
    badge: 'NHẬN NGAY',
    badgeStyle: 'now',
    featured: true,
  },
  {
    icon: '🧬',
    title: 'File DNA cá nhân khởi động',
    description: 'Bản đồ nhận diện 6 lớp DNA + bảng thực hành. Giúp bạn viết bản DNA cá nhân đầu tiên trong khoảng 15 đến 45 phút. Thiết lập một lần để mỗi lần viết, AI không còn bắt đầu từ con số 0.',
    format: 'Google Doc / file Markdown',
    badge: 'NHẬN NGAY',
    badgeStyle: 'now',
  },
  {
    icon: '📊',
    title: 'Ma trận 4×3 khởi động',
    description: 'Khung 12 ô nội dung phủ trọn hành trình khách hàng. 4 hàng SEE / THINK / DO / CARE (Nhìn thấy / Nghĩ về / Hành động / Quan tâm). 3 cột HERO / HUB / HELP (Đỉnh / Trung tâm / Hỗ trợ). Không còn tự hỏi "mai đăng cái gì". Không còn mỗi kênh một kiểu nói.',
    format: 'Google Sheet / PDF',
    badge: 'NHẬN NGAY',
    badgeStyle: 'now',
  },
  {
    icon: '🎥',
    title: 'Video PT-1 — Thiết lập Project Claude trong 5 phút',
    description: 'Thanh quay màn hình từng bước: mở Claude.ai → tạo Project mới → dán hướng dẫn vào Project → nạp file DNA → thử một câu lệnh. Bạn xem trước Buổi 1 để vào buổi là thực hành luôn.',
    format: 'Video nhóm kín · khoảng 10 phút',
    badge: 'MỞ DẦN TRONG NHÓM KÍN',
    badgeStyle: 'soon',
  },
  {
    icon: '🧭',
    title: 'Video PT-2 — DNA 6 lớp toàn cảnh',
    description: 'Toàn cảnh 6 lớp DNA: giọng, câu chuyện, quan điểm, điều tránh, cách kể, ngách. Bạn hiểu khái niệm trước Buổi 1 để buổi học tập trung vào thực hành viết DNA v0.1.',
    format: 'Video nhóm kín · khoảng 10 phút',
    badge: 'MỞ DẦN TRONG NHÓM KÍN',
    badgeStyle: 'soon',
  },
  {
    icon: '🗝',
    title: 'Câu lệnh khung',
    description: 'Bộ câu lệnh khung dùng cùng file DNA cá nhân. Không phải câu lệnh chép-dán. Đây là khung làm việc cần bối cảnh DNA cá nhân mới hoạt động đúng.',
    format: 'Markdown / PDF',
    badge: 'MỞ DẦN TRONG NHÓM KÍN',
    badgeStyle: 'soon',
  },
];

export default function StarterLibrary() {
  return (
    <section id="starter" className="section bg-cream">
      <div className="container-page">
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-gold-600 mb-3">
            Tài liệu chuẩn bị workshop
          </div>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-navy-900 mb-4">
            Bộ tài liệu khởi động AIBOSS
          </h2>
          <p className="text-base sm:text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Bộ tài liệu workshop bạn nhận sau khi đăng ký.
            Ba tài liệu mở khoá ngay sau khi đăng ký. Ba tài liệu mở dần
            trong nhóm kín trước Buổi 1.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ASSETS.map((asset, i) => (
            <article
              key={asset.title}
              className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300
                          hover:-translate-y-1 ${
                            asset.featured
                              ? 'bg-navy-900 text-cream lg:row-span-2 lg:col-span-1 ring-1 ring-gold-400/20'
                              : 'bg-white text-navy-900 shadow-sm hover:shadow-lg'
                          }`}
            >
              <div className="text-4xl mb-5">{asset.icon}</div>

              <span
                className={
                  asset.badgeStyle === 'now'
                    ? asset.featured
                      ? 'badge bg-gold-400 text-navy-900'
                      : 'badge-now'
                    : asset.featured
                      ? 'badge bg-cream/15 text-cream/80 border border-cream/20'
                      : 'badge-soon'
                }
              >
                {asset.badge}
              </span>

              <h3 className={`display-text text-xl sm:text-2xl font-bold mt-4 mb-3 leading-tight ${
                asset.featured ? 'text-cream' : 'text-navy-900'
              }`}>
                {asset.title}
              </h3>

              <p className={`text-sm leading-relaxed mb-5 ${
                asset.featured ? 'text-cream/80' : 'text-navy-600'
              }`}>
                {asset.description}
              </p>

              <div className={`text-xs uppercase tracking-wider font-semibold pt-4 border-t ${
                asset.featured
                  ? 'text-gold-300 border-cream/15'
                  : 'text-navy-400 border-navy-100'
              }`}>
                {asset.format}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <a href="#register" className="btn-primary">
            Đăng ký workshop để nhận tài liệu
          </a>
        </div>
      </div>
    </section>
  );
}
