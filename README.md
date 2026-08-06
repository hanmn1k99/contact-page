# Liên Hệ (Link-Contact) - Tự Host Danh Thiếp Điện Tử

Một phiên bản danh thiếp điện tử tuyệt đẹp (Linktree Alternative) hoàn toàn bằng HTML, CSS và JavaScript thuần (Vanilla). Được thiết kế theo phong cách Glassmorphism, cực nhẹ, mượt mà và dễ dàng tự host trên bất kỳ server nào (WordPress, cPanel, GitHub Pages, v.v.).

## ✨ Tính Năng Nổi Bật

- **Thiết kế Sang Trọng (Premium):** Sử dụng phong cách kính mờ (Glassmorphism), Dark Mode, hiệu ứng hạt bụi nền xoay tự động.
- **Siêu Nhẹ & Tốc Độ Trải Nghiệm Cao:** Không sử dụng Framework phức tạp (như React/Vue), tải trang tức thì.
- **Dễ Dàng Tùy Chỉnh:** Không cần động vào mã HTML phức tạp. Toàn bộ nội dung (Tên, Tiểu sử, Hình ảnh, Liên kết, QR Code) đều được cấu hình trong 1 file duy nhất `config_v2.js`.
- **Tích Hợp Ionicons:** Hỗ trợ hàng ngàn icon đẹp mắt hoàn toàn miễn phí từ [Ionicons](https://ionic.io/ionicons).
- **Favicon Tùy Biến:** Cấu hình icon thu nhỏ trên tab trình duyệt trực tiếp mà không cần quan tâm đến file `favicon.ico` truyền thống.

## 🛠 Hướng Dẫn Sử Dụng (HDSD)

### 1. Cách thay đổi nội dung (Tên, Link, Hình ảnh)

Bạn không cần biết lập trình! Chỉ cần mở file **`config_v2.js`** bằng bất kỳ phần mềm chỉnh sửa văn bản nào (như Notepad trên Windows, hoặc sửa trực tiếp trên GitHub).

Trong file `config_v2.js`, bạn sẽ thấy cấu trúc như sau:

```javascript
window.Config = {
    profile: {
        name: "Tên Của Bạn",
        bio: "Mô tả ngắn gọn về bạn",
        avatar: "link_anh_dai_dien_cua_ban.jpg", 
        favicon: "link_icon_tab_trinh_duyet.png", 
    },
    // ...
```

**Cách thêm một liên kết mạng xã hội (VD: TikTok, Instagram):**

Tìm đến phần `links: [...]`, copy một cụm liên kết có sẵn và dán xuống dưới (nhớ có dấu phẩy `,` ngăn cách). Mẫu cho ngân hàng (Momo, VCB) với mã QR cũng được cấu hình tại mảng `donations: [...]`.

```javascript
    links: [
        // ... các link cũ ở trên
        {
            title: "Website Cá Nhân",
            url: "https://minhhan.net",
            icon: "globe-outline"
        }, // <--- Dấu phẩy ngăn cách
        
        // Link mới thêm:
        {
            title: "Kênh TikTok",
            url: "https://tiktok.com/@ban",
            icon: "logo-tiktok" // Tên icon lấy từ trang ionic.io/ionicons
        }
    ],
```

**Cách thay đổi Icon:**
- Truy cập vào [https://ionic.io/ionicons](https://ionic.io/ionicons)
- Gõ tìm kiếm tên mạng xã hội (ví dụ: `facebook`, `instagram`, `tiktok`, `mail`, `call`)
- Bấm vào icon bạn thích, bạn sẽ thấy cái tên (ví dụ: `logo-instagram`). Copy tên đó dán vào phần `icon: "..."` trong `config_v2.js`.

### 2. Cấu hình mã QR Thanh Toán (Donate)
Bạn có thể thay đổi tên ngân hàng, số tài khoản, và đường dẫn đến ảnh mã QR của bạn trong mảng `donations`. 
Ví dụ: `qr: "./qrmomo.png"` (nhớ tải ảnh mã QR của bạn lên cùng thư mục và đặt tên tương ứng). Khi khách click vào nút, mã QR sẽ bật lên dạng Popup.

### 3. Cách Chạy Thử Trên Máy Tính

Do đây là mã HTML thuần, bạn chỉ cần **nhấp đúp chuột vào file `index.html`** để trình duyệt (Chrome, Edge, Safari...) mở lên. Mọi thay đổi bạn lưu ở `config_v2.js` sau khi F5 tải lại trang sẽ áp dụng ngay lập tức.

## 🚀 Hướng Dẫn Triển Khai (Deploy) Lên Internet

### Cách 1: Úp Lên Website Có Sẵn (Ví dụ WordPress / cPanel)
1. Tạo một thư mục con trên server của bạn (VD: `link-contact` nằm trong thư mục gốc `public_html`).
2. Tải toàn bộ các file: `index.html`, `style_v2.css`, `script_v2.js`, `config_v2.js` và các hình ảnh QR của bạn vào thư mục vừa tạo.
3. Truy cập link: `tenmiencuaban.com/link-contact` và tận hưởng!

### Cách 2: Chạy miễn phí với GitHub Pages
Vì mã nguồn đã có sẵn trên GitHub, bạn có thể host miễn phí 100% qua GitHub Pages:
1. Vào tab **Settings** của Repository này trên GitHub.
2. Tìm menu **Pages** ở cột bên trái.
3. Ở phần *Build and deployment* -> *Source*, chọn branch **`main`** và thư mục `/ (root)`. Bấm **Save**.
4. Chờ 1-2 phút, GitHub sẽ cấp cho bạn một đường link chạy trực tiếp trang web này (Ví dụ: `https://hanmn1k99.github.io/contact-page/`).

---
*Dự án được xây dựng với mục đích tạo ra một trang liên hệ cá nhân siêu tốc, đẹp và độc lập hoàn toàn với các nền tảng bên thứ ba.*