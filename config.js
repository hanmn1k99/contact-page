window.Config = {
    // Thông tin cá nhân
    profile: {
        name: "Nguyễn Minh Hân",
        bio: "Web Developer & Tech Enthusiast",
        // URL ảnh đại diện (Có thể dùng link ngoài hoặc đường dẫn tương đối)
        avatar: "./avt.png", 
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
