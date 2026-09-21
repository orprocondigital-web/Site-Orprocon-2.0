// ==========================================================================
// Home — comportamento da página inicial (index.html)
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    const teamContent = document.getElementById('team-content');
    const teamSection = document.getElementById('equipe');

    document.getElementById('link-equipe').addEventListener('click', function (e) {
        e.preventDefault();
        const isVisible = teamContent.classList.contains('visible');
        if (isVisible) {
            teamContent.classList.remove('visible');
            teamSection.classList.remove('has-content');
        } else {
            teamContent.classList.add('visible');
            teamSection.classList.add('has-content');
            document.getElementById('equipe').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Oculta a equipe ao clicar em qualquer outro link de navegação
    document.querySelectorAll('header nav a, header .btn-cta').forEach(link => {
        if (link.id !== 'link-equipe') {
            link.addEventListener('click', function () {
                teamContent.classList.remove('visible');
                teamSection.classList.remove('has-content');
            });
        }
    });

    // Lightbox de zoom nas fotos da equipe
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    document.querySelectorAll('.team-card img').forEach(img => {
        img.addEventListener('click', function () {
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', function () {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    });
});
