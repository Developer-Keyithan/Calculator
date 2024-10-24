let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const backgroundDiv = document.getElementById('background-fade');

// Background images for each slide
const backgroundImages = [
    'url(Assets/img1.jpg)', // Background image 1
    'url(Assets/img2.jpg)', // Background image 2
    'url(Assets/img3.jpg)'  // Background image 3
];

// Show slide and background change function
function showSlide(i) {
    if (i >= slides.length) {
        currentSlide = 0;
    } else if (i < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = i;
    }

    // Change background and slide simultaneously
    backgroundDiv.style.opacity = '0'; // Fade out background

    setTimeout(() => {
        // Change background image without delay
        backgroundDiv.style.backgroundImage = backgroundImages[currentSlide];
        backgroundDiv.style.opacity = '1'; // Fade in background
    }, 500); // Keep the background fade duration

    // Simultaneously translate the slide
    document.getElementById('slider').style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Arrow key navigation functions
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Listen for arrow key presses
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();  // Move to the next slide if right arrow is pressed
    } else if (event.key === 'ArrowLeft') {
        prevSlide();  // Move to the previous slide if left arrow is pressed
    }
});
