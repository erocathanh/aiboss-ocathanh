import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://aiboss.ocathanh.com'),
  title: 'AIBOSS AUTO CONTENT — Workshop miễn phí · Đăng ký giữ chỗ',
  description:
    'Bạn không mệt vì làm nhiều — bạn mệt vì nhảy giữa Zalo, email, ChatGPT, Gemini, Facebook 30 lần một ngày. Workshop AIBOSS AUTO CONTENT miễn phí 3 buổi giúp bạn xây AI Content OS gộp 5 tab thành 1 dòng lệnh.',
  openGraph: {
    title: 'AIBOSS AUTO CONTENT — Workshop miễn phí',
    description:
      'Bạn không mệt vì làm nhiều — bạn mệt vì nhảy giữa 5 màn hình 30 lần/ngày. Workshop 3 buổi giúp bạn xây hệ điều hành nội dung gộp mọi tab thành 1 dòng lệnh.',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://aiboss.ocathanh.com',
    siteName: 'AIBOSS AUTO CONTENT',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AIBOSS AUTO CONTENT — Workshop miễn phí 3 buổi · 2-4/6/2026 · 20h-23h giờ Việt Nam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIBOSS AUTO CONTENT — Workshop miễn phí',
    description: 'Workshop 3 buổi giúp bạn gộp 5 tab thành 1 dòng lệnh — bảo toàn năng lượng tinh thần.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://aiboss.ocathanh.com' },
};

export const viewport = {
  themeColor: '#0a1929',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MM94DZR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5MM94DZR');`}
        </Script>
      </body>
    </html>
  );
}
