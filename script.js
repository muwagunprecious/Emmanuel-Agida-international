document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    // ========================================
    // DROPDOWN MENU FUNCTIONALITY
    // ========================================
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    
    navDropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector(':scope > a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (dropdownLink && dropdownMenu) {
            // Handle click for mobile
            dropdownLink.addEventListener('click', (e) => {
                // Only prevent default on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent the click from bubbling up and closing the nav
                    dropdown.classList.toggle('open');
                    
                    // Close other dropdowns
                    navDropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.classList.remove('open');
                        }
                    });
                }
            });
            
            // Check if any child link is active and add class to parent
            const childLinks = dropdownMenu.querySelectorAll('a');
            childLinks.forEach(link => {
                if (link.classList.contains('active')) {
                    dropdown.classList.add('has-active-child');
                }
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            navDropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    });

    // ========================================
    // TYPEWRITER ANIMATION
    // ========================================
    const typewriterElement = document.getElementById('typewriter');
    
    if (typewriterElement) {
        const phrases = [
            'Investing in Leaders',
            'Transforming Organizations',
            'Building Sustainable Futures'
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 80;
        
        function typeWriter() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                // Remove characters
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 40; // Faster when deleting
            } else {
                // Add characters
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 80; // Normal speed when typing
            }
            
            // Check if word is complete
            if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause at end of phrase
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Move to next phrase
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500; // Pause before typing next phrase
            }
            
            setTimeout(typeWriter, typingSpeed);
        }
        
        // Start typewriter after a brief delay
        setTimeout(typeWriter, 800);
    }

    // ========================================
    // STICKY HEADER
    // ========================================
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

    // Close menu when clicking a link (but not the dropdown toggle)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close menu if clicking on dropdown toggle (parent link of dropdown)
            const isDropdownToggle = link.closest('.nav-dropdown') && 
                                     link === link.closest('.nav-dropdown').querySelector(':scope > a');
            
            if (!isDropdownToggle) {
                menuToggle.classList.remove('open');
                nav.classList.remove('open');
                document.body.style.overflow = '';
            }
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
