// Carousel
// Clients Section
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
  },
});


// Reveal the content while scroll
// Right to Left Reveal
window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
        }
        else{
        reveals[i].classList.remove('active');
        }
    }
  }

// Left to Right Reveal
window.addEventListener('scroll', reveal1);

  function reveal1(){
    var reveals = document.querySelectorAll('.reveal1');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var reveal1top = reveals[i].getBoundingClientRect().top;
        var reveal1point = 150;

        if(reveal1top < windowheight - reveal1point){
        reveals[i].classList.add('active');
        }
        else{
        reveals[i].classList.remove('active');
        }
    }
  }

// Down to Up Reveal
window.addEventListener('scroll', reveal2);

  function reveal2(){
    var reveals = document.querySelectorAll('.reveal2');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var reveal2top = reveals[i].getBoundingClientRect().top;
        var reveal2point = 150;

        if(reveal2top < windowheight - reveal2point){
        reveals[i].classList.add('active');
        }
        else{
        reveals[i].classList.remove('active');
        }
    }
  }

// Up to Down Reveal
window.addEventListener('scroll', reveal3);

  function reveal3(){
    var reveals = document.querySelectorAll('.reveal3');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var reveal3top = reveals[i].getBoundingClientRect().top;
        var reveal3point = 150;

        if(reveal3top < windowheight - reveal3point){
        reveals[i].classList.add('active');
        }
        else{
        reveals[i].classList.remove('active');
        }
    }
  }


// Top Scroll Button
// Get the Button
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Page loading animation
  $(window).on('load', function() {
  $('#js-preloader').addClass('loaded');
  });
