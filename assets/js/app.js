AOS.init();


 let target = document.querySelector(".services__cards-wrapper");
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


  document.addEventListener("DOMContentLoaded", () => {
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
  
   var swiper = new Swiper(".case-slider", {
    autoplay:true,
   });