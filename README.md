# Portfolio — Lê Anh Lương (.NET Backend Developer)

Trang portfolio cá nhân bằng **Next.js (App Router)**, một trang, kèm CV + link PDF tải về.

## Chạy local

> ⚠️ Thư mục cha tên `Q&A` chứa dấu `&` làm hỏng cơ chế `.bin` của npm trên Windows.
> Vì vậy các script trong `package.json` đã được sửa để gọi `next` qua `node` trực tiếp —
> bạn cứ dùng `npm run ...` bình thường.

```bash
npm install          # lần đầu
npm run dev          # mở http://localhost:3000
npm run build        # build production
npm run start        # chạy bản đã build
```

Nếu `npm run dev` vẫn lỗi vì dấu `&`, chạy thẳng:

```bash
node node_modules/next/dist/bin/next dev
```

## Sửa nội dung

Mọi nội dung nằm trong các hằng đầu file **`app/page.js`**:
`PROFILE`, `SUMMARY`, `SKILLS`, `EXPERIENCE`, `PROJECTS`. Sửa text ở đây là xong.
Màu sắc/giao diện ở **`app/globals.css`** (biến `--accent` để đổi màu nhấn).

## CV / PDF

Đặt trong `public/cv/` (đã có sẵn):
- `CV_LeAnhLuong_EN.pdf`, `CV_LeAnhLuong_VI.pdf` — nút "Download CV"
- bản `.html` tương ứng (tùy chọn)

Khi cập nhật CV: sửa file HTML trong thư mục `CV/` ở gốc dự án → in lại PDF →
copy đè vào `public/cv/`.

## Deploy lên Vercel (miễn phí)

**Cách A — qua GitHub (khuyến nghị):**
1. Tạo repo mới trên GitHub, ví dụ `leanhluong-portfolio`.
2. Push **riêng thư mục `portfolio/`** lên repo (không push cả `Q&A`):
   ```bash
   cd portfolio
   git init && git add . && git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/leanhluong/leanhluong-portfolio.git
   git push -u origin main
   ```
3. Vào https://vercel.com → New Project → import repo đó → Deploy. Vercel tự nhận Next.js.
4. Có link dạng `https://leanhluong-portfolio.vercel.app` → gắn vào CV (ô Website) và LinkedIn.

**Cách B — Vercel CLI:**
```bash
npm i -g vercel
cd portfolio
vercel            # làm theo prompt, chọn scope, deploy
vercel --prod
```

> Lưu ý: đẩy repo từ thư mục `portfolio/` (không phải `Q&A/`) để tránh dấu `&` trong tên
> và để repo gọn, đúng root Next.js.
