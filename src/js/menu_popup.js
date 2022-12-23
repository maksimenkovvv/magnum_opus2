let callButtonOpen = document.querySelector('.menu__media__burger')
let callMenu = document.querySelector('.menu-popup__container')
let callButtonClose = document.querySelector('.menu-popup__close')

callButtonOpen.addEventListener('click', function(){
    callButtonOpen.classList.toggle('active');
    callMenu.classList.toggle('active');
})

callButtonClose.addEventListener('click', function(){
    callButtonClose.classList.toggle('active');
    callMenu.classList.toggle('active');
})