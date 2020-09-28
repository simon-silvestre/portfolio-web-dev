const sr = ScrollReveal();

sr.reveal('h1', {
    origin: 'top',
    distance: '20px',
    duration: 2100
});

sr.reveal('.social, .project-menu-container', {
    origin: 'right',
    distance: '50px',
    duration: 1000
});

sr.reveal('#titleLogo, .sous-titre, .home-nav, .project-title', {
    duration: 2000
});

if (window.matchMedia("(max-width: 826px)").matches) {
sr.reveal('.projet-container', {
    duration: 2000,
    delay: 50,
});
}

if (window.matchMedia("(min-width: 826px)").matches) {
    sr.reveal('.projet', {
        duration: 2000,
        delay: 50,
        interval: 150
    });
}

