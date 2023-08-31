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

(function () {
    var scroll = new LocomotiveScroll();
})();
gsap.registerPlugin(ScrollTrigger);






let mm = gsap.matchMedia(),
    breakPoint = 576;

mm.add({

  // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
  isDesktop: `(min-width: ${breakPoint}px)`,
  isMobile: `(max-width: ${breakPoint - 1}px)`,
  reduceMotion: "(prefers-reduced-motion: reduce)"

}, (context) => {

  // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
  let { isDesktop, isMobile, reduceMotion } = context.conditions;

  gsap.to(".box", {
    rotation: isDesktop ? 360 : 180, // spin further if desktop
    duration: reduceMotion ? 0 : 2 // skip to the end if prefers-reduced-motion
  });

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
  
// home banner
let home1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel--about',
        start:isDesktop ? 'top 800px' : 'top 400px' ,
        end:'bottom =+300px',
        scrub:1,
    }
});
let home2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel--about',
        start:isDesktop ? 'top 800px' : 'top 400px' ,
        end:'bottom =+300px',
        scrub:1,
    }
});

home1.to('.banner__heading--right',{
    x:isDesktop ? '-300px': '-100px' ,
    opacity:0,
    duration:1,
})  
home2.to('.banner__heading--left',{
    x:isDesktop ? '300px': '100px' ,
    opacity:0,
    duration:1,
})


// about
let about1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-about',
        start:isDesktop ? 'top 800px' : 'top 380px' ,
        end:isDesktop ? 'bottom =+300px' : 'bottom end' ,
        scrub:1,
    }
});

let about2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-about',
        start:isDesktop ? 'top 800px' : 'top 380px' ,
        end:isDesktop ? 'bottom =+300px' : 'bottom end' ,
        scrub:1,
    }
});

about1.to('.banner__heading--right1',{
    x:isDesktop ? '-300px': '-100px' ,
    opacity:0,
    duration:1,
})  
about2.to('.banner__heading--left1',{  
    x:isDesktop ? '300px': '100px' ,
    opacity:0,
    duration:1,
})


// services
let services1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-services',
        start:isDesktop ? 'top 550px' : 'top 450px' ,
        end:isDesktop ? 'bottom =+300px' : 'bottom end' ,
        scrub:1,
    }
});

let services2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-services',
        start:isDesktop ? 'top 550px' : 'top 450px' ,
        end:isDesktop ? 'bottom =+300px' : 'bottom end' ,
        scrub:1,
    }
});

services1.to('.banner__heading--right2',{
    x:isDesktop ? '-300px': '-100px' ,
    opacity:0,
    duration:1,
})  
services2.to('.banner__heading--left2',{
    x:isDesktop ? '300px': '100px' ,
    opacity:0,
    duration:1,
})

// case
let case1 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-case',
        start:isDesktop ? 'top 550px' : 'top 450px' ,
        end:isDesktop ? 'bottom =+300px' : 'bottom end' ,
        scrub:1,
    }
});

let case2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-case',
        start:isDesktop ? 'top 550px' : 'top 450px' ,
        end:isDesktop ? 'bottom =+300px' : 'bottom end' ,
        scrub:1,
    }
});

case1.to('.banner__heading--right3',{
    x:isDesktop ? '-300px': '-100px' ,
    opacity:0,
    duration:1,
})  
case2.to('.banner__heading--left3',{
    x:isDesktop ? '300px': '100px' ,
    opacity:0,
    duration:1,
})
// let panelContact = document.querySelector('.panel--contact')
// ScrollTrigger.create({
//     trigger: panelContact,
//     start: () => panelContact.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
//     pin: true, 
//     pinSpacing: false 
//   });



  return () => { 
    // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
    // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
  }
}); 
var tabEl = document.querySelectorAll('button[data-bs-toggle="tab"]')
// console.log(tabEl);
tabEl.forEach(elm => {
    elm.addEventListener('show.bs.tab', function (event) {
        console.log('amrit');
        console.log(  event.target);
        console.log( event.relatedTarget);
      event.target // newly activated tab
      event.relatedTarget // previous active tab
    })
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
