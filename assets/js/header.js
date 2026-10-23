// ==========================================================================
// Header — menu hambúrguer e efeito de elevação no scroll
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const menuToggle = document.getElementById('menu-toggle');
    const navWrapper = document.getElementById('nav-wrapper');

    // Efeito de scroll no header
    function checkHeaderScroll() {
        if (!header) return;
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkHeaderScroll, { passive: true });
    checkHeaderScroll();

    // Menu Mobile Dropdown
    if (!menuToggle || !navWrapper) return;

    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = navWrapper.classList.toggle('open');
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu mobile ao clicar em qualquer link interno
    navWrapper.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navWrapper.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Fecha ao clicar fora do header
    document.addEventListener('click', function (e) {
        if (navWrapper.classList.contains('open') && 
            !header.contains(e.target)) {
            navWrapper.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Fecha com tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navWrapper.classList.contains('open')) {
            navWrapper.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
