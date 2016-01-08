/*! Fancycheckboxui - v0.1.0 - 2016-01-04
* https://github.com/user/fancyCheckboxUI
* Copyright (c) 2016 Joshua Santiago; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.fancyCheckboxUI = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.fancyCheckboxUI = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.fancyCheckboxUI.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.fancyCheckboxUI.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].fancyCheckboxUI = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
