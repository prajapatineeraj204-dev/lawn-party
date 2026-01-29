// Home page specific JavaScript

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add any home page specific functionality here
    
    // Example: Auto-rotate testimonials if present
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            wrap: true
        });
    }
});

// Hero section parallax effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.backgroundPosition = 'center ' + (scrolled * 0.5) + 'px';
    }
});