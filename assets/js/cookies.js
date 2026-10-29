// ==========================================================================
// Cookies — banner de consentimento (LGPD). Usado em todas as páginas.
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    const CHAVE = 'orprocon_cookies_aceitos';
    const banner = document.getElementById('cookie-banner');
    const btnAceitar = document.getElementById('cookie-aceitar');

    if (!banner || !btnAceitar) return;

    // Informa ao CSS a altura do banner, para o botão do WhatsApp (mobile)
    // subir e não ficar escondido atrás dele enquanto estiver aberto.
    function atualizarAltura() {
        document.documentElement.style.setProperty('--cookie-h', banner.offsetHeight + 'px');
    }

    function abrirBanner() {
        banner.classList.add('visible');
        document.body.classList.add('cookies-aberto');
        atualizarAltura();
        window.addEventListener('resize', atualizarAltura);
    }

    function fecharBanner() {
        banner.classList.remove('visible');
        document.body.classList.remove('cookies-aberto');
        window.removeEventListener('resize', atualizarAltura);
    }

    let jaAceitou = false;
    try {
        jaAceitou = localStorage.getItem(CHAVE) === 'true';
    } catch (e) {
        // Se o navegador bloquear localStorage (modo privado, por exemplo),
        // mostramos o aviso mesmo assim, só não vamos conseguir "lembrar" depois.
    }

    if (!jaAceitou) {
        abrirBanner();
    }

    btnAceitar.addEventListener('click', function () {
        try {
            localStorage.setItem(CHAVE, 'true');
        } catch (e) {
            // Sem localStorage disponível, apenas fecha o banner nesta visita.
        }
        fecharBanner();
    });
});
