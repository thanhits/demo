(function($) {
  $(function() {
    if(device.tablet() == false && device.mobile() == false && $('body').hasClass('paralax'))
    {
      var allheight = 0;
      var zIndex = 10;
      $('body.paralax').height($('body.paralax').height());
      $('.carousel-header-product, .idea-concept, .planning-solution, .kitchen-and-living-room, .product-share, .product-order-step, .product-footer-carousel, .footer').each(function(){
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
      $('.carousel-header-product, .idea-concept, .planning-solution, .kitchen-and-living-room, .product-share, .product-order-step, .product-footer-carousel, .footer').each(function(){
        $(this).addClass('paralax-element');
      });
      $(window).on('scroll ready load resize', function(){
        var tmpHeight = $('.header').outerHeight();
        $('.carousel-header-product, .idea-concept, .planning-solution, .kitchen-and-living-room, .product-share, .product-order-step, .product-footer-carousel, .footer').each(function(){
          
          if($(this).hasClass('footer'))
          {
            //console.log($(window).scrollTop(), $(window).height(), tmpHeight);
            if(($(window).scrollTop()+$(window).height()) > tmpHeight)
            {
              $(this).css('z-index', 15);
            }
            else
            {
              $(this).css('z-index', 9);
            }
          }
          else if($(this).hasClass('carousel-header-product') || $(this).hasClass('planning-solution') || $(this).hasClass('product-footer-carousel') || $(this).hasClass('kitchen-and-living-room'))
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