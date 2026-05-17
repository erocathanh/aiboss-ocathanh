'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="display-text text-lg sm:text-xl font-bold text-navy-900">
          AIBOSS<span className="text-gold-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy-700">
          <a href="#starter" className="hover:text-navy-900 transition-colors">
            Tài liệu khởi động
          </a>
          <a href="#workshop" className="hover:text-navy-900 transition-colors">
            3 Buổi
          </a>
          <a href="#faq" className="hover:text-navy-900 transition-colors">
            Câu hỏi thường gặp
          </a>
        </nav>

        <a
          href="#register"
          className="hidden sm:inline-flex items-center rounded-full
                     bg-navy-900 hover:bg-navy-800 px-5 py-2.5
                     text-sm font-semibold text-cream transition-colors"
        >
          Giữ chỗ workshop
        </a>
      </div>
    </header>
  );
}
