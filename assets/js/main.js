(function ($) {
  "use strict";



  $(document).ready(function() {

    // Query for Preloader 
    $("#preloader").delay(1800).fadeOut("slow");

      // Query For Mobile Menu Activation 
      $('.toggle-bar').on('click', function () {
          $('.mobile-menu-wrapper, .overlay').addClass('show');
      })
      $('.close-mobile-menu, .overlay , .mobile-menu a').on('click', function () {
          $('.mobile-menu-wrapper, .overlay').removeClass('show');
      })


    // Query For Header Sticky 
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){  
          $('header').addClass("sticky");
        }
        else{
          $('header').removeClass("sticky");
        }
      });

    $('.hero-bg-slider-active').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
        })

        $('#nav').onePageNav();


         // Action Aos Jquery Plugins 
        AOS.init({
          disable:'phone',
          duration: 800
        });



         //   Query For scroll back to top 
  var back = $('.back-to-top');
  back.on('click', function () {
      $('html, body').animate({
          scrollTop: 0,
      }, 900);
  })
  $(window).on('scroll', function () {
      var self = $(this),
          height = self.height(),
          top = self.scrollTop();
      if (top > height) {
          back.addClass('visible');
      } else {
          back.removeClass('visible');
      }
  })
    
        
  });



     
})(jQuery); // End line