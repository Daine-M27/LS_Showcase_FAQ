// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   //var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   //for (i = 0; i < dots.length; i++) {
//    // dots[i].className = dots[i].className.replace(" active", "");
//   //}
//   slides[slideIndex-1].style.display = "block";  
//   //dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 10000); // Change image every 2 seconds
// }
//////////////////////////////////////////////////
var slideIndex = 0;
showSlides(slideIndex);
setInterval(plusSlides(slideIndex), 1500);

function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if(slideIndex > slides.length){
    slideIndex = 1;
    showSlides(slideIndex)
  }else{
    showSlides(slideIndex = n+1);
  }
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
      dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot-active";  
}

