let callButtonOpen = document.querySelector('.menu__contacts__icons-chat')
let callMenu = document.querySelector('.menu__popup-feedback')
let callButtonClose = document.querySelector('.menu__popup-feedback__close')

callButtonOpen.addEventListener('click', function(){
    callButtonOpen.classList.toggle('active');
    callMenu.classList.toggle('active');
})

callButtonClose.addEventListener('click', function(){
    callButtonClose.classList.toggle('active');
    callMenu.classList.toggle('active');
})