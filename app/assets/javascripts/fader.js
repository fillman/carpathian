$(function(){
  // Construct a Fader class
  var Fader = function(element, options) {
    this.$element = element;
    this.options  = options;
  };


  // Adding a fade method
  Fader.prototype.fade = function() {
    var $current = this.$element.find('article').last(),
        that = this;

    $current.fadeOut(2000, function () {
      $current.remove();
      that.$element.prepend($current);
      $current.show();
    });
  };

  $('[data-ride="fader"]').each(function () {
    var $element = $(this),
        fader = new Fader($element, {});

    setInterval(function() { fader.fade() }, {});
  })
});