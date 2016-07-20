$(document).ready(function() {
	$('h1').fadeIn(2000);
	$('h3').fadeIn(3000);
	$('img').fadeIn(3000);

	$("#spaceinvaders").hover(function() {
		$(this).animate({
			opacity: .4
		}, 200);
		$('span').removeClass('hide');
	});
});