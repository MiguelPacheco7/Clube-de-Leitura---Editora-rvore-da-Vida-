const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothTouch: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// NOVO CÓDIGO AQUI para o vídeo
document.addEventListener('DOMContentLoaded', function () {
    const videoOverlay = document.getElementById('video-overlay');
    // Obtém o iframe que está logo antes do overlay
    const videoIframe = videoOverlay ? videoOverlay.previousElementSibling : null;

    if (videoOverlay && videoIframe && videoIframe.tagName === 'IFRAME') {
        videoOverlay.addEventListener('click', function () {
            videoIframe.style.pointerEvents = 'auto'; // Torna o iframe clicável
            videoOverlay.style.display = 'none'; // Esconde a sobreposição
            // Opcional: Para auto-play ao clicar (se o URL do YouTube permitir)
            // if (!videoIframe.src.includes('autoplay')) {
            //     videoIframe.src += '&autoplay=1'; 
            // }
        });
    }
});