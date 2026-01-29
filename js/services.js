// Services page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Services navigation
    const serviceNavItems = document.querySelectorAll('.service-nav-item');
    const serviceSections = document.querySelectorAll('.service-detail-section');
    
    // Function to update active nav item
    function updateActiveNav(targetId) {
        serviceNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${targetId}`) {
                item.classList.add('active');
            }
        });
    }
    
    // Click event for nav items
    serviceNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            updateActiveNav(targetId);
            
            // Scroll to section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 150,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for scroll-based navigation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateActiveNav(entry.target.id);
            }
        });
    }, observerOptions);
    
    // Observe all service sections
    serviceSections.forEach(section => {
        observer.observe(section);
    });
    
    // Add animation to service features
    const serviceLists = document.querySelectorAll('.service-list li');
    serviceLists.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transitionDelay = (index * 0.1) + 's';
        
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        itemObserver.observe(item);
    });
    
    // Theme card hover effects
    const themeCards = document.querySelectorAll('.theme-card');
    themeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.theme-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.theme-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
    
    // Service gallery image zoom
    const serviceImages = document.querySelectorAll('.service-gallery img');
    serviceImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});