

let slider = new Swiper('.brands__list-container',{
    spaceBetween:16,
    slidesPerView: "auto",
    pagination: {
    el: '.swiper-pagination',
    clickable: true
   }
});
window.addEventListener("DOMContentLoaded",() =>{
let width = window.innerWidth;

if(width >= 768){
    slider.destroy();
}
});


let button = document.querySelector('.brands__btn');

button.addEventListener('click',()=>{

let items = document.querySelectorAll('.brands__list-items--hidden');
let content = document.querySelector('.brands__span');
let img = document.querySelector('.brands__btn-img');

for (i = 0;i < items.length;i++) {
items[i].classList.toggle('brands__list-items--visible');

if(items[i].classList.contains('brands__list-items--visible')){
    content.textContent = "Скрыть";
} else {
    content.textContent = "Показать всё"; 
}
img.classList.toggle('brands__btn-img--rotate');
}
});

