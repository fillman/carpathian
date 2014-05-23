$(window).scroll(function() {
  var height = $(window).scrollTop();
  var menu   = $('.navbar');
  var clazz  = 'ghost';

  height > menu.height() ? menu.addClass(clazz) : menu.removeClass(clazz);
});