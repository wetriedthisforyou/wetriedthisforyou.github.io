$(function() {

	$('img').hover(function() {
		$(this).toggleClass('red');
		
	});

	$('img').hover(function() {
		$(this).addClass('animated bounce' ,{times:1},200);
	});

	

    $('.log').hover(function() {
		$(this).toggleClass('red');
	});

	 $('.name').hover(function() {
		$(this).toggleClass('red');
	});
	
	

});