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
(function () {
    var scroll = new LocomotiveScroll();
})();
gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");
// we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    pinSpacing: false 
  });
});

// ScrollTrigger.create({
//   snap: {
//     snapTo: (progress, self) => {
//       let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
//           snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
//       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
//     },
//     duration: 0.5
//   }
// });

// home banner
let home1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel--about',
        start:'top 800px',
        end:'bottom end',
        scrub:1,
    }
});
let home2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel--about',
        start:'top 800px',
        end:'bottom end',
        scrub:1,
    }
});

home1.to('.banner__heading--right',{
    x:-300,
    opacity:0,
    duration:1,
})  
home2.to('.banner__heading--left',{
    x:300,
    opacity:0,
    duration:1,
})


// about
let about1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-about',
        start:'top center',
        end:'bottom center',
        scrub:1,
    }
});

let about2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-about',
        start:'top center',
        end:'bottom center',
        scrub:1,
    }
});

about1.to('.banner__heading--right1',{
    x:-300,
    opacity:0,
    duration:1,
})  
about2.to('.banner__heading--left1',{  
    x:300,
    opacity:0,
    duration:1,
})


// services
let services1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-services',
        start:'top 800px',
        end:'bottom center',
        scrub:1,
    }
});

let services2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-services',
        start:'top 800px',
        end:'bottom center',
        scrub:1,
    }
});

services1.to('.banner__heading--right2',{
    x:-300,
    opacity:0,
    duration:1,
})  
services2.to('.banner__heading--left2',{
    x:300,
    opacity:0,
    duration:1,
})

// case
let case1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-case',
        start:'top 800px',
        end:'bottom center',
        scrub:1,
    }
});

let case2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-case',
        start:'top 800px',
        end:'bottom center',
        scrub:1,
    }
});

case1.to('.banner__heading--right3',{
    x:-300,
    opacity:0,
    duration:1,
})  
case2.to('.banner__heading--left3',{
    x:300,
    opacity:0,
    duration:1,
})



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
