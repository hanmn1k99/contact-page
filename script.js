document.addEventListener('DOMContentLoaded', () => {
    // Lấy dữ liệu cấu hình từ window.Config (được load từ config.js)
    const config = window.Config;
    if (!config) {
        console.error("Không tìm thấy cấu hình. Hãy chắc chắn rằng config.js đã được tải.");
        return;
    }

    const app = document.getElementById('app');

    // 1. Tạo phần Header/Profile
    const profileSection = document.createElement('div');
    profileSection.className = 'profile';
    
    profileSection.innerHTML = `
        <img src="${config.profile.avatar}" 
             alt="Avatar" 
             class="profile-avatar" 
             style="object-position: ${config.profile.avatarPosition || 'center'};"
             loading="lazy"
             onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(config.profile.name)}&background=random&color=fff&size=200';">
        <h1 class="profile-name">${config.profile.name}</h1>
        <p class="profile-bio">${config.profile.bio}</p>
    `;
    app.appendChild(profileSection);

    // 2. Tạo phần Danh sách Links
    if (config.links && config.links.length > 0) {
        const linksContainer = document.createElement('div');
        linksContainer.className = 'links-container';

        // Lặp qua từng link với một chút delay cho animation
        config.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = link.url;
            a.className = 'link-item';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            
            // Staggered animation
            a.style.animation = `fadeInUp 0.5s ease forwards ${(index + 1) * 0.1}s`;
            a.style.opacity = '0'; // sẽ được animation làm hiện lên

            a.innerHTML = `
                <div class="link-icon">
                    <ion-icon name="${link.icon}"></ion-icon>
                </div>
                <span class="link-title">${link.title}</span>
            `;
            
            linksContainer.appendChild(a);
        });
        
        app.appendChild(linksContainer);
    }

    // 3. Tạo phần Socials (Icon nhỏ dưới cùng)
    if (config.socials && config.socials.length > 0) {
        const socialsContainer = document.createElement('div');
        socialsContainer.className = 'socials-container';

        config.socials.forEach((social, index) => {
            const a = document.createElement('a');
            a.href = social.url;
            a.className = 'social-item';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            
            a.style.animation = `fadeInUp 0.5s ease forwards ${(config.links ? config.links.length + 1 : 1) * 0.1 + (index * 0.1)}s`;
            a.style.opacity = '0';

            a.innerHTML = `<ion-icon name="${social.icon}"></ion-icon>`;
            
            socialsContainer.appendChild(a);
        });

        app.appendChild(socialsContainer);
    }

    // 4. Tạo phần Donation (Chung 1 hàng)
    if (config.donations && config.donations.length > 0) {
        const donationRow = document.createElement('div');
        donationRow.className = 'donation-row';

        config.donations.forEach((donate, index) => {
            const btn = document.createElement('div');
            btn.className = 'donate-btn';
            
            const baseDelay = (config.links ? config.links.length : 0) + (config.socials ? config.socials.length : 0) + 1;
            btn.style.animation = `fadeInUp 0.5s ease forwards ${(baseDelay * 0.1) + (index * 0.1)}s`;
            btn.style.opacity = '0';

            btn.innerHTML = `
                <img src="${donate.logo}" alt="${donate.bank}" onerror="this.src='https://ui-avatars.com/api/?name=${donate.bank}&background=random&color=fff'">
                <span>${donate.bank}</span>
            `;
            
            // Xử lý sự kiện mở Popup QR
            btn.addEventListener('click', () => {
                showQRModal(donate);
            });

            donationRow.appendChild(btn);
        });

        app.appendChild(donationRow);
    }

    // --- Modal Logic ---
    function showQRModal(donate) {
        let modal = document.getElementById('qrModal');
        if (!modal) {
            // Khởi tạo Modal nếu chưa có
            modal = document.createElement('div');
            modal.id = 'qrModal';
            modal.className = 'qr-modal';
            modal.innerHTML = `
                <div class="qr-modal-content">
                    <div class="qr-close-btn" id="qrCloseBtn">×</div>
                    <img id="qrImage" class="qr-image" src="" alt="QR Code" onerror="this.src='https://placehold.co/400x400/0f172a/FFF?text=No+QR+Code'">
                    <div id="qrBankName" class="qr-bank-name"></div>
                    <div id="qrBankNumber" class="qr-bank-number"></div>
                </div>
            `;
            document.body.appendChild(modal);

            // Xử lý sự kiện đóng
            const closeBtn = document.getElementById('qrCloseBtn');
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('show');
            });

            // Click ra ngoài modal để đóng
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                }
            });
        }

        // Cập nhật dữ liệu vào Modal
        document.getElementById('qrImage').src = donate.qr || '';
        document.getElementById('qrBankName').innerText = donate.bank;
        document.getElementById('qrBankNumber').innerText = `${donate.number} - ${donate.owner}`;

        // Hiển thị Modal
        modal.classList.add('show');
    }

    // 4. Thêm phần Copyright
    const copyrightDiv = document.createElement('div');
    copyrightDiv.className = 'copyright';
    const currentYear = new Date().getFullYear();
    copyrightDiv.innerHTML = `&copy; ${currentYear} ${config.profile.name}. All rights reserved.`;
    
    // Animation cho copyright
    copyrightDiv.style.animation = `fadeInUp 0.5s ease forwards ${(config.links ? config.links.length + 1 : 1) * 0.1 + (config.socials ? config.socials.length * 0.1 : 0)}s`;
    copyrightDiv.style.opacity = '0';
    
    app.appendChild(copyrightDiv);

    // 6. Cập nhật Favicon và Title
    if (config.profile.favicon) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = config.profile.favicon;
        document.head.appendChild(favicon);
    }
    
    document.title = `Liên Hệ - ${config.profile.name}`;
});
