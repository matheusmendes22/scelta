//carrossel de marcas home
$(document).ready(function(){
    $('.science__carousel').owlCarousel({
        loop:true,
        margin:15,
        autoplay: true,
        nav:false,
        dots: true,
        dotsContainer: '.science__dots',
        responsive:{
            0:{
                items:2.5
            },
            1000:{
                items:3
            }
        }
    });
    $('.area__carousel').owlCarousel({
        loop:true,
        margin:15,
        autoplay: true,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1.5
            },
            1000:{
                items:2.3
            }
        }
    });
    wow = new WOW(
        {
        boxClass:     'animate',     
        animateClass: 'animated',
        offset:       0,         
        mobile:       true,      
        live:         true       
        }
      )
      wow.init();
})

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

// setas carrossel mobile
function changeArrow(){
    let slides = document.querySelectorAll('.reasons__carousel .item') && document.querySelectorAll('.admin__carousel .item')
    let nextSlide = document.querySelector('.owl_controls .owl-next')
    let prevSlide = document.querySelector('.owl_controls .owl-prev')
    switch(slides){
        case 0 :
            prevSlide.classList.add('disabled')
            break;
        case 3 : 
            nextSlide.classList.add('disabled')
    }
}


