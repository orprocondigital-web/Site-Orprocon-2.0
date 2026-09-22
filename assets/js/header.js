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

    // Menu Mobile
    if (!menuToggle || !navWrapper) return;

    menuToggle.addEventListener('click', function () {
        const isOpen = navWrapper.classList.toggle('open');
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fecha o menu mobile ao clicar em qualquer link
    navWrapper.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navWrapper.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Fecha ao clicar fora do menu
    document.addEventListener('click', function (e) {
        if (navWrapper.classList.contains('open') && 
            !navWrapper.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navWrapper.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Fecha com tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navWrapper.classList.contains('open')) {
            navWrapper.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
});
