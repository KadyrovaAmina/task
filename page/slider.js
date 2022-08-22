const btnNext = document.querySelector(".btn-next")
const btnPrev = document.querySelector(".btn-prev")
const slider = document.querySelector(".slider-wrapper")
const sliderWrapper = document.querySelector(".slider-wrapper")
const slides = Array.from(sliderWrapper.children)
const dotsAll = document.querySelector(".dots")
const dots = Array.from(dotsAll.children)
let current = 0;
let firstSlide = slides[0].cloneNode(true)
let lastSlide = slides[slides.length - 1].cloneNode(true)
const SLIDE_WIDTH = 500
let slidesLength = slides.length
let changePosition = false

function updateSlide (thisSlide) {
        for(item of slides){
            item.classList.remove("active");
        }
        slides[thisSlide].classList.add("active");
}

function currentDot (thisSlide) {
    for(item of dots){
        item.classList.remove("active");
    }
    dots[thisSlide].classList.add("active");
}

const activeCurrentSlide = (index) => {
    updateSlide(index);
    currentDot (index);
}

function nextSlide () {
    // const currentSlide = getCurrentSlide()
    // const nextSlide = currentSlide.nextElementSibling
    if(current == slides.length - 1){
        current = 0;
        activeCurrentSlide(current);
    }else{
        current++;
        activeCurrentSlide(current);
    }
    // shiftRight(nextSlide)
    // updateSlide(slides.indexOf(nextSlide))
}

function prevSlide () {
    if(current == 0){
        current = slides.length - 1;
        activeCurrentSlide(current);
    }else{
        current--;
        activeCurrentSlide(current);
    }
}

dots.forEach((item, thisDot) => {
    item.addEventListener('click', () => {
        current = thisDot;
        activeCurrentSlide(current);
    })
})

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

// const getCurrentSlide = () => {
//     return document.querySelector(`.active`)
// }

// console.log(`${getCurrentSlide()} element`, slides[0], getCurrentSlide() === slides[0])

// let currentPixels = 0
// function shiftRight(targetSlide){
//     targetSlideIndex = slides.indexOf(targetSlide)
//     let path = currentPixels - (SLIDE_WIDTH) 
//     blockEvents()

//     if(current === -1){
//         slider.style.left = -(slidesLength * slideSize) + `px`;
//         current = slides.length - 1;
//     }
//     if(current === slidesLength){
//         slider.style.left = -(1 * slideSize) + `px`;
//         current = 0;
//     }
//     changePosition = true;
//     const timer = setInterval(() => {
//         if(path === currentPixels){
//             clearInterval(timer);
//             unBlockEvents();
//         }
//         slider.style.left = `${currentPixels}px`
//         currentPixels -= 10
//         console.log(path)
//     }, 10)
// }

// console.log(getCurrentSlide(), Object.entries(getCurrentSlide()) )

// const blockEvents = () => {
//     btnPrev.removeEventListener("click", prevSlide);
//     btnNext.removeEventListener("click", nextSlide);
// };
  
//   const unBlockEvents = () => {
//     btnPrev.addEventListener("click", prevSlide);
//     btnNext.addEventListener("click", nextSlide);
// };