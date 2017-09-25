(function($) {
  $(function() {
    
    /*  block "Completed projects"  */
    var owlCcp = $('.product-footer-carousel .owl-carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      responsive:{
        400:{
          autoWidth: true
        }
      }
    });
    
    /*  block "Order design now"  */
    $('.product-order-step').each(function(){
      var _el = $(this);
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el.css('background-position', 'center ' + parseInt((x1 - x2)/($(window).height()/50)) + '%');
      });
    });
    
    /*  block "Kitchen and living room"  */
    $(".kitchen-and-living-room").each(function(){
      var owlKlr = $(this).find(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        responsive:{
          768:{
            dots: true
          }
        },
        onInitialized: initowlKlr,
        onTranslated: initowlKlr
      });
      /*  function for grouping slides by properties */
      function initowlKlr() {
        var _slider = this;
        var _groupsName = [], _groupsIndex = [], _curSlide = 0;
        $.each(this._items, function(i, e){
          if(jQuery.inArray( $(this).find('.item').data('group'), _groupsName ) == -1)
          {
            _groupsName.push($(this).find('.item').data('group'));
            _groupsIndex.push(i);
          }
          if($(this).hasClass('active'))
          {
            _curSlide = i;
          }
        });
        $('.groups').html('');
        $.each(_groupsName, function(i, e){
          var _nA = $('<a />', {
            'text' : e,
            'href' : '#img' + _groupsIndex[i]
          }).appendTo('.groups').on('click', function(){
            owlKlr.trigger('to.owl.carousel', _groupsIndex[i])
            return false;
          });
          if(_curSlide >= _groupsIndex[i])
          {
            $('.groups a').removeClass('active');
            _nA.addClass('active');
          }
        });
        if($(window).width() >= 992)
        {
          var _height = this.$element.outerHeight() - this.$element.find('.owl-item.active').find('.img').outerHeight() + this.$element.find('.owl-item.active').find('.desc').outerHeight() - 57;
          this.$element.find('.owl-prev').css('bottom', _height);
          this.$element.find('.owl-next').css('bottom', _height);
        }
        else if($(window).width() >= 768)
        {
          var _height = this.$element.outerHeight() - this.$element.find('.owl-item.active').find('.img').outerHeight() + this.$element.find('.owl-item.active').find('.desc').outerHeight();
          this.$element.find('.owl-prev').css('bottom', _height);
          this.$element.find('.owl-next').css('bottom', _height);
        }
      }
    });
    
    /*  block "Planning solution"  */
    $('a.gallery').colorbox({
      rel:'gal'
    });

    /*  Header carousel  */
    var owlChp = $(".carousel-header-product .owl-carousel").owlCarousel({
      items:1,
      nav: false,
      dots: false,
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
        $('.op-block').fadeIn(300);
      });
    }
    $(".carousel-header-product .owl-next").click(function() {
        owlChp.trigger('next.owl.carousel');
    });
    $(".carousel-header-product .owl-prev").click(function() {
        owlChp.trigger('prev.owl.carousel');
    });
  });
})(jQuery);