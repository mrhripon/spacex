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


  let rev = $('.rev_slider');
  let next, prev;
  rev.on('init', function(event, slick, currentSlide) {
    let cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      let cur = $(slick.$slides[nextSlide]);
      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      next = cur.next(),
      prev = cur.prev();
      prev.prev();
      prev.next();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev');
  });

  rev.slick({
    speed: 1000,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    customPaging: function(slider, i) {
      return '';
    },
    infinite: true
  });




        $('#nav').onePageNav();


         // Action Aos Jquery Plugins 
        AOS.init({
          disable:'phone',
          duration: 800
        });



         //   Query For scroll back to top 
  let back = $('.back-to-top');
  back.on('click', function () {
      $('html, body').animate({
          scrollTop: 0,
      }, 900);
  })
  $(window).on('scroll', function () {
      let self = $(this),
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