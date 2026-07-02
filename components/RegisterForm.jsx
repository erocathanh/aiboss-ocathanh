'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ full_name: '', email: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus('success');
        // Optional analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_captured', { campaign: 'aiboss-landing' });
        }
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead');
        }
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Mất kết nối. Vui lòng thử lại sau.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-gold-50 border-2 border-gold-300 p-8 text-center">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="display-text text-2xl font-bold text-navy-900 mb-3">
          Thanh đã giữ chỗ AIBOSS AUTO CONTENT cho bạn.
        </h3>
        <p className="text-navy-700 leading-relaxed">
          Thanh vừa gửi tới hộp thư của bạn email có tiêu đề:
        </p>
        <p className="mt-2 text-navy-900 font-medium italic">
          &ldquo;{form.full_name.trim().split(' ')[0]} ơi, Thanh đã nhận đăng ký của bạn&rdquo;
        </p>
        <p className="mt-3 text-navy-700 leading-relaxed">
          Bạn mở email đó, bấm nút xác nhận — vài phút sau tài liệu và link nhóm kín sẽ tới tiếp.
        </p>
        <p className="mt-3 text-sm text-navy-500 leading-relaxed">
          Nếu chưa thấy email, kiểm tra thêm mục Quảng cáo (Promotions) / Thư rác (Spam) / Junk.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="full_name" className="sr-only">Họ và tên</label>
        <input
          id="full_name"
          type="text"
          required
          autoComplete="name"
          placeholder="Họ và tên"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          disabled={status === 'loading'}
          className="w-full rounded-xl border-2 border-navy-200 bg-white px-5 py-4
                     text-navy-900 placeholder:text-navy-400
                     focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200
                     disabled:opacity-60 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email của bạn"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          disabled={status === 'loading'}
          className="w-full rounded-xl border-2 border-navy-200 bg-white px-5 py-4
                     text-navy-900 placeholder:text-navy-400
                     focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200
                     disabled:opacity-60 transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full !py-5"
      >
        {status === 'loading'
          ? 'Đang gửi...'
          : 'Giữ chỗ tham gia workshop'}
      </button>

      {status === 'error' && errorMsg && (
        <p className="text-sm text-red-700 bg-red-50 rounded-lg px-4 py-3 border border-red-200">
          {errorMsg}
        </p>
      )}

      <p className="text-xs text-navy-500 leading-relaxed text-center pt-2">
        Sau khi đăng ký, Thanh sẽ gửi xác nhận và đường dẫn tham gia workshop qua email.
        Bạn cũng nhận được hướng dẫn vào nhóm kín và bộ tài liệu khởi động
        (File Workflow Claude Automation, File DNA cá nhân, Ma trận 4×3, video chuẩn bị) trước Buổi 1.
      </p>
      <p className="text-xs text-navy-500 italic leading-relaxed text-center pt-1">
        Workshop nhóm nhỏ. Eroca cùng đội Coach và Hỗ trợ đồng hành học viên
        suốt khoá. Số chỗ ưu tiên hỗ trợ trực tiếp giới hạn theo số Coach và Hỗ trợ
        đăng ký cống hiến mỗi khoá — đăng ký sớm để được vào nhóm hỗ trợ chuyên sâu.
      </p>
    </form>
  );
}
