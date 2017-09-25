(function($) {
    $(function() {

      $('.gallery-completed-projects').each(function(){
        $(this).find('.owl-carousel').each(function(){
          $(this).owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            margin: 0
          });
        });
      });

    });
  })(jQuery);