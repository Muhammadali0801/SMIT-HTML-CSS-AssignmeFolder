// script.js
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth; // Get the width of a slide
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`; // Move slides

    // Update active class for indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Add event listeners for indicators
indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.dataset.index);
        showSlide(currentSlide);
    });
});

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
