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

	// Button Navigation.
	$(document).on('click', '.button-nav', function() {

		var $active = $('.main-content-item.active');
		var $next = $active.next('.main-content-item');
		var $prev = $active.prev('.main-content-item');

		if ( $(this).hasClass('button-nav_next') && $next.length !== 0 ) {
			$active.removeClass('active');
			$next.addClass('active');
		} else if ( $(this).hasClass('button-nav_prev') && $prev.length !== 0 ) {
			$active.removeClass('active');
			$prev.addClass('active');
		}
	});

	// Flyout Toggle.
	$(document).on('click', '.flyout-toggle', function() {

		var nav = $('.main-nav');
		nav.toggleClass('active');

	});

	// Close Flyout Toggle.
	$('body').on('click', function(event) {

		if ( ! $(event.target).is('.main-nav') ) {
			$('.main-nav').removeClass('active');
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

	// Tabs Toggle.
	$(document).on('click', '.main-nav-link > a', function(e) {

		e.preventDefault();
		$('.main-nav-link a').parent().removeClass('active');
		$(this).parent().addClass('active');
		$('.main-content > div').removeClass('active');

		var id = $(this).attr('href');
		$(id).addClass('active');

	});

	$(document).on('click', '.main-content_content .tab-link', function(e) {

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
		}
	});

});
