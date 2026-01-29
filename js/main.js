// Common JavaScript for all pages

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Aapki inquiry ke liye dhanyavaad! Hum 24 ghante mein aapse contact karenge.');
        this.reset();
    });
}

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Diwali lights effect
function createDiwaliLights() {
    const container = document.getElementById('diwaliLights');
    if (!container) return;
    
    const colors = ['#FF9933', '#FFFFFF', '#138808', '#FFD700', '#FF6B6B', '#4ECDC4'];
    
    for(let i = 0; i < 50; i++) {
        const light = document.createElement('div');
        light.className = 'diwali-light';
        light.style.left = Math.random() * 100 + 'vw';
        light.style.top = Math.random() * 100 + 'vh';
        light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        light.style.animationDelay = Math.random() * 2 + 's';
        light.style.width = Math.random() * 10 + 5 + 'px';
        light.style.height = light.style.width;
        container.appendChild(light);
    }
}

// Initialize common functions
window.addEventListener('DOMContentLoaded', () => {
    fadeInOnScroll();
    createDiwaliLights();
});

// Check on scroll
window.addEventListener('scroll', fadeInOnScroll);

// Set current year in footer
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(element => {
    element.textContent = currentYear;
});