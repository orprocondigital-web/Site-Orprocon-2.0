// ==========================================================================
// Home — Comportamento da página inicial (index.html)
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    // --------------------------------------------------------------------------
    // 1. Lightbox de Zoom nas Fotos da Equipe
    // --------------------------------------------------------------------------
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg) {
        document.querySelectorAll('.team-card').forEach(card => {
            card.addEventListener('click', function () {
                const img = this.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt || 'Foto ampliada';
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        function closeLightbox() {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
            document.body.style.overflow = '';
        }

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox || e.target === lightboxClose) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // --------------------------------------------------------------------------
    // 2. Acordeão do FAQ (Dúvidas Frequentes)
    // --------------------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', function () {
                const isActive = item.classList.contains('active');

                // Opcional: fecha outros itens abertos para manter a leitura limpa
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) otherAnswer.style.maxHeight = null;
                    }
                });

                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
                }
            });
        }
    });

    // --------------------------------------------------------------------------
    // 3. Máscara de Telefone Dinâmica para o Formulário (Fixo e Celular)
    // --------------------------------------------------------------------------
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 10) {
                // Formato celular: (XX) 9XXXX-XXXX
                value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            } else if (value.length > 6) {
                // Formato intermediário ou fixo: (XX) XXXX-XXXX
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d{0,2})$/, '($1');
            }
            e.target.value = value;
        });
    }

    // --------------------------------------------------------------------------
    // 4. Balão Tooltip do WhatsApp Flutuante
    // --------------------------------------------------------------------------
    const whatsappTooltip = document.getElementById('whatsapp-tooltip');
    const closeTooltipBtn = document.getElementById('close-whatsapp-tooltip');

    if (closeTooltipBtn && whatsappTooltip) {
        closeTooltipBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            whatsappTooltip.style.display = 'none';
        });

        // Oculta após 10 segundos para não incomodar o usuário
        setTimeout(() => {
            if (whatsappTooltip) {
                whatsappTooltip.style.transition = 'opacity 0.5s ease';
                whatsappTooltip.style.opacity = '0';
                setTimeout(() => { whatsappTooltip.style.display = 'none'; }, 500);
            }
        }, 10000);
    }

    // --------------------------------------------------------------------------
    // 5. ScrollSpy (Destacar Link Ativo no Menu Durante a Rolagem)
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
});
