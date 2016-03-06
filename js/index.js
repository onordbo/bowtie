$(document).ready(function() {
	//Animate viewport on click
	$('#discover').click(function() {
		$('html, body').animate({
			scrollTop: $('#footer').offset().top // Set destination target
		}, 1200); // Set the animation duration
	});
});

<<<<<<< HEAD
console.log('%cHey there! I can see you found my code. If you like designers who code, we should talk! Email me on hello@oyvind.co or check out more of my code on GitHub – http://github.com/onordbo ', 'color: blue; font-size: 22px; font-family: sans-serif;');
=======
	//Fade out links
	$('a').not('#discover').not('#trigger-overlay').not('#mail').click(function (e) {
        var goTo = this.getAttribute("href");    // Store anchor href
        if (goTo.indexOf("#") > -1) {
        e.preventDefault();        // Prevent default anchor behavior
            $('body').fadeOut(250);     // Animate while timer ticks
        setTimeout(function(){
            window.location = goTo;    // Fetch previously stored href
        }, 300); // Set anchor timeout
        }
    });
});

//
>>>>>>> 349479304ab52b17ebd7102cfd3ea4d565007460
