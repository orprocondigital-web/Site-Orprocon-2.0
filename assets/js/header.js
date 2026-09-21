// ==========================================================================
// Header — menu hambúrguer (mobile). Usado em qualquer página que tenha
// o header padrão (index, obrigado quando aplicável, privacidade...).
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navWrapper = document.getElementById('nav-wrapper');

    if (!menuToggle || !navWrapper) return;

    menuToggle.addEventListener('click', function () {
        const isOpen = navWrapper.classList.toggle('open');
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu mobile ao escolher qualquer link dele
    navWrapper.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navWrapper.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
});
