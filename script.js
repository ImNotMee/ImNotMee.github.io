(function() {
    
    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);
    
    function frame() {
        if (loading == 100) {
            clearInterval(id);
            window.open("welcome.html", "self");
        } else {
            loading = loading +1;
            if (loading == 90) {
                preload.style.animation = "fadeout 1s ease";
            }
        }
    } 
})();

// Project
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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
}