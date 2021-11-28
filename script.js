const contactBtn = document.querySelector('.intro__content-button');
const hamburgerBtn = document.querySelector('.hamburger')
const overlay = document.querySelector('.page');


contactBtn.addEventListener('click', e =>{
    location.href='#contact';
})
hamburgerBtn.addEventListener('click', e =>{
    hamburgerBtn.classList.toggle("is-active")
    hamburgerBtn.nextElementSibling.classList.toggle("menu__content_active")
    overlay.classList.toggle('overlay');
})


