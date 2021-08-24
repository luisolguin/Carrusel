var slideIndex = 0;
var timeoutHandle;
var slideTime=3000;

//showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  window.clearTimeout(timeoutHandle);
  timeoutHandle=window.setTimeout(showSlides, slideTime); // Change image every 2 seconds
}


showSlidesM(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlidesM(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesM(slideIndex = n);
}

function showSlidesM(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
  window.clearTimeout(timeoutHandle);
  timeoutHandle=setTimeout(showSlides, slideTime);
}
