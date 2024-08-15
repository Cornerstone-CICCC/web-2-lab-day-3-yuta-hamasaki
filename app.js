gsap.registerPlugin(ScrollTrigger);

const topTl = gsap.timeline()
const secTl = gsap.timeline({
  scrollTrigger:{
    trigger: '.section2',
    start: "top",
    toggleActions: "restart reverse"
  }
})

const thrTl = gsap.timeline({
  scrollTrigger:{
    trigger: '.section3',
    toggleActions: "restart none reverse pause"
  },

}
)

const fourTl = gsap.timeline({
  scrollTrigger:{
    trigger: '.section4',
    start:() => `+=${contents.length}%`,
    end:() => `+=${contents.length}%`,
    scrub: true, 
  }
}
)



topTl.from(".content span:last-child", {
  x:700,
  duration:1
}).from(".content span:first-child", {
  x:-700,
  duration:1
}, "<").from(".content p", {
  y:400,
  opacity:0,
  rotation: "+=90"
}).from(".content img", {
  y:800
})

secTl.from(".section2 span:first-child", {
  y:-500,
}).from(".section2 span:last-child", {
  y:-500,
}, "< 0.3").from(".section2 p", {
  rotationY:90,
  opacity:0,
  durartion:2
})


thrTl.from(".section3 h2",{
  opacity:0,
  scale:10,
  duration:1
}).from(".section3 span",{
  y: 500,
  stagger: 0.2,
}).to(".section3 span",{
  backgroundColor:"white",
  color:"gray"
}, "<")

const contents = gsap.utils.toArray(".horizontal-sections section")
gsap.to(contents, {
  xPercent: -100 * (contents.length -1),
  scrollTrigger: {
    trigger: ".section4",
    pin: true,
    scrub: 0.5,
    start: "top",
    end: () => `+=${contents.length * 3}%`,
  },
});


fourTl.from(".portfolio-item:first-child",{
  x:200,
  opacity:0,
  duration:3
}).from(".portfolio-item:last-child",{
  x:200,
  opacity:0,
  duration:3
})