var slideIndex = 0;
var timeoutHandle;
var slideTime=6000;
(function(){
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("Simple-class");
    for(let i=0;i<slides.length;i++){
      dots[0].innerHTML+='<span class="dot" onclick="currentSlide('+ i+1 +')">Hi</span>';
    }

}

)();
//showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  console.log(dots.length);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //console.log(slideIndex);



  slideIndex=(slideIndex+1)%slides.length;
  dots[slideIndex].className += " active";
  slides[slideIndex].style.display = "block";
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
