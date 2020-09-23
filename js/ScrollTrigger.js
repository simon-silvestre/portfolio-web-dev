if (window.matchMedia("(min-width: 826px)").matches) {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(".header", {
        scrollTrigger: {
            trigger: ".section-introduction",
            start: "center 500",
            markers: true,
            toggleActions: "restart none none reverse"
        },
        x: '100vw',
    });
  }

