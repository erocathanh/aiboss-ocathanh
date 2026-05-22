'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Workshop có miễn phí không?',
    a: 'Có. AIBOSS AUTO CONTENT là workshop miễn phí trong 3 buổi, diễn ra từ ngày 2 đến 4/6/2026, 20h-23h giờ Việt Nam.',
  },
  {
    q: 'Tôi dùng công cụ AI nào cũng được chứ?',
    a: 'Được. Phương pháp trong workshop không phụ thuộc vào một công cụ "ây ai" duy nhất. Bạn có thể áp dụng với Claude, Gemini, ChatGPT hoặc các công cụ AI tạo nội dung khác.',
  },
  {
    q: 'File DNA cá nhân khởi động có phải câu lệnh không?',
    a: 'Không. Đây là bảng thực hành giúp bạn viết 6 lớp DNA (giọng, câu chuyện, quan điểm, điều tránh, cách kể, ngách) để AI hiểu bạn trước khi viết. Câu lệnh chỉ hiệu quả hơn khi AI đã có đủ bối cảnh về bạn, khách hàng và mục tiêu nội dung.',
  },
  {
    q: 'Đăng ký workshop miễn phí có được dùng phần mềm AIBOSS không?',
    a: 'Không. Workshop miễn phí cung cấp phương pháp, tài liệu thực hành, nhóm kín và hướng dẫn trực tiếp. Bạn có thể tự áp dụng phương pháp với tài khoản AI sẵn có (Claude, Gemini, ChatGPT) sau workshop.',
  },
  {
    q: 'Tôi chưa có đội nhóm nội dung có học được không?',
    a: 'Có. Bạn có thể bắt đầu từ thương hiệu cá nhân, dịch vụ, chuyên môn hoặc sản phẩm hiện có. Nếu sau này có đội nhóm, file DNA cá nhân và Ma trận 4×3 sẽ giúp đội có cùng một chuẩn nội dung hơn.',
  },
  {
    q: 'Workshop có cam kết doanh thu cụ thể không?',
    a: 'Không cam kết con số. Nhưng workshop dạy chiến lược nội dung có khả năng tạo doanh thu — không chỉ nhiều lượt xem. Thiết lập DNA cá nhân + Ma trận 4×3 + Bản đồ 5 tầng để nội dung đúng chất, đúng khách hàng và có thể đo được. Kết quả thực tế phụ thuộc vào sản phẩm, thị trường và mức độ triển khai của bạn.',
  },
  {
    q: 'Workshop này có chạy thường xuyên không?',
    a: 'Có. Workshop AIBOSS AUTO CONTENT diễn ra 2 lần/tháng. Nếu lỡ phiên này, bạn có thể đăng ký để được thông báo phiên tiếp theo. Mỗi phiên đều có cùng cấu trúc 3 buổi.',
  },
  {
    q: 'Tôi đã đăng ký phiên trước rồi, có cần đăng ký lại không?',
    a: 'Không. Nếu bạn đã trong nhóm kín AIBOSS, bạn sẽ được thông báo phiên tiếp theo qua email và nhóm. Đăng ký lại chỉ cần nếu bạn muốn cập nhật thông tin liên hệ.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-navy-100">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-5 sm:py-6 text-left
                   hover:bg-cream/50 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="display-text text-base sm:text-lg font-semibold text-navy-900 leading-snug">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-7 w-7 rounded-full bg-navy-100 flex items-center
                      justify-center text-navy-700 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-gold-400 text-navy-900' : ''
                      }`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-navy-700 leading-relaxed text-sm sm:text-base px-2 sm:px-4">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container-prose">
        <div className="text-center mb-12">
          <div className="text-sm font-bold uppercase tracking-widest text-gold-600 mb-3">
            Giải đáp
          </div>
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                         font-bold text-navy-900">
            Câu hỏi thường gặp
          </h2>
        </div>

        <div className="space-y-0">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
