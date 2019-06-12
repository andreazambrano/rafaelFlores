

jQuery(function ($) {
   "use strict";

   $('#back-to-top').click(function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });

   $('#back-to-top').tooltip('hide');


   /* Section Slider */
   $('.seobin-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      center: true,
      smartSpeed: 900,
      nav: true,
      dots: false,
   });


});