// ==========================================================================
// Cookies — banner de consentimento (LGPD). Usado em todas as páginas.
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    const CHAVE = 'orprocon_cookies_aceitos';
    const banner = document.getElementById('cookie-banner');
    const btnAceitar = document.getElementById('cookie-aceitar');

    if (!banner || !btnAceitar) return;

    let jaAceitou = false;
    try {
        jaAceitou = localStorage.getItem(CHAVE) === 'true';
    } catch (e) {
        // Se o navegador bloquear localStorage (modo privado, por exemplo),
        // mostramos o aviso mesmo assim, só não vamos conseguir "lembrar" depois.
    }

    if (!jaAceitou) {
        banner.classList.add('visible');
    }

    btnAceitar.addEventListener('click', function () {
        try {
            localStorage.setItem(CHAVE, 'true');
        } catch (e) {
            // Sem localStorage disponível, apenas fecha o banner nesta visita.
        }
        banner.classList.remove('visible');
    });
});
