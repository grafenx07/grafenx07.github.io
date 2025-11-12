// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Cursor effect (optional - for desktop)
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursorFollower);

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Smooth follower animation
    function animateFollower() {
        const distX = mouseX - followerX;
        const distY = mouseY - followerY;

        followerX += distX * 0.1;
        followerY += distY * 0.1;

        cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-hover');
        });
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');

    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add typing effect to hero subtitle (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.hero-subtitle');
//     const originalText = subtitle.textContent;
//     typeWriter(subtitle, originalText, 50);
// });

// Project card click handler
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectTitle = this.querySelector('h3').textContent;
        console.log(`Clicked on project: ${projectTitle}`);
        // You can add modal or redirect logic here
    });
});

// Skill progress animation on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.skill-progress').style.animation = 'fillBar 1.5s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-item').forEach(skill => {
    skillObserver.observe(skill);
});

// Add CSS for custom cursor (injected via JS)
const cursorStyles = `
    .custom-cursor {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--accent);
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: width 0.3s, height 0.3s;
        mix-blend-mode: difference;
        left: -5px;
        top: -5px;
    }

    .cursor-follower {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid var(--accent);
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.5;
        left: -20px;
        top: -20px;
    }

    .custom-cursor.cursor-hover {
        width: 20px;
        height: 20px;
        left: -10px;
        top: -10px;
    }

    .cursor-follower.cursor-hover {
        width: 60px;
        height: 60px;
        left: -30px;
        top: -30px;
    }

    @media (max-width: 768px) {
        .custom-cursor,
        .cursor-follower {
            display: none;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = cursorStyles;
document.head.appendChild(styleSheet);

// Email copy to clipboard functionality
const emailLink = document.querySelector('.email-link');
if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailLink.textContent;

        navigator.clipboard.writeText(email).then(() => {
            // Show toast notification
            showNotification('Email copied to clipboard!');
        }).catch(err => {
            // Fallback: open email client
            window.location.href = `mailto:${email}`;
        });
    });
}

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    const notificationStyles = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: var(--accent);
        color: var(--bg-dark);
        padding: 16px 24px;
        border-radius: 50px;
        font-weight: 700;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    notification.style.cssText = notificationStyles;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Add notification animations
const notificationAnimationStyles = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;

const animationStyleSheet = document.createElement('style');
animationStyleSheet.textContent = notificationAnimationStyles;
document.head.appendChild(animationStyleSheet);

// Lazy loading for images (if you add actual images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce scroll event
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    // Your scroll logic here
});

window.addEventListener('scroll', debouncedScroll);

console.log('🚀 Portfolio loaded successfully!');
console.log('Made with ❤️ by Grafenberg Langpen');
