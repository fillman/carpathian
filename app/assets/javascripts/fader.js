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

  Fader.prototype.slowhide = function() {
      var docViewTop = $(window).scrollTop(),
      	elemTop = this.$element.offset().top,
      	hidingStart = elemTop,
      	elemBottom = elemTop + this.$element.height(),
      	alpha = (docViewTop - hidingStart) / (elemBottom - hidingStart),
      	opacity_value = 1 - alpha;
      if (hidingStart < docViewTop) { 
    	  this.$element.css('opacity', opacity_value);  
      } else { 
    	  this.$element.css('opacity', '1');
      }
  };
  
  $('[data-ride="fader"]').each(function () {
    var $element = $(this),
        fader = new Fader($element, {});

    setInterval(function() { fader.fade() }, {});
    $(window).scroll(function(){ fader.slowhide(); })
    
  })
});