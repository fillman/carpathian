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
    $(event.target).fadeTo(2000, 0.5);
  };

  Category.prototype.hideCategory = function(event) {
    $(event.target).fadeTo(2000, 1);
  };

  $('[data-ride="carousel"]').each(function () {
    var $element = $(this);
    new Category($element, {});
  })
});