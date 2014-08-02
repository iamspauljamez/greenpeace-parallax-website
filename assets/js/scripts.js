/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.0
 * Copyright 2014. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            console.log(data.curTop);
        }
    });
	
  });

})(jQuery, window, document);


$(window).load(function() { // makes sure the whole site is loaded
	$('.spinner').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	// $('body').delay(350).css({''});
})