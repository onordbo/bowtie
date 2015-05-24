$(document).ready(function() {
	//Animate viewport on click
	$('#discover').click(function() {
		$('html, body').animate({
			scrollTop: $('#spotify').offset().top // Set destination target
		}, 600); // Set the animation duration
	});

	//Fade out links
	$('a').not('#discover').click(function (e) {
		e.preventDefault();						// Prevent default anchor behavior
		var goTo = this.getAttribute("href");	// Store anchor href
			$('body').fadeOut(250);			// Animate while timer ticks

		setTimeout(function(){
			window.location = goTo;	// Fetch previously stored href
		}, 300); // Set anchor timeout
	});
});