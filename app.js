window.addEventListener('load', () => {
    // LOADING PAGE
    var loadingPage = document.querySelector(".loading-page");
    loadingPage.style.opacity = 0;
    setTimeout(() => {
        loadingPage.style.display = "none";
    }, 3000);
    // END LOADING PAGE
    // LANDING ANIME
    var tl = gsap.timeline({});
    tl.to(".topic span", {
        width: 0,
        duration: 3,
        ease: "steps(10)"
    })
    tl.fromTo("#cardTwo .description", {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: "back",
        duration: .7,
    }, ">+.25");
    tl.fromTo(".name", {
        y: -200
    }, {
        y: 0,
        ease: "back",
        duration: .7
    }, "<");
    tl.fromTo(".email", {
        x: 200,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
    }, "<");
    tl.fromTo(".top-right", {
        x: 200,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
    }, "<");
    tl.fromTo(".git-code a", {
        scale: 0,
        opacity: 0
    }, {
        stagger: .15,
        scale: 1,
        opacity: 1,
        ease: "back"
    }, "<");
    tl.fromTo(".modal-container", { display: "none" }, { display: "flex" }, "<")
    tl.fromTo(".projects", { display: "none" }, { display: "block" }, "<")
    tl.to("#cardTwo .topic", {
        opacity: 0,
        x: 100
    }, ">+10");
    tl.to("#cardTwo .description", {
        opacity: 0,
        x: -100
    }, "<")
    tl.to("#cardTwo", {
        display: "none"
    }, ">");
    console.log("THIS IS THE DURATION ---" +
        tl.duration());
    // END LANDING ANIME
    // START OF CAROUSEL ANIME
    var ttl = gsap.timeline({
        delay: 14.8,
        repeat: 2000,
        repeatDelay: 0,
    });
    ttl.to("#cardOne", {
        display: "flex"
    });
    ttl.fromTo("#cardOne .right", {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0
    }, "<");
    ttl.fromTo("#cardOne .left", {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0
    }, "<");
    ttl.to("#cardOne .left", {
        opacity: 0,
        x: -100
    }, ">+8");
    ttl.to("#cardOne .right", {
        opacity: 0,
        x: 100
    }, "<");
    ttl.to("#cardOne", {
        display: "none"
    }, ">");
    ttl.to("#cardTwo", {
        display: "flex"
    }, ">");
    ttl.to("#cardTwo .topic", {
        opacity: 1,
        x: 0
    }, ">");
    ttl.to("#cardTwo .description", {
        opacity: 1,
        x: 0
    }, "<");
    ttl.to("#cardTwo .topic", {
        x: -50,
        rotate: -2,
        opacity: 0
    }, ">+7");
    ttl.to("#cardTwo .description", {
        x: 50,
        rotate: -2,
        opacity: 0
    }, "<")
    var controller = new ScrollMagic.Controller();
    var fsl = gsap.timeline({ ease: "none" });
    fsl.to(".name", { opacity: 0 });
    fsl.to(".git-code", { opacity: 0 }, "<");
    fsl.to(".top-right a", { opacity: 0 }, "<");
    fsl.to(".email a", { opacity: 0 }, "<");
    fsl.to(".landing", { height: "30vh" })
    var scene = new ScrollMagic.Scene({
            triggerElement: '.top-right',
            triggerHook: 0,
            duration: "",
        })
        .addIndicators({
            colorTrigger: 'red', //transparent
            colorStart: 'red',
            colorEnd: 'transparent',
            indent: 5
        })
        .setTween(fsl)
        .addTo(controller);
});