// ===== CONFIGURACIÓN DE SLIDESHOWS =====
let slideIndex = 1;
let slideIndexR = 1;

// Inicializar slideshows
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    showSlidesR(slideIndexR);
});

// ===== GALERÍA PRINCIPAL =====
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// ===== GALERÍA REVIEWS =====
function plusSlidesR(n) {
  showSlidesR(slideIndexR += n);
}

function currentSlideR(n) {
  showSlidesR(slideIndexR = n);
}

function showSlidesR(n) {
  let i;
  let slidesR = document.getElementsByClassName("mySlides-r");
  let dotsR = document.getElementsByClassName("dot-r");
  if (n > slidesR.length) {slideIndexR = 1}    
  if (n < 1) {slideIndexR = slidesR.length}
  for (i = 0; i < slidesR.length; i++) {
    slidesR[i].style.display = "none";  
  }
  for (i = 0; i < dotsR.length; i++) {
    dotsR[i].className = dotsR[i].className.replace(" active-r", "");
  }
  slidesR[slideIndexR-1].style.display = "block";  
  dotsR[slideIndexR-1].className += " active-r";
}
