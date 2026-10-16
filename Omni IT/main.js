// Sidebar menu content for each navigation link
const menuContent = {
    home: {
        title: 'الرئيسية',
        items: [
            { text: 'الصفحة الرئيسية', url: '#' },
            { text: 'الميزات', url: '#' },
            { text: 'الخدمات', url: '#' },
            { text: 'الشهادات', url: '#' }
        ]
    },
    languages: {
        title: 'لغات البرمجة',
        items: [
            { text: 'عرض جميع اللغات', url: 'o2.html' },
            { text: 'Python', url: 'python.html' },
            { text: 'JavaScript', url: 'javascript.html' },
            { text: 'Java', url: 'java.html' },
            { text: 'C++', url: 'more-languages.html' },
            { text: 'PHP', url: 'more-languages.html' },
            { text: 'TypeScript', url: 'more-languages.html' },
            { text: 'Go', url: 'more-languages.html' },
            { text: 'Rust', url: 'more-languages.html' },
            { text: 'C#', url: 'more-languages.html' },
            { text: 'Ruby', url: 'more-languages.html' },
            { text: 'Swift', url: 'more-languages.html' },
            { text: 'Kotlin', url: 'more-languages.html' },
            { text: 'HTML', url: 'html.html' },
            { text: 'CSS', url: 'css.html' },
            { text: 'C', url: 'more-languages.html' }
        ]
    },
    networking: {
        title: 'الشبكات',
        items: [
            { text: 'عرض جميع موضوعات الشبكات', url: 'networking.html' },
            { text: 'أساسيات الشبكات', url: 'networking-basics.html' },
            { text: 'البروتوكولات', url: 'protocols.html' },
            { text: 'الأمن السيبراني', url: 'cybersecurity.html' },
            { text: 'أجهزة الشبكة', url: 'network-devices.html' },
            { text: 'الشبكات اللاسلكية', url: 'wireless-networks.html' },
            { text: 'إدارة الشبكات', url: 'network-admin.html' },
            { text: 'الحوسبة السحابية', url: 'cloud-computing.html' },
            { text: 'التشفير والأمان', url: 'encryption-security.html' }
        ]
    },
    os: {
        title: 'أنظمة التشغيل',
        items: [
            { text: 'جميع أنظمة التشغيل', url: 'os.html' },
            { text: 'Windows', url: 'windows.html' },
            { text: 'Linux', url: 'linux.html' },
            { text: 'macOS', url: 'macos.html' },
            { text: 'Android', url: 'android.html' },
            { text: 'iOS', url: 'ios.html' },
            { text: 'Unix / BSD', url: 'unix-bsd.html' },
            { text: 'RTOS (أنظمة الوقت الحقيقي)', url: 'rtos.html' }
        ]
    },
    courses: {
        title: 'الدورات',
        items: [
            { text: 'جميع الدورات', url: 'courses.html' },
            { text: 'دورات المبتدئين', url: 'courses.html#beginners' },
            { text: 'دورات متوسطة', url: 'courses.html#intermediate' },
            { text: 'دورات متقدمة', url: 'courses.html#advanced' },
            { text: 'شهادات مهنية', url: 'courses.html#certificates' }
        ]
    },
    about: {
        title: 'حول',
        items: [
            { text: 'عن الشركة', url: '#' },
            { text: 'فريقنا', url: '#' },
            { text: 'رؤيتنا', url: '#' },
            { text: 'إنجازاتنا', url: '#' }
        ]
    },
    contact: {
        title: 'اتصل بنا',
        items: [
            { text: 'البريد الإلكتروني', url: '#' },
            { text: 'رقم الهاتف', url: '#' },
            { text: 'العنوان', url: '#' },
            { text: 'تواصل معنا', url: '#' }
        ]
    }
};

// Get DOM elements
const navLinks = document.querySelectorAll('.nav-link');
const learnButtons = document.querySelectorAll('.btn-learn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const sidebarContent = document.getElementById('sidebarContent');

// Function to render submenu
function renderSubmenu(submenuKey) {
    const menu = menuContent[submenuKey];
    if (!menu) return;

    let html = `<h3 class="submenu-title">${menu.title}</h3>`;
    html += '<ul class="submenu-list">';
    
    menu.items.forEach(item => {
        html += `
            <li class="submenu-item">
                <a href="${item.url}" class="submenu-link">${item.text}</a>
            </li>
        `;
    });
    
    html += '</ul>';
    sidebarContent.innerHTML = html;
}

// Open sidebar with specific menu
function openSidebar(submenuKey) {
    renderSubmenu(submenuKey);
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

// Close sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Add click event listeners to nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const submenuKey = link.getAttribute('data-submenu');
        const href = link.getAttribute('href');
        
        // If it has a submenu, show sidebar instead of navigating
        if (submenuKey) {
            e.preventDefault();
            openSidebar(submenuKey);
        }
        // Otherwise, let the link navigate normally
    });
});

// Add click event listeners to learn buttons in cards
learnButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const submenuKey = button.getAttribute('data-submenu');
        openSidebar(submenuKey);
    });
});

// Close sidebar on close button click
closeBtn.addEventListener('click', closeSidebar);

// Close sidebar on overlay click
overlay.addEventListener('click', closeSidebar);

// Close sidebar on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSidebar();
    }
});

// Toast helper with inline styles
function showToast(message) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; 
        bottom: 24px; 
        right: 24px; 
        background: #27ae60; 
        color: #fff; 
        padding: 12px 16px; 
        border-radius: 8px; 
        box-shadow: 0 6px 20px rgba(39,174,96,0.3); 
        z-index: 1200; 
        font-weight: 600;
        animation: slideInUp 0.25s ease;
    `;
    toast.innerText = message;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutDown 0.25s ease';
        setTimeout(() => toastContainer.removeChild(toast), 250);
    }, 1600);
}

// Add animation styles
if (!document.getElementById('toast-animations')) {
    const style = document.createElement('style');
    style.id = 'toast-animations';
    style.innerHTML = `
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideOutDown {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
    `;
    document.head.appendChild(style);
}

// Copy-to-clipboard handler for command blocks
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    
    const container = btn.closest('.code-block');
    if (!container) return;
    
    const codeEl = container.querySelector('code');
    if (!codeEl) return;
    
    const text = codeEl.innerText || codeEl.textContent;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('✓ تم النسخ');
        }).catch(() => {
            showToast('✗ فشل النسخ');
        });
    } else {
        // Fallback for older browsers
        const range = document.createRange();
        range.selectNodeContents(codeEl);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try {
            document.execCommand('copy');
            sel.removeAllRanges();
            showToast('✓ تم النسخ');
        } catch (err) {
            showToast('✗ فشل النسخ');
        }
    }
});
