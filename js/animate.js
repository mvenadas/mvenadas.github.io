// gsap.to(".site-nav li", {
//     y: 0,
//     duration: 0.4,
//     ease: "power4",
//     delay: 1,
// });

// gsap.to(".name-box h1", {
//     x: 0,
//     stagger: 0.3,
//     ease: "power4.inOut",
//     duration: 1,
//     delay: 0.9,
// });

// gsap.to(".name-box span", {
//     x: 0,
//     stagger: 0.3,
//     ease: "power4.inOut",
//     duration: 1,
//     delay: 1,
// });

// gsap.to(".position-title", {
//     y: 0,
//     ease: "power4",
//     duration: 1,
//     delay: 0.9,
//     opacity: 9, 
// });

// gsap.to(".bubbs", {
//     opacity: 9,
//     duration: 0.5,
//     delay: 1.5,
//     y: 600
// });

// Sections - Animation
gsap.from("nav", {
  scrollTrigger: {
    trigger: "nav",
    start: "25px bottom",
    // markers: true
  },
  x: -1500,
  ease: "power4.inOut",
  duration: 1.5   
});

gsap.from("#hero", {
  scrollTrigger: {
    trigger: "#hero",
    start: "25px bottom",
    // markers: true
  },
  x: 1500,
  ease: "power4.inOut",
  duration: 1.5   
});

gsap.from("#key-skills", {
  scrollTrigger: {
    trigger: "#key-skills",
    start: "25px bottom",
    // markers: true
  },
  x: -1500,
  ease: "power4.inOut",
  duration: 1.5   
});










gsap.from("#about-me", {
    scrollTrigger: {
      trigger: "#about-me",
      start: "25px bottom",
      // markers: true

    },
    x: -1500,
    ease: "power4.inOut",
    duration: 1.5    
});

gsap.from("#portfolio", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "25px bottom",
    // markers: true
  },
  x: 1500,
  ease: "power4.inOut",
  duration: 1.5   
});

gsap.from("#contact-me", {
  scrollTrigger: {
    trigger: "#contact-me",
    start: "25px bottom",
    // markers: true
  },
  x: -1500,
  ease: "power4.inOut",
  duration: 1.5   
});

// Mobile

ScrollTrigger.matchMedia({
    "(max-width: 992px)": () => {
      gsap.to('.name-box h1', {x: -100,stagger: 0,});

      gsap.to(".bubbs", {
        opacity: 9,
        duration: 0.5,
        delay: 1.5,
        y: 80
    });

    }

    // "(min-width: 700px)": () => {
    //   gsap.to('h1', {color: 'green'});
    // }, 

  });
  