const btnScrollTop = document.querySelector('.footer__btn-scroll');
const header = document.querySelector('.header')

btnScrollTop.addEventListener('click', ()=>{
    header.scrollIntoView({block: "center", behavior: "smooth"})
})

//burger menu

const iconMenu = document.querySelector(".menu__icon");
const iconMenuSpan = document.querySelector(".menu__icon > span");
const menuBody = document.querySelector(".header__nav");

iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
});

//footer menu
console.log(window.innerWidth)
if(window.innerWidth <= 960){
    const footerItemTitle = document.querySelectorAll('.footer__item');
    footerItemTitle.forEach(item=>{
        item.addEventListener('click',()=>{
            item.classList.toggle('_open')
            let menu = item.querySelector('.footer__links-list');
            menu.classList.toggle('_open')
        })
    })
}

