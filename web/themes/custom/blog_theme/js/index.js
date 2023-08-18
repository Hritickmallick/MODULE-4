(function ($, Drupal, once) {
    Drupal.behaviors.myModuleBehavior = {
      attach: function (context, settings) {
        once('html', context).forEach(function (element) {
          // Apply the myCustomBehaviour effect to the elements only once.
          $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
            dots: true,
            arrows: true,
            prevArrow:'<i class="fa-solid fa-arrow-left prev-arrow arrow" style="display: none;"></i>',
            nextArrow: '<i class="fa-solid fa-angle-down next-arrow arrow"></i>',
          
          });
        });
      }
    };
  })(jQuery, Drupal, once);