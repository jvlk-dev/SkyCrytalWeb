// Scroll to top function with smooth behavior
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Show/hide button based on scroll position
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


function scrollToGallery(){
    var element = document.getElementById("Gallery");
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
}

function scrollToAbout(){
    var element = document.getElementById("About");
    element.scrollIntoView({behavior: 'smooth'});
}

window.onload = function() {
    showSlides(1);
  };

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
  let slides = document.getElementsByClassName("slidesPage");
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
