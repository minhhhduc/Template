$(document).ready(function(){
    $('.sub-menu').parent('li').addClass('has-child');
});
const listImage = document.querySelector('.list-image');
const imgs = document.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');


let curent = 0;
let check = true;
let checkSecond = true;
let length =  imgs.length - 8;
const handleChangSlide = () => {
    if (check) curent ++;
    else curent --;
    if (curent >= length) {
        check = false;
        curent = length
    }
    
    else if(curent <= 0) {
        check = true;
        curent = 0;
    }
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${curent * width * -1}px)`;

}

setInterval(() => handleChangSlide(), 5000)