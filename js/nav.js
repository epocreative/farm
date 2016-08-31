// Set up the nav scrolling effect
$("nav").onePageNav();

var menu = $("nav ul")

$("#menu-icon").click(function() {
	// Toggle the menu
	menu.slideToggle();
});

$(window).resize(function() {
	var width = $(window).width();

	if(width > 768 && menu.is(":hidden")) {
		menu.removeAttr("style");
	}
});

// Add parallax

$(window).stellar({ 
	horizontalScrolling: false, 
	responsive: true
});


