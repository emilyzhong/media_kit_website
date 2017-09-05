$(document).ready(function() {
	let showNav = $("#landing-nav").position().top + $("#landing-nav").outerHeight(true);
	
	$(window).scroll(function() {
		let currentNavOffset = parseInt($("#sticky-nav").css("top").substring(0, 2));
		if ($(window).scrollTop() < showNav + 50) {
			$("#sticky-nav").css("top", $(window).scrollTop() - showNav - 50);
		} else if ($(window).scrollTop() > showNav + 50) {
			$("#sticky-nav").css("top", 0);
		}

		about = $("#about_section")
		if ($(window).scrollTop() + $(window).height() >= about.position().top) {
			$("#about_page").fadeIn(1000);
		}
	});
 });