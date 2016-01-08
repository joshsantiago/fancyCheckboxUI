/*
 * fancyCheckboxUI
 * https://github.com/user/fancyCheckboxUI
 *
 * Copyright (c) 2016 Joshua Santiago
 * Licensed under the MIT license.
 */

(function($) {

  var fancyCheckboxUI = {
	  
	init: function(el){
		
	}
	  
  };

  // Collection method.
  $.fn.fancyCheckboxUI = function() {
    
	// var obj = Object.create(fancyCheckboxUI);
  	var obj = fancyCheckboxUI;

  	 return this.each(function(){
  	 	 // console.log(obj);
  	 	 obj.init(this);
  	 });
	
  };

 
}(jQuery));
