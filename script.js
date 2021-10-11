const words = [
  "Der giver dig tid til det, der betyder noget.",
  "Du glæder dig til at lave.",
  "Dine børn ikke bytter væk",
  "Der giver dig en easy Monday.",
];

let masterTL = gsap.timeline({ repeat: -1 });

words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
  tl.to(".text", { duration: 1, text: word });
  masterTL.add(tl);
});

// __________scolltrigger___________\\
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelector("section");

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top 50%",
      end: "+=200",
      scrub: true,
      markers: true,
    },
  })
  .from(".animation1", {
    duration: 1,
    opacity: 0,
  })
  .from(".animation2", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
  })
  .from(".animation3", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section5-5",
      start: "25% 50%",
      end: "+=135",
      scrub: true,
      markers: true,
    },
  })
  .from(".animation4", {
    scale: 0,
    transformOrigin: "100% 100%",
    duration: 1,
    opacity: 0,
    stagger: 1,
  });
