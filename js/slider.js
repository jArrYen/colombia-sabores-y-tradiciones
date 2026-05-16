let currentIndex = 0;

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;

let interval = setInterval(autoSlide, 9000);

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function moveSlide(direction) {
    currentIndex = currentIndex + direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlider();

    resetInterval(); /*Resetear los intérvalos de las imágenes*/
}
function autoSlide() {
    moveSlide(1);
}
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000);
}
