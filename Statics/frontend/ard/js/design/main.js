(function($) {
  $(function() {
    /*  block "You may be interested"  */
    $('.product-interesting .items').owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      margin: 0,
      nav: true,
      responsive:{
        768:{
          items: 2
        }
      },
    });
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

    /*  block "Get advice"  */
    $('.design-order-step').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/50)) + '%');
      });
    });
    
    $('.design-brands .brands').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      responsive:{
        450:{
          items: 2,
          margin: 20
        },
        768:{
          autoWidth:true,
          items: 4,
          margin: 20
        }
      },
    });
    
    /*  Block "Prices for design"  */
    $('.prices-for-design').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.find('.back').offset().top;
        _el.find('.back').css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/60)) + '%');
        if(!_el.hasClass('view'))
        {
          if(isScrolledIntoView(_el))
          {
            _el.addClass('view');
          }
        }
      });
    });
    /*  block "What we do"  */
    $('.design-what-are-we-doing .items').each(function(){
      var _items = $(this);
      $(this).children('li').each(function(){
        var _li = $(this);
        $(this).children('span').on('click', function(){
          if($(window).width() < 768 && _li.hasClass('open'))
          {
            _li.removeClass('open');
          }
          else
          {
            _items.children('li').removeClass('open');
            _li.addClass('open');
          }
        });
      });
      $(window).on('scroll ready load resize', function(){
        if(!_items.hasClass('view'))
        {
          if(isScrolledIntoView(_items))
          {
            _items.addClass('view');
            if($(window).width() >= 992)
            {
              _items.find('li').eq(0).find('span').trigger('click');
            }
          }
        }
      });
    });
    /*  block "Engineering design"  */
    $('.engineering-design').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/40)) + '%');
      });
    });
  });
})(jQuery);