const carousel = document.querySelector('#carousel');
const leftBtn = document.querySelector('.fa-arrow-left');
const rightBtn = document.querySelector('.fa-arrow-right');

const lastImage = carousel.lastElementChild;
const lastImageEnd = lastImage.offsetLeft + lastImage.offsetWidth;
const carouselEnd = carousel.offsetWidth - carousel.parentElement.offsetWidth;

let position = 0;
let transition = 134;

rightBtn.addEventListener('click', () => {
    if (lastImageEnd + position > carousel.parentElement.offsetWidth) {
        position -= transition;
        carousel.style.transform = `translateX(${position}px)`;
    }
});

leftBtn.addEventListener('click', () => {
    position += transition;
    position = Math.min(position, 0);
    carousel.style.transform = `translateX(${position}px)`;
});