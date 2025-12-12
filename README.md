# Binh Blog — Personal Website

Trang web cá nhân của **Trần Bình**, được xây dựng bằng **HTML + CSS thuần**, bố cục tối giản với sidebar và nội dung chính.

Website gồm các trang:

- Home (`index.html`)
- Tiếng Anh (`tieng-anh.html`)
- Cuộc sống (`cuoc-song.html`)
- Gallery (`gallery.html`)
- About me (`about.html`)
- Contact (`contact.html`)
- CSS: `/css/styles.css`
- Ảnh: `/assets/`

---

# 1. Chuẩn bị thư mục dự án

Cấu trúc thư mục bắt buộc:
binh-blog/
├─ index.html
├─ tieng-anh.html
├─ cuoc-song.html
├─ gallery.html
├─ about.html
├─ contact.html
├─ css/
│ └─ styles.css
└─ assets/
├─ avatar.jpg
├─ gallery-1.jpg
├─ gallery-2.jpg
└─ ...

Bạn có thể thay đổi ảnh trong thư mục `assets/` theo ý muốn.

---

# 2. Tạo repository trên GitHub

1. Truy cập: https://github.com/new  
2. Tạo repo mới tên bất kỳ, ví dụ: **binh-blog**  
3. Chọn chế độ **Public**  
4. Nhấn **Create repository**

---

# 3. Upload toàn bộ file website lên GitHub

Có 2 cách:

### Cách A: Upload trực tiếp bằng trình duyệt  
1. Vào repository vừa tạo  
2. Nhấn **Add file → Upload files**  
3. Kéo toàn bộ thư mục website của bạn vào GitHub  
4. Nhấn **Commit changes**

### Cách B: Dùng Git (nếu bạn đã cài Git trên máy)
```bash
git clone https://github.com/<username>/binh-blog.git
cd binh-blog
# Sao chép tất cả file website vào đây
git add .
git commit -m "Initial commit"
git push
