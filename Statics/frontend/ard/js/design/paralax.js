(function($) {
  $(function() {
    if(device.tablet() == false && device.mobile() == false && $('body').hasClass('paralax'))
    {
      var allheight = 0;
      var zIndex = 10;
      $('body.paralax').height($('body.paralax').height());
      $('.engineering-design, .design-what-are-we-doing, .prices-for-design, .automation-and-smart-house, .design-brands, .design-important, .design-order-step, .product-interesting, .footer').each(function(){
        if($(this).hasClass('footer'))
        {
          $(this).css('bottom', 20);
          $(this).css('z-index', 9);
        }
        else
        {
          $(this).css('top', $(this).position().top);
          $(this).css('z-index', zIndex++);
        }
      });
      $('.engineering-design, .design-what-are-we-doing, .prices-for-design, .automation-and-smart-house, .design-brands, .design-important, .design-order-step, .product-interesting, .footer').each(function(){
        $(this).addClass('paralax-element');
      });
      $(window).on('scroll ready load resize', function(){
        var tmpHeight = $('.header').outerHeight();
        $('.engineering-design, .design-what-are-we-doing, .prices-for-design, .automation-and-smart-house, .design-brands, .design-important, .design-order-step, .product-interesting, .footer').each(function(){
          
          if($(this).hasClass('footer'))
          {
            //console.log($(window).scrollTop(), $(window).height(), tmpHeight);
            if(($(window).scrollTop()+$(window).height()) > tmpHeight)
            {
              $(this).css('z-index', 16);
            }
            else
            {
              $(this).css('z-index', 9);
            }
          }
          else if($(this).hasClass('product-interesting'))
          {
            $(this).css('top', tmpHeight);
            $(this).css('transform', 'translate3d(0px, -'+$(window).scrollTop()+'px, 0px)');
          }
          else
          {
            $(this).css('top', tmpHeight);
            if($(window).height() < $(this).outerHeight())
            {
              if($(window).scrollTop() < ($(this).outerHeight() - $(window).height() + tmpHeight))
              {
                $(this).css('transform', 'translate3d(0px, -'+$(window).scrollTop()+'px, 0px)');
              }
              else
              {
                $(this).css('transform', 'translate3d(0px, -'+($(this).outerHeight() - $(window).height() + tmpHeight)+'px, 0px)');
              }
            }
            else
            {
              if($(window).scrollTop() < (tmpHeight - $('.header').outerHeight()))
              {
                $(this).css('transform', 'translate3d(0px, -'+$(window).scrollTop()+'px, 0px)');
              }
              else
              {
                $(this).css('transform', 'translate3d(0px, -'+(tmpHeight - $('.header').outerHeight())+'px, 0px)');
              }
            }
          }
          tmpHeight += $(this).outerHeight();
        });
        tmpHeight += 20;
        $('body.paralax').height(tmpHeight);
      });
    }
  });
})(jQuery);