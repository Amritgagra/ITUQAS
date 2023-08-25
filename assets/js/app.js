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
        start:'top 800px',
        end:'bottom =+300px',
        scrub:1,
    }
});
let home2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel--about',
        start:'top 800px',
        end:'bottom =+300px',
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
        start:'top 800px',
        end:'bottom =+300px',
        scrub:1,
    }
});

let about2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-about',
        start:'top 800px',
        end:'bottom =+300px',
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
        start:'top 550px',
        end:'bottom =+300px',
        scrub:1,
    }
});

let services2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-services',
        start:'top 550px',
        end:'bottom =+300px',
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
        start:'top 550px',
        end:'bottom =+300px',
        scrub:1,
    }
});

let case2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.panel-banner-case',
        start:'top 550px',
        end:'bottom =+300px',
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
