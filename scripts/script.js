// const sliderTabs = document.querySelectorAll(".slider-tab");
// const sliderIndicator = document.querySelector(".slider-indicator"); // Changed from querySelectorAll

// const updatePagination = (tab, index) => {
//     // Remove active class from all tabs
//     sliderTabs.forEach(t => t.classList.remove('active'));
//     // Add active class to current tab
//     tab.classList.add('active');
//     // Move indicator
//     sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
// };

// const swiper = new Swiper(".slider-container", {
//     effect: "slide",
//     speed: 1300,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     on: {
//         slideChange: function () {
//             const activeIndex = this.realIndex;
//             updatePagination(sliderTabs[activeIndex], activeIndex);
//         }
//     }
// });

// sliderTabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => {
//         swiper.slideTo(index);
//         updatePagination(tab, index);
//     });
// });

// // Initialize indicator position on first tab
// if (sliderTabs.length > 0) {
//     updatePagination(sliderTabs[0], 0);
// }
// Initialize Swiper
const swiper = new Swiper('.slider-container', {
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

// Custom pagination
const tabs = document.querySelectorAll('.slider-tab');
const indicator = document.querySelector('.slider-indicator');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        swiper.slideToLoop(index);
    });
});

swiper.on('slideChange', () => {
    const activeIndex = swiper.realIndex;
    tabs.forEach((tab, index) => {
        tab.classList.toggle('active', index === activeIndex);
    });

    // Move indicator
    const activeTab = tabs[activeIndex];
    if (activeTab) {
        indicator.style.transform = `translateX(${activeTab.offsetLeft - 20}px)`;
        indicator.style.width = `${activeTab.offsetWidth}px`;
    }
});

// Initialize indicator position
if (tabs[0]) {
    indicator.style.width = `${tabs[0].offsetWidth}px`;
}

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const nav = document.querySelector('nav');
            const navHeight = nav ? nav.offsetHeight : 0;
            const targetPosition = target.offsetTop - navHeight - 20; // Add small offset
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// Function to make a phone call
function makeCall() {
    const phoneNumber = '+9779709138954';
    window.location.href = 'tel:' + phoneNumber;
}

// Function to send an email
function sendEmail() {
    const email = 'agrirootsfarms@gmail.com';
    const subject = 'Inquiry from AgriRoots Website';
    const body = 'Hello AgriRoots Team,%0D%0A%0D%0AI would like to inquire about...';

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}