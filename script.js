/* 
    Muzamil Hussain Portfolio Script
    Vanilla JavaScript for interactions and animations
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Scrolled State
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Nav Toggle (Optional implementation)
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            alert('Mobile menu navigation is active. In a production site, this would toggle a mobile side-menu.');
        });
    }

    // 3. Intersection Observer for Scroll Animations
    const animationOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    // Target all animated elements
    const animatedElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right');
    animatedElements.forEach(el => observer.observe(el));

    // 4. Smooth Scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Success message on form submit
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'Projecting Vision...';
            
            setTimeout(() => {
                btn.textContent = 'Vision Sent Successfully!';
                btn.style.backgroundColor = 'var(--clr-accent)';
                btn.style.color = '#fff';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }

    // 6. Dynamic Parallax Background for Hero (Subtle)
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const offset = window.pageYOffset;
            hero.style.backgroundPositionY = offset * 0.5 + 'px';
        });
    }
});
