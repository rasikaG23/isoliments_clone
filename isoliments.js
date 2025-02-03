console.log('Isoliments.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides'); // The container holding all the slides
    const slideCount = document.querySelectorAll('.slides h2').length; // Total number of slides
    const prevButton = document.getElementById('prev'); // Previous button
    const nextButton = document.getElementById('next'); // Next button
    let currentIndex = 0; // Current slide index

    // Function to show the current slide
    function showSlide(index) {
        if (index < 0) {
            currentIndex = slideCount - 1; // Wrap around to the last slide if out of bounds
        } else if (index >= slideCount) {
            currentIndex = 0; // Wrap around to the first slide if out of bounds
        } else {
            currentIndex = index; // Update to the new index
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide transition
    }

    // Event listeners for manual navigation
    prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

    // Auto-slide functionality (set to slide every 3 seconds)
    setInterval(() => showSlide(currentIndex + 1), 3000);
});
