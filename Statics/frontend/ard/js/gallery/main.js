(function($) {
  $(function() {
    /* block "We liked our work - order a design project" */
    $('.order-step').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/50)) + '%');
      });
    });
    /*  block "Realized projects"  */
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
    /*  block "Studio of Design and Architecture"  */
    $('.gallery-header').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/30)) + '%');
      });
    });
  });
})(jQuery);