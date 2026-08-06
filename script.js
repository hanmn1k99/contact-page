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

    // 3. Tạo phần Donation (Nếu có)
    if (config.donations && config.donations.length > 0) {
        // Tạo một container cho phần donate
        const donationContainer = document.createElement('div');
        donationContainer.className = 'links-container';
        donationContainer.style.marginTop = '24px'; // Cách ra một chút so với link

        config.donations.forEach((donate, index) => {
            const btn = document.createElement('div');
            btn.className = 'link-item';
            btn.style.cursor = 'pointer';
            
            btn.style.animation = `fadeInUp 0.5s ease forwards ${(config.links ? config.links.length + 1 : 1) * 0.1 + (index * 0.1)}s`;
            btn.style.opacity = '0';

            btn.innerHTML = `
                <div class="link-icon">
                    <img src="${donate.logo}" alt="${donate.bank}" style="width:24px; height:24px; object-fit:contain; border-radius:4px;" onerror="this.src='https://ui-avatars.com/api/?name=${donate.bank}&background=random&color=fff'">
                </div>
                <div style="flex-grow: 1; display: flex; flex-direction: column;">
                    <span class="link-title" style="font-weight: 600;">${donate.bank}</span>
                    <span style="font-size: 13px; color: var(--text-secondary);">${donate.number}</span>
                </div>
                <div class="donate-copy" style="display: flex; align-items: center; color: var(--text-secondary);">
                    <ion-icon name="copy-outline"></ion-icon>
                </div>
            `;
            
            // Tính năng click để copy
            btn.addEventListener('click', () => {
                navigator.clipboard.writeText(donate.number).then(() => {
                    const copyIcon = btn.querySelector('.donate-copy ion-icon');
                    copyIcon.setAttribute('name', 'checkmark-outline');
                    copyIcon.style.color = '#10b981'; // Green
                    setTimeout(() => {
                        copyIcon.setAttribute('name', 'copy-outline');
                        copyIcon.style.color = '';
                    }, 2000);
                });
            });

            donationContainer.appendChild(btn);
        });

        app.appendChild(donationContainer);
    }

    // 4. Tạo phần Socials (Icon nhỏ dưới cùng)
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
