# AIBOSS AUTO CONTENT — Landing A/B Variant B (ocathanh)

Variant B của landing workshop **AIBOSS AUTO CONTENT** (14-16/7/2026).

- **Domain:** `aiboss.ocathanh.com`
- **Hero hook:** Chi phí năng lượng chuyển đổi giữa Zalo / email / ChatGPT / Gemini / Facebook (concept S1 từ NetHerc — context switching cost 20 phút × 30 lần/ngày)
- **Variant A reference:** `~/Projects/aiboss-landing-v2` → `workshop.aiboss.vn` (hero "AI viết đúng, nhưng vẫn không giống bạn?")
- **Mục đích:** Test hook "năng lượng tinh thần" (Variant B) vs hook "AI hiểu DNA cá nhân" (Variant A) → đo CR đăng ký workshop.

Stack: **Next.js 14 + Tailwind CSS + Salekit form integration**.

---

## 🚀 Deploy lên Vercel — 6 bước

Form đăng ký dùng Salekit qua API route `app/api/register/route.js`. Token đọc từ env vars để repo public an toàn.

### Bước 1 — Cài dependencies và test build local

```bash
cd aiboss-ocathanh
npm install
npm run build
```

Build production cần pass trước khi deploy.

### Bước 2 — Push code lên GitHub

```bash
cd aiboss-ocathanh
git init
git add .
git commit -m "Initial: AIBOSS landing variant B (ocathanh) — S1 context switching hook"
git branch -M main
git remote add origin git@github.com:erocathanh/aiboss-ocathanh.git
git push -u origin main
```

### Bước 3 — Import vào Vercel

1. Vercel dashboard → **Add New** → **Project**
2. Import repo `aiboss-ocathanh` từ GitHub
3. Framework Preset: **Next.js** (auto-detect)
4. Build Command + Output Directory: để mặc định
5. Trước khi Deploy, thêm env vars ở mục **Environment Variables**:
   ```
   SALEKIT_ENDPOINT=https://api.salekit.io/api/lead/create/b3cffacc
   SALEKIT_TOKEN=<token Salekit của anh>
   ```
6. Bấm **Deploy**

Vercel sẽ build trong ~1-2 phút và cấp URL tạm dạng `aiboss-ocathanh-xyz.vercel.app`.

### Bước 4 — Test form trên URL tạm

1. Mở URL tạm Vercel cấp
2. Cuộn xuống cuối trang → điền form bằng email thật của anh
3. Bấm "Giữ chỗ tham gia workshop"
4. Verify:
   - Hiển thị thông báo "Thanh đã giữ chỗ AIBOSS AUTO CONTENT cho bạn"
   - Vào Salekit dashboard → **Contacts** → có lead mới với tag `aiboss-ocathanh`

### Bước 5 — Add custom domain `aiboss.ocathanh.com`

1. Vercel → Project → Settings → **Domains**
2. Add domain: `aiboss.ocathanh.com`
3. Vercel hiển thị CNAME record cần thêm
4. Vào DNS provider của `ocathanh.com`:
   ```
   Type:  CNAME
   Name:  aiboss
   Value: cname.vercel-dns.com
   TTL:   Auto
   ```
5. **Lưu ý Cloudflare:** set proxy status là "DNS only" (mây xám), KHÔNG proxied (mây cam)
6. Đợi 5-30 phút DNS propagate → Vercel tự cấp SSL

### Bước 6 — Test production

1. Mở `https://aiboss.ocathanh.com`
2. Test form lần nữa với email khác
3. Test trên điện thoại — verify sticky CTA bottom hoạt động

---

## ✏️ Khác Variant A như nào

| File | Khác biệt vs Variant A |
|---|---|
| `components/Hero.jsx` | Hook hoàn toàn mới — chi phí chuyển đổi giữa 5 màn hình. Headline, subhead, quote, punchline đều khác |
| `app/layout.js` | Metadata + canonical URL → `aiboss.ocathanh.com` |
| `lib/config.js` | `brand.domain` → `aiboss.ocathanh.com` |
| `app/api/register/route.js` | `LEAD_TAG = 'aiboss-ocathanh'` · `src = 'aiboss.ocathanh.com'` |
| `.env.example` | Salekit endpoint `.../b3cffacc` (form mới) |

Các section còn lại (Pain / WorkshopAgenda / StarterLibrary / FAQ / ...) giữ nguyên Variant A để cô lập biến A/B.

---

## 🐛 Nếu form submit lỗi

### Lỗi 500
→ Token Salekit có thể đã expired hoặc Vercel chưa có env vars. Update `SALEKIT_TOKEN` trong Vercel Settings, rồi redeploy.

### Form gửi OK nhưng không có lead trong Salekit
→ Vercel → Project → Deployments → click deployment mới nhất → tab **Logs** → filter "register" để xem error.

---

## 🔒 Bảo mật token Salekit

Token nằm trong `.env.local` trên máy local và trong **Vercel Environment Variables** khi deploy. `.env.local` đã được `.gitignore`, không đưa lên GitHub.

---

## 📦 Tech stack

- **Next.js** 14.2.35 (App Router)
- **React** 18.3.1
- **Tailwind CSS** 3.4.6
- Fonts: Fraunces (display) + Inter (body) via `next/font/google`

---

**Maintained by:** Eroca Thanh
**Built by:** Claude (PM)
**Cloned from:** aiboss-landing-v2 (Variant A) · 2026-05-17
