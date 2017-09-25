(function($) {
  $(function() {
    
    /*  block "Advantages of a smart home"  */
    $('.cost-smart-house').each(function(){
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
    
    /*  block "Automation of commercial premises"  */
    var owlAcp = $('.automation-commercial-premises .owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      dots: false,
      responsive:{
        768:{
          nav: true,
        }
      },
      onInitialized: function(){
        var _height = this.$element.find('.owl-item.active').find('.capt').outerHeight();
        this.$element.find('.owl-prev').css('bottom', _height);
        this.$element.find('.owl-next').css('bottom', _height);
      },
      onTranslated: function(){
        var _height = this.$element.find('.owl-item.active').find('.capt').outerHeight();
        this.$element.find('.owl-prev').css('bottom', _height);
        this.$element.find('.owl-next').css('bottom', _height);
      }
    });
    
    /*  block "Advantages of a smart home"  */
    $('.benefits-smart-home').each(function(){
      var _el = $(this);
      var _items = $(this).find('.items');

      _items.children('li').each(function(){
        var _li = $(this);
        $(this).children('.title').on('click', function(){
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
        if(!_el.hasClass('view'))
        {
          if(isScrolledIntoView(_el))
          {
            _el.addClass('view');
          }
        }
      });
    });
    
    /*  block "Scheme of work"  */
    $('.work-scheme').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.find('.back').offset().top;
        _el.find('.back').css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/40)) + '%');
        if(!_el.hasClass('view'))
        {
          if(isScrolledIntoView(_el))
          {
            _el.addClass('view');
          }
        }
      });
    });
    
    /*  block "How to manage a smart house"  */
    $('.how-manage-smart-home .owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true
    });
    $('.how-manage-smart-home .brands').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      responsive:{
        768:{
          autoWidth:true,
          items: 4,
          margin: 20
        }
      },
    });
    $('.how-manage-smart-home').each(function(){
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
    
    /*  block "Smart House"  */
    $('.smart-house-header').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/40)) + '%');
      });
    });
    
    /*  block "Get advice"  */
    $('.get-advice').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/50)) + '%');
        if(!_el.hasClass('view'))
        {
          if(isScrolledIntoView(_el))
          {
            _el.addClass('view');
          }
        }
      });
    });
    
    /*  block "Why do you need a smart home"  */
    $('.why-smart-home').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        if(!_el.hasClass('view'))
        {
          if(isScrolledIntoView(_el))
          {
            _el.addClass('view');
            _el.find('.fadeInLeft').addClass('animated');
            _el.find('.fadeInRight').addClass('animated');
          }
        }
      });
    });
    
    /*  block "Smart home features"  */
    $('.features-smart-home').each(function(){
      var _el = $(this);

      var _items = $(this).find('.items');
      _items.children('li').each(function(){
        var _li = $(this);
        $(this).children('.name').on('click', function(){
          if($(window).width() < 768)
          {
            if(_li.hasClass('open'))
            {
              _items.children('li').removeClass('open');
            }
            else
            {
              _items.children('li').removeClass('open');
              _li.addClass('open');
            }
          }
          else
          {
            _items.children('li').removeClass('open');
            _li.addClass('open');
          }
        });
      });
      $(window).on('scroll ready load resize', function(){
        if(!_el.hasClass('view'))
        {
          if(isScrolledIntoView(_el))
          {
            if($(window).width() >= 768)
            {
              _items.find('li').eq(0).find('.name').trigger('click');
            }
            _el.addClass('view').find('.items').addClass('view');
            _el.find('.fadeInLeft').removeClass('fadeInLeft').addClass('animated fadeInLeft');
          }
        }
      });
    });
  });
})(jQuery);