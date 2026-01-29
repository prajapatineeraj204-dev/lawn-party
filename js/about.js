// About page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize testimonial carousel
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 4000,
            wrap: true
        });
    }
    
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
    
    // Team card hover effects
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.team-img img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.team-img img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
});