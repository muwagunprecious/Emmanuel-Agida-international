document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.classList.toggle('open');
        nav.classList.toggle('open');
        
        // Prevent body scroll when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            nav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('open') && 
            !nav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('open');
            nav.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === 'index.html' && linkPath === 'index.html') || (linkPath === '#' && currentPath === '')) {
            link.classList.add('active');
        }
    });
});
