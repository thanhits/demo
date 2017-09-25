(function($) {
    $(function() {

      /*  Block "Automation and" Smart Home ""  */
      $('.automation-and-smart-house .blocks').each(function(){
        var _el = $(this);
        $(window).on('scroll ready load resize', function(){
          if(!_el.hasClass('view'))
          {
            if(isScrolledIntoView(_el))
            {
              _el.addClass('view');
            }
          }
        });
      });
      
    });
  })(jQuery);