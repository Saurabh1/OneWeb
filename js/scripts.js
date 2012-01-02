/* Author:
Seth Warburton | @nternetinspired
*/

$(document).ready(function(){

/* Mobile Menu - Seth Warburton @nternetinspired */
	jQuery("nav#menu").addClass('visuallyhidden');
	jQuery("a#mobileMenu").click(function(event) {	
	event.preventDefault();
	jQuery('nav#menu').toggleClass('visuallyhidden');
});	
	function adjustStyle(width) {
    width = parseInt(width);
    if (width > 767) {
		jQuery('nav#menu').removeClass('visuallyhidden');
    }
}
	// Chris Coyier's elegant screensize test http://css-tricks.com/resolution-specific-stylesheets/
	jQuery(function() {
    adjustStyle($(this).width());
    jQuery(window).resize(function() {
        adjustStyle($(this).width());
    });
});	

	// Run Matt Kersley's jQuery Responsive menu plugin (see plugins.js)
	if (jQuery.fn.mobileMenu) {
		jQuery('ol#id').mobileMenu({
			switchWidth: 768,                   // width (in px to switch at)
			topOptionText: 'Choose a page',     // first option text
			indentString: '&nbsp;&nbsp;&nbsp;'  // string for indenting nested items
		});
	}

	// Run Mathias Bynens jQuery placeholder plugin (see plugins.js)
	if (jQuery.fn.placeholder) {
		jQuery('input, textarea').placeholder();		
	}

});
