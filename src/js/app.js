$(document).ready(function() {

	// Dynamic date.
	var $date = $('footer .date');
	var d = new Date();
	var year = d.getFullYear();
	$date.html(year);

	// Main Navigation.
	$('.main-nav-link').on('click', function(e) {

		e.preventDefault();

		var $active = $('.active');

		if ( ! $(this).hasClass('disabled') ) {
			$active.removeClass('active');
			$(this).addClass('active');
		}
	});

	// Flyout Toggle.
	$(document).on('click', '.flyout-toggle', function() {

		var nav = $('.main-nav');
		nav.toggleClass('active');

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

	// Tabs Toggle.
	$(document).on('click', '.main-nav-link > a', function(e) {

		e.preventDefault();
		$('.main-nav-link a').parent().removeClass('active');
		$(this).parent().addClass('active');
		$('.main-content > div').removeClass('active');

		var id = $(this).attr('href');
		$(id).addClass('active');

	});

	$(document).on('click', '.main-content_content a', function(e) {

		e.preventDefault();

		var attr = $(this).attr('href');
		var $link = $('.main-nav-link');

		if ( typeof attr !== typeof undefined && attr !== false ) {

			$(this).parent().parent().parent().removeClass('active');
			$(attr).addClass('active');
			$link.removeClass('active');

			$('.main-nav-link').each(function(index, element) {

				if ( $(element).find('a').attr('href') == attr ) {
					$(this).addClass('active');
				}

			});


			// var href = $(this).find('')


			// 	if ( $(this).find('a').attr('href') = attr ) {
			// 		$link.addClass('active');
			// 	}

			// 	// var href = $(this).find('a').attr('href')

			// 	// if ( href === attr ) {
			// 	// 	console.log(href);
			// 	// }
			// });
		}
	});

});
