'use client';

import { useEffect, useState } from 'react';

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show after scrolling past hero (~600px) but hide near footer/form
      const formEl = document.getElementById('register');
      const formRect = formEl?.getBoundingClientRect();
      const nearForm = formRect && formRect.top < window.innerHeight && formRect.top > 0;
      setShow(window.scrollY > 600 && !nearForm);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-3
                  bg-cream/95 backdrop-blur-md border-t border-navy-100
                  transition-transform duration-300 ${
                    show ? 'translate-y-0' : 'translate-y-full'
                  }`}
    >
      <a
        href="#register"
        className="flex w-full items-center justify-center rounded-full
                   bg-gold-500 hover:bg-gold-600 active:bg-gold-700
                   px-6 py-4 text-base font-semibold text-navy-900
                   shadow-lg shadow-gold-500/25 transition-colors"
      >
        Giữ chỗ workshop miễn phí
      </a>
    </div>
  );
}
