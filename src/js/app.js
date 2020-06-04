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

	// Modal Toggle.
	$(document).on('click', '.disabled', function(e) {

		e.preventDefault();

		$('.modal').css('display', 'block');
		$('body').addClass('modal-active');

	});

	$(document).on('click', '.modal-close', function() {

		$('.modal').css('display', 'none');
		$('body').removeClass('modal-active');

	});

	$(document).on('click', '.modal-signup', function() {

		$('.modal').css('display', 'none');
		$('body').removeClass('modal-active');
		$('.disabled').removeClass('disabled');

	});

});
