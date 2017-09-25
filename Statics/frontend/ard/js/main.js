/*  Checking the visibility of an item  */
function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  //var elemBottom = elemTop + $(elem).height();
  //console.log(docViewTop, docViewBottom, elemTop);
  return (elemTop < docViewBottom);
}
(function($) {
  $(function() {

    /* Back to top of page */
    $('a.top').on('click', function () {$('body,html').animate({scrollTop: 0}, 400); return false;});

    /* Enable animation when the item is reached */
    $('[data-animated]').each(function(){
      var _el = $(this), _effect = _el.data('animated');
      if(!_el.hasClass('animated'))
      {
        $(window).on('scroll ready load resize', function(){
          if(isScrolledIntoView(_el))
          {
            _el.addClass('animated').addClass(_effect);
          }
        });
      }
    });

    /* Add scroll class */
    $(window).on('scroll ready load resize', function(){
      if($(window).scrollTop() > 0)
      {
        $('body').addClass('scroll');
      }
      else
      {
        $('body').removeClass('scroll');
      }
    });

    /*  Open/Close footer menu  */
    $('#hamburger-footer').on('click', function(){
      $(this).toggleClass('open');
      $('.menufooter').toggleClass('open');
      return false;
    });

    /*  Open/Close header menu  */
    $('#hamburger').on('click', function(){
      $(this).toggleClass('open');
      $('.menutop').toggleClass('open');
      return false;
    });

    /*  Toggle header menu items  */
    $('.menutop a').each(function(){
      var _link = $(this);
      if($(window).width() < 768 && _link.parent().children('ul').length > 0)
      {
        _link.on('click', function(){
          _link.parent().children('ul').slideToggle();
        });
      }
    });
  });
})(jQuery);