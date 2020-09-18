gsap.registerPlugin(ScrollTrigger);


gsap.to(".header", {
    scrollTrigger: {
        trigger: ".home-nav",
        start: "top 200",
        end:"1600px 100px",
        toggleActions: "restart none none reverse"
    },
    x: '100vw',
});
