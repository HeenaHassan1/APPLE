const burger = document.getElementsByClassName('burger')[0]
const menu = document.getElementsByClassName('menu')[0]



burger.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})