const navlinks = document.querySelector(".navlinks");
const navBtn = document.querySelector(".navBtn");



navBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('hidden')
    navlinks.classList.toggle('transform-translate-y-full')

   
   
    // if(navBtn.classList.contains('fa-bars')){
    //     navBtn.classList.remove('fa-bars')
    //     navBtn.classList.add('<fa-x') 
    // }else{
    //     navBtn.classList.remove('fa-x');
    //     navBtn.classList.add('fa-bars');
    // }

    

})

document.getElementById('year').textContent = new Date().getFullYear();

