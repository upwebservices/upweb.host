// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(30, 58, 138, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(30, 58, 138, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initial call

    // Smooth Scrolling for Navigation Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksList = document.querySelectorAll('.nav-link');

    function updateActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Basic form validation
            if (!validateForm(formObject)) {
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // Form Validation
    function validateForm(data) {
        const errors = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push('Please enter a valid name (at least 2 characters)');
        }

        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Please enter a valid email address');
        }

        if (!data.service) {
            errors.push('Please select a service');
        }

        if (!data.message || data.message.trim().length < 10) {
            errors.push('Please enter a message (at least 10 characters)');
        }

        if (errors.length > 0) {
            showNotification(errors.join('\n'), 'error');
            return false;
        }

        return true;
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-family: 'Inter', sans-serif;
        `;

        // Set colors based on type
        if (type === 'success') {
            notification.style.background = '#10b981';
            notification.style.color = 'white';
        } else if (type === 'error') {
            notification.style.background = '#ef4444';
            notification.style.color = 'white';
        } else {
            notification.style.background = '#3b82f6';
            notification.style.color = 'white';
        }

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);

        // Close button functionality
        const closeButton = notification.querySelector('.notification-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            });
        }
    }

    // Scroll animations for service cards
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .contact-item, .feature-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .service-card,
        .contact-item,
        .feature-item {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .service-card.animate,
        .contact-item.animate,
        .feature-item.animate {
            opacity: 1;
            transform: translateY(0);
        }

        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: 1rem;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .notification-message {
            white-space: pre-line;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call

    // Counter Animation for Stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                // Format the number
                let displayValue = Math.floor(current).toString();
                if (counter.textContent.includes('K')) {
                    displayValue = Math.floor(current / 1000) + 'K+';
                } else if (counter.textContent.includes('+')) {
                    displayValue += '+';
                }
                
                counter.textContent = displayValue;
            }, 16);
        });
    }

    // Trigger counter animation when hero stats become visible
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(heroStats);
    }

    // Parallax effect for hero section (optional, can be disabled for performance)
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    }

    // Uncomment the next line to enable parallax effect
    // window.addEventListener('scroll', parallaxEffect);

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Initialize everything
    console.log('Erled Agency website initialized successfully!');
});

// Utility function to debounce scroll events for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
    animateOnScroll();
}, 10);

// Replace direct scroll listeners with debounced version for better performance
// window.addEventListener('scroll', debouncedScrollHandler);