// theme.js – Custom JavaScript

console.log('Chaithanya Theme JS loaded.');

// Example: Scroll to top on page load
document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
});

// Optional: Auto start testimonial carousel (if not using Bootstrap auto)
const carousel = document.querySelector('#testimonialCarousel');
if (carousel && typeof bootstrap !== 'undefined') {
  new bootstrap.Carousel(carousel, {
    interval: 5000,
    ride: 'carousel'
  });
}
