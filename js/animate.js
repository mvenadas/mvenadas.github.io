gsap.to(".site-nav li", {
    y: 0,
    duration: 0.4,
    ease: "power4",
    delay: 1,
});

gsap.to(".name-box h1", {
    x: 0,
    stagger: 0.3,
    ease: "power4.inOut",
    duration: 1,
    delay: 0.9,
});

gsap.to(".name-box span", {
    x: 0,
    stagger: 0.3,
    ease: "power4.inOut",
    duration: 1,
    delay: 1,
});

gsap.to(".position-title", {
    y: 0,
    ease: "power4",
    duration: 1,
    delay: 0.9,
    opacity: 9, 
});

// Mobile

ScrollTrigger.matchMedia({
    "(max-width: 699px)": () => {
      gsap.to('.name-box h1', {x: -100});
    }, 
    "(min-width: 700px)": () => {
      gsap.to('h1', {color: 'green'});
    }, 
  });
  