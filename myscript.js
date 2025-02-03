// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-barra";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

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

// Slideshow Certifi
let slideIndexC = 1;
showSlidesC(slideIndexC);

function plusSlidesC(n) {
  showSlidesC(slideIndexC += n);
}

function currentSlideC(n) {
  showSlidesC(slideIndexC = n);
}

function showSlidesC(n) {
  let i;
  let slidesC = document.getElementsByClassName("mySlides-c");
  let dotsC = document.getElementsByClassName("dot-c");
  if (n > slidesC.length) {slideIndexC = 1}    
  if (n < 1) {slideIndexC = slidesC.length}
  for (i = 0; i < slidesC.length; i++) {
    slidesC[i].style.display = "none";  
  }
  for (i = 0; i < dotsC.length; i++) {
    dotsC[i].className = dotsC[i].className.replace(" active-c", "");
  }
  slidesC[slideIndexC-1].style.display = "block";  
  dotsC[slideIndexC-1].className += " active-c";
}


// Slideshow REVIEWS
let slideIndexR = 1;
showSlidesR(slideIndexR);

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

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  //var captionText = document.getElementById("caption");
  //captionText.innerHTML = element.alt;
}

