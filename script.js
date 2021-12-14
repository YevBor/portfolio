const contactBtn = document.querySelector('.intro__content-button');
const hamburgerBtn = document.querySelector('.hamburger')
const overlay = document.querySelector('.menu');
const backContent = document.querySelector('.header__hamburger-menu');


contactBtn.addEventListener('click', e =>{
    location.href='#contact';
})
hamburgerBtn.addEventListener('click', e =>{
    hamburgerBtn.classList.toggle("is-active")
    hamburgerBtn.nextElementSibling.classList.toggle("menu__content_active")
    overlay.classList.toggle('overlay');
    backContent.style.height = "30%"
})


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


