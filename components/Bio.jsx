export default function Bio() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Portrait */}
          <div className="relative w-full lg:w-72 flex-shrink-0">
            <div className="absolute -inset-3 bg-navy-900 rounded-3xl rotate-3" />
            <div className="absolute -inset-1 border-2 border-gold-400 rounded-3xl -rotate-2" />
            <img
              src="/eroca-portrait.jpg"
              alt="Eroca Thanh — chân dung"
              className="relative rounded-3xl shadow-xl w-full"
              loading="lazy"
            />
          </div>

          {/* Bio */}
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-gold-600 mb-3">
              Người dạy
            </div>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl
                           font-bold text-navy-900 mb-6">
              Eroca Thanh là ai?
            </h2>

            <div className="space-y-4 text-navy-700 leading-relaxed mb-8">
              <p>Thanh là Eroca Thanh.</p>
              <p>Người sáng lập Maracafi Limited tại Anh.</p>
              <p>
                Thanh là người tổ chức và điều phối nhiều trợ lý AI cho công việc nội dung,
                hệ thống và kinh doanh hằng ngày.
              </p>
              <p>
                Thanh không tự làm mọi thứ bằng tay. Thanh xây hệ thống,
                giao việc cho AI, kiểm tra kết quả và biến những gì dùng được
                thành quy trình.
              </p>
            </div>

            <ul className="space-y-3 mb-8 border-l-2 border-gold-400 pl-5">
              <li className="text-sm sm:text-base text-navy-800">
                <span className="text-gold-600 mr-2">→</span>
                Kinh doanh quốc tế: từ Việt Nam sang Cộng Hoà Séc, rồi sang Anh.
              </li>
              <li className="text-sm sm:text-base text-navy-800">
                <span className="text-gold-600 mr-2">→</span>
                Người tổ chức và điều phối nhiều trợ lý AI: Claude, Cursor, Gemini, GPT.
              </li>
              <li className="text-sm sm:text-base text-navy-800">
                <span className="text-gold-600 mr-2">→</span>
                Người xây AIBOSS từ chính nỗi đau vận hành nội dung của mình.
              </li>
            </ul>

            <div className="rounded-2xl bg-navy-50 border-l-4 border-navy-700 p-6">
              <p className="text-sm sm:text-base text-navy-700 leading-relaxed italic">
                Thanh từng có giai đoạn dùng AI rất nhiều nhưng vẫn thấy nội dung rời rạc.
                Mỗi lần mở chat mới lại bắt đầu từ đầu.
                Có tháng Thanh mở hơn năm mươi phiên chat khác nhau chỉ để làm nội dung.
                <br /><br />
                <span className="not-italic font-semibold text-navy-900">
                  AIBOSS AUTO CONTENT được xây từ chính vấn đề đó:
                </span>{' '}
                không chỉ dùng AI nhanh hơn, mà phải có hệ thống để AI hiểu mình rõ hơn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
