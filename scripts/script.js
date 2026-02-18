// ==================== SWIPER INIT ====================
const swiper = new Swiper('.slider-container', {
    effect: 'fade',
    loop: true,
    speed: 1100,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

// ==================== CUSTOM PAGINATION ====================
const tabs = document.querySelectorAll('.slider-tab');
const indicator = document.querySelector('.slider-indicator');

const updatePagination = (index) => {
    tabs.forEach((tab, i) => tab.classList.toggle('active', i === index));
    const activeTab = tabs[index];
    if (activeTab && indicator) {
        indicator.style.transform = `translateX(${activeTab.offsetLeft - 40}px)`;
        indicator.style.width = `${activeTab.offsetWidth}px`;
    }
};

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => swiper.slideToLoop(index));
});

swiper.on('slideChange', () => updatePagination(swiper.realIndex));

// Initialize
window.addEventListener('load', () => {
    if (tabs[0]) {
        updatePagination(0);
    }
});

// ==================== NAV SCROLL EFFECT ====================
const nav = document.getElementById('mainNav');

const updateNavDropdownTop = () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.style.top = nav.offsetHeight + 'px';
    }
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    updateNavDropdownTop();
});

// ==================== MOBILE MENU ====================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
    // Blur the button immediately so :active style doesn't stick on mobile
    const btn = document.querySelector('.menu-toggle');
    if (btn) btn.blur();
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = nav ? nav.offsetHeight : 0;
            const targetPosition = target.offsetTop - navHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ==================== SCROLL REVEAL ====================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    revealObserver.observe(el);
});

// ==================== CONTACT FUNCTIONS ====================
function makeCall() {
    window.location.href = 'tel:+9779709138954';
}

function sendEmail() {
    const email = 'agrirootsfarms@gmail.com';
    const subject = 'Inquiry from AgriRoots Website';
    const body = 'Hello AgriRoots Team,%0D%0A%0D%0AI would like to inquire about...';
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}