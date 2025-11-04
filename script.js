function loadAnimation() {
  var load = document.querySelector("#load");
  setTimeout(function () {
    load.style.top = "-100%";
  }, 3000);
}
loadAnimation();

var tl = gsap.timeline();
tl.to("#load", {
  opacity: 0,
  delay: 1,
});
gsap.to("#Plantleft", {
  x: -200,
  y: 300,
  scale: 2,
  rotate: -45,
  opacity: 0,
  duration: 1,
  delay: 2,
  ease: "power2.in",
  zIndex: 0,
});
gsap.to("#Plantright", {
  x: 200,
  y: 400,
  scale: 2,
  rotate: 45,
  opacity: 0,
  duration: 1,
  delay: 2,
  ease: "power2.in",
  zIndex: 0,
});
gsap.from("#bottlecap", {
  y: -400,
  duration: 1,
  delay: 2,
});
gsap.from("#bottle", {
  y: 500,
  duration: 1,
  delay: 2,
});
gsap.to("#Nourish", {
  y: 450,
  opacity: 0,
  delay: 3,
  scrollTrigger: {
    trigger: "#page2",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});
gsap.to("#home h1", {
  color: "#C7DDCE",
  duration: 1,
  delay: 2,
});
gsap.to("#bottleAnimation", {
  scale: 0.5,
  y: 550,
  x: 250,
  rotate: -30,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2",
    start: "top bottom",
    end: "top top",
    markers: true,
    scrub: "true",
    onLeave: () => {
      gsap.to("#bottleAnimation", {
        y: 1470,
        x: 35,
        rotate: 0,
        scale: 0.7,
        duration: 2,
        delay: 10,
        scrollTrigger: {
          trigger: "#product3",
          start: "top center",
          end: "bottom 100px",
          markers: true,
          scrub: true,
        },
      });
    },
  },
});
gsap.to("nav h3, h2", {
  color: "#fff",
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#product2",
    markers: true,
    scrub: true,
    start: "top -20",
  },
});
