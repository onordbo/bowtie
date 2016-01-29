$(document).ready(function() {
	//Animate viewport on click
	$('#discover').click(function() {
		$('html, body').animate({
			scrollTop: $('#footer').offset().top // Set destination target
		}, 1200); // Set the animation duration
	});
});

console.log('%cHey there! I can see you found my code. If you like designers who code, we should talk! Email me on hello@oyvind.co or check out more of my code on GitHub – http://github.com/onordbo ', 'color: blue; font-size: 22px; font-family: sans-serif;');