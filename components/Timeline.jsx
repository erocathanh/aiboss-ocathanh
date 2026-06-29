const STEPS = [
  'Bạn bấm nút và điền tên + email.',
  'Email xác nhận đến hộp thư của bạn.',
  'Email tiếp theo gửi hướng dẫn vào nhóm kín và nhận tài liệu khởi động.',
  'Bạn tải File DNA cá nhân khởi động và điền bản nhanh 15 phút.',
  'Trước workshop 1-2 ngày: Thanh đăng video PT-1 (thiết lập Project Claude) + PT-2 (DNA 6 lớp toàn cảnh) trong nhóm kín. Bạn xem trước để vào Buổi 1 là thực hành luôn.',
  'Email nhắc lịch + đường dẫn buổi học gửi tối hôm trước.',
  'Tối Thứ Ba 14/7, 20h: Buổi 1 trực tiếp qua mạng.',
  'Thứ Tư và Thứ Năm: Buổi 2 + Buổi 3, mỗi buổi có một kết quả thực hành rõ ràng.',
];

export default function Timeline() {
  return (
    <section className="section">
      <div className="container-prose">
        <div className="text-center mb-14">
          <div className="text-sm font-bold uppercase tracking-widest text-gold-600 mb-3">
            Hành trình
          </div>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-navy-900">
            Sau khi bạn đăng ký,<br />
            chuyện gì xảy ra?
          </h2>
        </div>

        <ol className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-navy-200" aria-hidden="true" />

          {STEPS.map((step, i) => (
            <li key={i} className="relative flex gap-5 items-start">
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0
                              items-center justify-center rounded-full
                              bg-navy-900 text-cream font-bold text-sm
                              shadow-md ring-4 ring-cream">
                {i + 1}
              </div>
              <div className="pt-2.5">
                <p className="text-navy-800 leading-relaxed">{step}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl bg-cream-paper border border-navy-100 p-6 text-center">
          <p className="text-sm text-navy-600 italic leading-relaxed">
            Thông tin replay, nếu có, sẽ được thông báo trong nhóm kín.
          </p>
        </div>
      </div>
    </section>
  );
}
