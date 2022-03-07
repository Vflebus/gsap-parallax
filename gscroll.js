const vw = (val) => {
    return window.innerWidth*(val/100)
}
console.log(vw(-20));


gsap.to("#cave", {
    scrollTrigger: {
        trigger: ".header",
        toggleAction: "play reset reset reset",
        start: "top top",
        end: () => "+=" + document.querySelector('.header').offsetHeight/2,
        scrub: true,
    },
    scale: 1.7,
    x: -700
});

gsap.to("#bas", {
    scrollTrigger: {
        trigger: ".header",
        toggleAction: "play reset reset reset",
        start: "top top",
        end: () => "+=" + document.querySelector('.header').offsetHeight/2,
        scrub: true
    },
    scale: 1.7,
    x: -700
});

gsap.to("#gauche", {
    scrollTrigger: {
        trigger: ".header",
        toggleAction: "play reset reset reset",
        start: "top top",
        end: () => "+=" + document.querySelector('.header').offsetHeight/2,
        scrub: true
    },
    x: -70,
    scale: 2,
});

gsap.to("#fond", {
    scrollTrigger: {
        trigger: ".header",
        toggleAction: "play reset reset reset",
        start: "top top",
        end: () => "+=" + document.querySelector('.header').offsetHeight/2,
        scrub: true
    },
    x: 70,
    scale: 2,
});

gsap.to("#neige", {
    scrollTrigger: {
        start: "top top",
        end: () => "+=" + document.querySelector('.header').offsetHeight,
        scrub: 2,
        scrub: true,
        onEnterBack: () => {
            gsap.set("#neige", {filter: "unset"})
            gsap.to("#neige", {
                duration: 1,
                opacity: 1
            })
        }
    },
    x: -800,
    y: 200,
    onComplete: () => {
        gsap.set("#neige", {filter: "invert(44%) sepia(99%) saturate(2271%) hue-rotate(3deg) brightness(108%) contrast(102%)"})
        gsap.to("#neige", {
            duration: 1,
            opacity: 0
        })
    }
});

gsap.to("#neige", {
    scrollTrigger: {
        trigger: ".header",
        start: "top center",
        end: () => "+=" + document.querySelector('.header').offsetHeight,
    },
})

gsap.to(".header", {
    scrollTrigger: {
        trigger: ".header",
        toggleAction: "play reset reset reset",
        pin: true,
        start: "top top",
        end: () => "+=" + (document.querySelector('.header').offsetHeight/2),
        pinSpacing: true,
        scrub: true
    }
})


gsap.to(".header", {
    scrollTrigger: {
        trigger: ".main",
        start: "top center",
        end: () => "+=" + document.querySelector('.header').offsetHeight/3,
        scrub: true
    },
    opacity: 0
})