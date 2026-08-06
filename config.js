window.Config = {
    // Thông tin cá nhân
    profile: {
        name: "Nguyễn Minh Hân",
        bio: "Web Developer & Tech Enthusiast",
        // URL ảnh đại diện (Có thể dùng link ngoài hoặc đường dẫn tương đối)
        avatar: "./avt.png", 
        // Điều chỉnh vị trí crop ảnh (ví dụ: "center", "top", "bottom", "left", "right", hoặc "50% 20%")
        avatarPosition: "top",
        // URL ảnh Favicon (icon trên tab trình duyệt)
        favicon: "https://minhhan.net/favicon.ico",
    },

    // Cấu hình giao diện
    theme: {
        // Có thể mở rộng sau này, mặc định dùng CSS
    },

    // Danh sách các liên kết
    // - title: Tiêu đề hiển thị
    // - url: Đường dẫn khi click vào
    // - icon: Tên icon lấy từ trang https://ionic.io/ionicons
    links: [
        {
            title: "Website",
            url: "https://minhhan.net",
            icon: "globe-outline"
        },
        {
            title: "Facebook",
            url: "https://facebook.com/minhhanit",
            icon: "logo-facebook"
        },
        {
            title: "Zalo",
            url: "https://zalo.me/0868911747",
            icon: "chatbubble-ellipses-outline"
        },
        {
            title: "YouTube",
            url: "https://youtube.com/@minhhanit",
            icon: "logo-youtube"
        },
        {
            title: "GitHub",
            url: "https://github.com/hanmn1k99",
            icon: "logo-github"
        }
    ],

    // Danh sách tài khoản nhận Donate (Ủng hộ)
    donations: [
        {
            bank: "MB Bank",
            number: "0868911747",
            owner: "NGUYEN MINH HAN",
            logo: "https://img.mservice.io/momo_app_v2/new_version/img/appx_icon/24_mbbank.png" // Hoặc tự tải logo ngân hàng
        },
        {
            bank: "MoMo",
            number: "0868911747",
            owner: "NGUYEN MINH HAN",
            logo: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
        }
    ],

    // Các liên kết mạng xã hội nhỏ dưới cùng (nếu có)
    socials: [
        {
            url: "mailto:han@minhhan.net",
            icon: "mail-outline"
        },
        {
            url: "tel:0868911747",
            icon: "call-outline"
        }
    ]
};
