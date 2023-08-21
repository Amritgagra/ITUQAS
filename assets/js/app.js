AOS.init();

let target = document.querySelector(".services__cards-wrapper");

   var swiper = new Swiper(".case-slider", {
    autoplay:true,
   });

   $(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass('active');
    }
    else {
        $('.navbar').removeClass('active');
    }
});



  let observer = new IntersectionObserver(entries => {
      function counter(id, start, end, duration) {
        let obj = document.querySelector(id),
         current = start,
         range = end - start,
         increment = end > start ? 1 : -1,
         step = Math.abs(Math.floor(duration / range)),
         timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current == end) {
           clearInterval(timer);
          }
         }, step);
       }
   counter(".counter1", 0, 17, 3000);
      counter(".counter2", 0, 56, 3000);
      counter(".counter3", 0, 300, 3000);
      counter(".counter4", 0, 6, 3000);
      counter(".counter5", 0, 155, 3000);
      counter(".counter6", 0, 14, 3000);
   });
   
   observer.observe(target);

//    gsap.registerPlugin(ScrollTrigger);
//    gsap.registerPlugin(ScrollToPlugin);
// //    gsap.registerPlugin(SplitText);
// //    gsap.registerPlugin(ScrollSmoother);
   
//    console.clear();
   
//    select = e => document.querySelector(e);
//    selectAll = e => document.querySelectorAll(e);
   
//    const stage = select('.stage');
//    const slides = selectAll(".slide");





// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let panels = gsap.utils.toArray(".panel"),
//     observer = ScrollTrigger.normalizeScroll(true),
//     scrollTween;

// // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
// document.addEventListener("touchstart", e => {
//   if (scrollTween) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// }, {capture: true, passive: false})

// function goToSection(i) {
//   scrollTween = gsap.to(window, {
//     scrollTo: {y: i * innerHeight, autoKill: false},
//     onStart: () => {
//       observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
//       observer.enable();
//     },
//     duration: 1,
//     onComplete: () => scrollTween = null,
//     overwrite: true
//   });
// }

// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top bottom",
//     end: "+=199%",
//     onToggle: self => self.isActive && !scrollTween && goToSection(i)
//   });
// });

// // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
// ScrollTrigger.create({
//   start: 0, 
//   end: "max",
//   snap: 1 / (panels.length - 1)
// })


