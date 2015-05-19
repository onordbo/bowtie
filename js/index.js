//Animate viewport on click
$('#discover').click(function() {
	$('html, body').animate({
		scrollTop: $('#spotify').offset().top //Set destination target
	}, 700); //Set the animation duration
});

//Fade out
$('button, #about-link').click(function() {
	$('.wrap').fadeOut(250); // Set the animation duration
});



//TODO: Deal with button shit
$('container > a').click(function (e) {
	e.preventDefault();						// Prevent default anchor behavior
	var goTo = this.getAttribute("href");	// Store anchor href
		$('.wrap').fadeOut(250);			// Animate while timer ticks

	setTimeout(function(){
		window.location = goTo;	// Fetch previously stored href
	}, 300);	// Set anchor timeout
});