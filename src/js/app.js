$(document).ready(function() {

	// Dynamic date.
	var $date = $('footer .date');
	var d = new Date();
	var year = d.getFullYear();
	$date.html(year);

	// Main Navigation.
	$('.main-nav-link').on('click', function(e) {

		e.preventDefault();

		var $current = $('.current');

		if ( ! $(this).hasClass('disabled') ) {
			$current.removeClass('current');
			$(this).addClass('current');
		}
	});

});
