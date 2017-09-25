(function($) {
  $(function() {
    if(device.tablet() == false && device.mobile() == false && $('body').hasClass('paralax'))
    {
      var allheight = 0;
      var zIndex = 10;
      $('body.paralax').height($('body.paralax').height());
      $('.carousel-header-index, .what-are-we-doing, .completed-projects, .watch-all-projects, .how-do-we-create-design-projects, .first-step, .composition-project, .additional-services, .advantages, .order-step, .product-footer-carousel, .footer').each(function(){
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
      $('.carousel-header-index, .what-are-we-doing, .completed-projects, .watch-all-projects, .how-do-we-create-design-projects, .first-step, .composition-project, .additional-services, .advantages, .order-step, .product-footer-carousel, .footer').each(function(){
        $(this).addClass('paralax-element');
      });
      $(window).on('scroll ready load resize', function(){
        var tmpHeight = $('.header').outerHeight();
        $('.carousel-header-index, .what-are-we-doing, .completed-projects, .watch-all-projects, .how-do-we-create-design-projects, .first-step, .composition-project, .additional-services, .advantages, .order-step, .product-footer-carousel, .footer').each(function(){
          
          if($(this).hasClass('footer'))
          {
            //console.log($(window).scrollTop(), $(window).height(), tmpHeight);
            if(($(window).scrollTop()+$(window).height()) > tmpHeight)
            {
              $(this).css('z-index', 19);
            }
            else
            {
              $(this).css('z-index', 9);
            }
          }
          else if($(this).hasClass('carousel-header-index') || $(this).hasClass('completed-projects') || $(this).hasClass('composition-project') || $(this).hasClass('additional-services') || $(this).hasClass('product-footer-carousel,'))
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
      $('.composition-project .items').each(function(){
        $(this).children('div.item').each(function(){
          $(this).children('div').eq(0).on('click', function(){
            setTimeout(function(){
              $(window).trigger('resize');
            }, 500);
            return false;
          });
        });
      });
      $('.what-are-we-doing .items').each(function(){
        $(this).children('li').each(function(){
          $(this).children('span').on('click', function(){
            setTimeout(function(){
              $(window).trigger('resize');
            }, 500);
            return false;
          });
        });
      });
      $('.how-do-we-create-design-projects .items').each(function(){
        $(this).children('li').each(function(){
          $(this).children('div').eq(0).on('click', function(){
            setTimeout(function(){
              $(window).trigger('resize');
            }, 500);
            return false;
          });
        });
      });
    }
  });
})(jQuery);