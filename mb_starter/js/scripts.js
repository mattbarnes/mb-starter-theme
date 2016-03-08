$ = jQuery;

$(document).ready( function() {
	mobileMenu();
}) 

function mobileMenu() {
	$("#menu-trigger").click( function() {
		$("_MENU_ELEMENT_").toggleClass("mobile-menu-open");
		$(this).toggleClass("open");
	})
}