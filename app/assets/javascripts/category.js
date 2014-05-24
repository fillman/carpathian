$(function(){
  // Construct a Fader class
  var Category = function(element, options) {
    this.$element = element;
    this.options  = options;

    this.$element
      .on('mouseenter', $.proxy(this.showCategory, this))
      .on('mouseleave', $.proxy(this.hideCategory, this))
  };


  // Adding a fade method
  Category.prototype.showCategory = function(event) {
    $(this.$element).find('a.category').stop().animate({
      top: '5%'
    }, 200);

    $(this.$element).find('.item-pattern-black').stop().animate({
      opacity: '0.6'
    }, 200);
  };

  Category.prototype.hideCategory = function(event) {
    $(this.$element).find('a.category').stop().animate({
      top: '-15%'
    }, 200);

    $(this.$element).find('.item-pattern-black').stop().animate({
      opacity: '0'
    }, 200);
  };

  $('[data-ride="carousel"]').each(function () {
    var $element = $(this);
    new Category($element, {});
  })
});