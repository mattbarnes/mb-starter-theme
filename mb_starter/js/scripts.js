$ = jQuery;

$(document).ready( function() {
	mobileMenu();
}) 

function mobileMenu() {
	$("#menu-trigger").click( function() {
		$("body").toggleClass("mobile-menu-open");
	})
}