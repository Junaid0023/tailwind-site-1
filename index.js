const navlinks = document.querySelector(".navlinks");
const navBtn = document.querySelector(".navBtn");



navBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('hidden')
   


})


// ============SWIPJS-----------------

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1, // Default for small screens
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        640: {
          slidesPerView: 2, // Show 2 slides on screens ≥ 640px
        },
        1024: {
          slidesPerView: 3, // Show 3 slides on screens ≥ 1024px
        },
      },
    });
  });





// =============COPYRIGHT YEAR ====================

document.getElementById('year').textContent = new Date().getFullYear();

