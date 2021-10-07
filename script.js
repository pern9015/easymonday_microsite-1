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
