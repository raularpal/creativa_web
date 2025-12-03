// ==========================================
// SMOOTH SCROLL & ACTIVE NAV
// ==========================================

// Menú móvil toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ==========================================
// INTERSECTION OBSERVER PARA NAVEGACIÓN ACTIVA
// ==========================================

const sections = document.querySelectorAll('section[id]');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);

        if (entry.isIntersecting) {
            // Remover la clase 'active' de todos los enlaces
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            // Añadir 'active' al enlace correspondiente (incluye Inicio)
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(230, 185, 5, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(230, 185, 5, 0.1)';
    }

    lastScroll = currentScroll;
});
