let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the first slide and set the carousel to auto-play
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Initialize Google Maps
function initMap() {
    const location = { lat: -34.397, lng: 150.644 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
