// Indian Wedding Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initWeddingAnimations();
    
    // Initialize package comparisons
    initPackageComparison();
    
    // Initialize FAQ accordion
    initFAQAccordion();
    
    // Initialize theme gallery
    initThemeGallery();
    
    // Initialize catering menu tabs
    initCateringMenu();
    
    // Initialize consultation form
    initConsultationForm();
});

// Initialize wedding animations
function initWeddingAnimations() {
    // Animate journey timeline
    const journeySteps = document.querySelectorAll('.journey-step');
    journeySteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transitionDelay = (index * 0.2) + 's';
        
        setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.wedding-hero-section');
        if (heroSection) {
            heroSection.style.backgroundPosition = 'center ' + (scrolled * 0.5) + 'px';
        }
    });
    
    // Animate ceremony cards on scroll
    const ceremonyCards = document.querySelectorAll('.ceremony-card');
    const ceremonyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, {
        threshold: 0.1
    });
    
    ceremonyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        ceremonyObserver.observe(card);
    });
}

// Initialize package comparison
function initPackageComparison() {
    const packageCards = document.querySelectorAll('.package-card');
    
    packageCards.forEach(card => {
        // Hover effects
        card.addEventListener('mouseenter', function() {
            const price = this.querySelector('.package-price');
            if (price) {
                price.style.transform = 'scale(1.1)';
                price.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const price = this.querySelector('.package-price');
            if (price) {
                price.style.transform = 'scale(1)';
            }
        });
        
        // Click to select package
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.btn')) {
                packageCards.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                
                // Show package details
                const packageName = this.querySelector('h3').textContent;
                showPackageDetails(packageName);
            }
        });
    });
}

// Show package details
function showPackageDetails(packageName) {
    // This function can be expanded to show detailed package information
    console.log(`Selected package: ${packageName}`);
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'package-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <h5>${packageName} Selected</h5>
            <p>This package has been added to your inquiry.</p>
            <a href="index.html#contact" class="btn btn-sm btn-primary">Proceed to Booking</a>
        </div>
    `;
    
    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .package-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            padding: 20px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            border-left: 5px solid var(--gold);
            max-width: 300px;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content h5 {
            color: var(--maroon);
            margin-bottom: 10px;
        }
        
        .notification-content p {
            color: #666;
            margin-bottom: 15px;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Initialize FAQ accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.accordion-item');
    
    // Add animation to FAQ items
    faqItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add custom behavior to FAQ accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add active class to parent item
            const parentItem = this.closest('.accordion-item');
            faqItems.forEach(item => item.classList.remove('active'));
            parentItem.classList.add('active');
        });
    });
}

// Initialize theme gallery
function initThemeGallery() {
    const themeCards = document.querySelectorAll('.theme-card');
    
    themeCards.forEach(card => {
        // Click to view theme details
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.btn')) {
                const themeName = this.querySelector('h3').textContent;
                openThemeModal(themeName);
            }
        });
        
        // Hover animation
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.theme-overlay');
            if (overlay) {
                overlay.style.transform = 'translateY(0)';
                overlay.style.background = 'linear-gradient(to top, rgba(139, 0, 0, 0.9), rgba(139, 0, 0, 0.7))';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.theme-overlay');
            if (overlay) {
                overlay.style.transform = 'translateY(100px)';
                overlay.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)';
            }
        });
    });
}

// Open theme modal
function openThemeModal(themeName) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'theme-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <h3>${themeName} Details</h3>
            <div class="modal-body">
                <p>Detailed information about ${themeName} wedding theme including decorations, colors, and special features.</p>
                <div class="theme-features">
                    <h5>Included Features:</h5>
                    <ul>
                        <li>Customized mandap design</li>
                        <li>Themed entrance decorations</li>
                        <li>Matching table settings</li>
                        <li>Special lighting effects</li>
                        <li>Traditional elements as per theme</li>
                    </ul>
                </div>
                <a href="index.html#contact" class="btn btn-primary mt-3">Book This Theme</a>
            </div>
        </div>
    `;
    
    // Add styles for modal
    const style = document.createElement('style');
    style.textContent = `
        .theme-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .modal-content {
            background: white;
            border-radius: 15px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            animation: slideUp 0.3s ease;
        }
        
        @keyframes slideUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .close-modal {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--maroon);
            line-height: 1;
        }
        
        .modal-body {
            margin-top: 20px;
        }
        
        .theme-features ul {
            list-style: none;
            padding: 0;
            margin: 15px 0;
        }
        
        .theme-features li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
            color: #555;
        }
        
        .theme-features li:last-child {
            border-bottom: none;
        }
        
        .theme-features li:before {
            content: '✓';
            color: var(--green);
            margin-right: 10px;
            font-weight: bold;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Initialize catering menu
function initCateringMenu() {
    const menuCategories = document.querySelectorAll('.menu-category');
    
    menuCategories.forEach(category => {
        // Add click to expand/collapse
        const heading = category.querySelector('h4');
        heading.style.cursor = 'pointer';
        
        heading.addEventListener('click', function() {
            const ul = category.querySelector('ul');
            ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        });
        
        // Add hover effects to menu items
        const menuItems = category.querySelectorAll('li');
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
                this.style.transition = 'transform 0.3s ease';
                this.style.color = var('--maroon');
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
                this.style.color = '#555';
            });
        });
    });
}

// Initialize consultation form
function initConsultationForm() {
    const consultationBtn = document.querySelector('.consultation-cta .btn');
    
    if (consultationBtn) {
        consultationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create consultation form modal
            const formModal = document.createElement('div');
            formModal.className = 'consultation-modal';
            formModal.innerHTML = `
                <div class="modal-content">
                    <button class="close-modal">&times;</button>
                    <h3>Free Wedding Consultation</h3>
                    <p class="text-muted mb-4">Fill this form to book a free consultation with our wedding experts</p>
                    
                    <form id="consultationForm">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Your Name" required>
                        </div>
                        <div class="mb-3">
                            <input type="tel" class="form-control" placeholder="Phone Number" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email Address" required>
                        </div>
                        <div class="mb-3">
                            <input type="date" class="form-control" placeholder="Preferred Wedding Date">
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="3" placeholder="Any specific requirements?"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Book Free Consultation</button>
                    </form>
                </div>
            `;
            
            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .consultation-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                }
                
                .consultation-modal .modal-content {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    max-width: 500px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                }
                
                .consultation-modal .close-modal {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 2rem;
                    cursor: pointer;
                    color: var(--maroon);
                    line-height: 1;
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(formModal);
            
            // Form submission
            const form = formModal.querySelector('#consultationForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for booking a consultation! Our wedding expert will contact you within 24 hours.');
                formModal.remove();
            });
            
            // Close modal
            const closeBtn = formModal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => formModal.remove());
            
            formModal.addEventListener('click', (e) => {
                if (e.target === formModal) formModal.remove();
            });
        });
    }
}

// Add custom styles for selected package
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .package-card.selected {
            border: 3px solid var(--green);
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }
        
        .package-card.selected .package-header {
            background: linear-gradient(45deg, var(--green), #2e8b57);
        }
        
        /* Animation for package cards */
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        
        .package-card:hover {
            animation: pulse 2s infinite;
        }
        
        /* Smooth scroll for navigation */
        html {
            scroll-behavior: smooth;
        }
        
        /* Highlight current section in navigation */
        .nav-link.active {
            color: var(--gold) !important;
        }
    </style>
`);

// Add section highlight on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}` || 
            link.getAttribute('href')?.includes(current)) {
            link.classList.add('active');
        }
    });
});