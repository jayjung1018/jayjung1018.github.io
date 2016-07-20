$(document).ready(function() {
	$('h1').fadeIn(2000);
	$('h3').fadeIn(3000);
	$('img').fadeIn(3000);

	$('img').hover(function() {
		$(this).animate({
			opacity: .4
		}, 200);
		$(this).next().removeClass('hide');
	}, function() {
		$(this).animate({
			opacity: 1
		}, 200);
		$(this).next().addClass('hide');
	});
});