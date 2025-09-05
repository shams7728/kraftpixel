// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navActions = document.querySelector('.nav__actions');
    const navOverlay = document.querySelector('.nav__overlay');
    let isMenuOpen = false;

    // Toggle menu function
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Open menu
            navMenu.classList.add('active');
            navActions.classList.add('active');
            navOverlay.classList.add('active');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            // Close menu
            navMenu.classList.remove('active');
            navActions.classList.remove('active');
            navOverlay.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Close menu function
    function closeMenu() {
        if (isMenuOpen) {
            isMenuOpen = false;
            navMenu.classList.remove('active');
            navActions.classList.remove('active');
            navOverlay.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Event listeners
    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767 && isMenuOpen) {
            closeMenu();
        }
    });

    // Close menu when clicking on menu links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});