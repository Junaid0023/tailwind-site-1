const navlinks = document.querySelector(".navlinks");
const navBtn = document.querySelector(".navBtn");



navBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('hidden')
   


})

document.getElementById('year').textContent = new Date().getFullYear();

