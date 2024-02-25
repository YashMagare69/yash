let slideIndex = 0;
let isAuto = true;
let autoInterval;

showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let captions = document.getElementsByClassName("caption");
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } 
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex].style.display = "block";  
}

function toggleAuto() {
  isAuto = !isAuto;
  if (isAuto) {
    autoInterval = setInterval(plusSlides, 2000, 1); // Change slide every 2 seconds
  } else {
    clearInterval(autoInterval);
  }
}

toggleAuto();






