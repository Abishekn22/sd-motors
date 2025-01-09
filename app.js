let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

let autoSlideInterval;

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    showSlider('next');
  }, 5500); // Change slide every 3 seconds
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

nextButton.onclick = function(){
    showSlider('next');
    stopAutoSlide(); // Reset auto-slide on manual navigation
    startAutoSlide();
}
prevButton.onclick = function(){
    showSlider('prev');
    stopAutoSlide(); // Reset auto-slide on manual navigation
    startAutoSlide();
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        // Append the first item to the end for a smooth transition
        listHTML.appendChild(items[0]); 
        carousel.classList.add('next');
    }else{
        // Prepend the last item to the beginning for a smooth transition
        listHTML.prepend(items[items.length - 1]); 
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 800) // Reduced timeout for smoother experience
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        stopAutoSlide(); // Stop auto-slide when details are shown
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
    startAutoSlide(); // Resume auto-slide when back from details
}

startAutoSlide(); // Start auto-sliding initially