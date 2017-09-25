(function($) {
  $(function() {
    /*  block "Materials and technologies"  */
    $('.footer-carousel .owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true
    });
    /*  block "Order design now"  */
    $('.order-step').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/50)) + '%');
      });
    });
    /*  block "Our advantages"  */
    $('.advantages').each(function(){
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
    /*  block "Additional services"  */
    $('.additional-services').each(function(){
      var _as = $(this);
      $(window).on('scroll ready load resize', function(){
        if($(window).width() >= 768)
        {
          var x1 = $(window).scrollTop() + $(window).height(), x2 = _as.offset().top;
          _as.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/50)) + '%');

          _as.find('.left').css('height' , _as.find('.right').outerHeight());
        }
      });
    });
    /*  block "Composition of the design project"  */
    $('.composition-project .items').each(function(){
      var _el = $(this);
      _el.children('div.item').each(function(){
        var _li = $(this);
        $(this).children('div').eq(0).on('click', function(){
          if($(window).width() < 768 && _li.hasClass('open'))
          {
            _li.removeClass('open');
          }
          else
          {
            _el.children('div.item').removeClass('open');
            _li.addClass('open');
          }
          if($(window).width() < 768)
          {
            var _offset = _li.offset();
            $('body,html').animate({
              scrollTop: _offset.top - 40
            });
          }
        });
      });
      $(window).on('scroll ready load resize', function(){
        if(!_el.hasClass('view'))
        {
          if(isScrolledIntoView(_el))
          {
            _el.addClass('view');
            if($(window).width() >= 768)
            {
              _el.find('div.item').eq(0).find('span').trigger('click');
            }
          }
        }
      });
    });
    /*  block "The first stage of the project is free"  */
    $('.first-step').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/50)) + '%');
      });
    });
    /*  block "How we create design projects"  */
    $('.how-do-we-create-design-projects .items').each(function(){
      var _items = $(this);
      $(this).children('li').each(function(){
        var _li = $(this);
        $(this).children('div').eq(0).on('click', function(){
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
            if($(window).width() >= 975)
            {
              _items.find('li').eq(0).find('span').trigger('click');
            }
          }
        }
      });
    });

    /*  block "Completed projects"  */
    var owlCcp = $('.carousel-completed-projects .owl-carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      responsive:{
        790:{
          autoWidth: true
        }
      }
    });
    $(".carousel-completed-projects .owl-next").click(function() {
        owlCcp.trigger('next.owl.carousel');
    });
    $(".carousel-completed-projects .owl-prev").click(function() {
        owlCcp.trigger('prev.owl.carousel');
    });

    /*  block "What are we doing"  */
    $('.what-are-we-doing .items').each(function(){
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

    /*  Header carousel  */
    var owlChi = $(".carousel-header-index .owl-carousel").owlCarousel({
      items:1,
      nav: false,
      loop: true,
      onInitialized: setInfo,
      onChanged: setInfo
    });
    function setInfo() {
      var _el = this.$element.find('.owl-item').eq(this._current).find('.item');
      $('.op-block').fadeOut( 300, function(){
        $('.owl-desc').find('.name').html(_el.data('name'));
        $('.owl-desc').find('.info1').html(_el.data('info1'));
        $('.owl-desc').find('.work').html(_el.data('work'));
        $('.owl-desc').find('.info2').html(_el.data('info2'));
        $('.owl-desc').find('.btn').attr('href', _el.data('link'));
        $('.op-block').fadeIn(300);
      });
    }
    $(".carousel-header-index .owl-next").click(function() {
        owlChi.trigger('next.owl.carousel');
    });
    $(".carousel-header-index .owl-prev").click(function() {
        owlChi.trigger('prev.owl.carousel');
    });
  });
})(jQuery);