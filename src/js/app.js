$(document).ready(function() {


	// Dynamic date.
	var $date = $('footer .date');
	var d = new Date();
	var year = d.getFullYear();
	$date.html(year);


	// Flyout Toggle.
	$(document).on('click', '.flyout-toggle', function() {
		$('.main-nav').toggleClass('active');
	});


	// Close Flyout Toggle.
	$('body').on('click', function(event) {

		if ( ! $(event.target).is('.main-nav') ) {
			$('.main-nav').removeClass('active');
		}

	});


	// Button Navigation.
	$(document).on('click', '.button-nav', function() {

		var $active = $('.main-content-item.active');
		var $next = $active.next('.main-content-item');
		var $prev = $active.prev('.main-content-item');
		var $link_active = $('.main-nav-link.active');
		var $link_active_next = $link_active.next('.main-nav-link');
		var $link_active_prev = $link_active.prev('.main-nav-link');

		if ( $(this).hasClass('button-nav_next') && $next.length !== 0 ) {

			if ( ! $link_active_next.hasClass('disabled') ) {

				$active.removeClass('active');
				$next.addClass('active');
				$link_active.removeClass('active');
				$link_active_next.addClass('active');

			} else {

				$('.modal').addClass('active');
				$('body').addClass('modal-active');

			}

		} else if ( $(this).hasClass('button-nav_prev') && $prev.length !== 0 ) {

			$active.removeClass('active');
			$prev.addClass('active');
			$link_active.removeClass('active');
			$link_active_prev.addClass('active');

		}
	});


	// Modal Toggle.
	$(document).on('click', '.button-modal', function() {
		$('.modal').addClass('active');
		$('body').addClass('modal-active');
	});

	$(document).on('click', '.disabled > a', function(e) {

		e.preventDefault();

		$('.modal').addClass('active');
		$('body').addClass('modal-active');

	});

	$(document).on('click', '.modal-close', function() {
		$('.modal').removeClass('active');
		$('body').removeClass('modal-active');
	});

	if ( ! $('body').hasClass('active') && ! $('.modal').hasClass('active') ) {

		$('body').on('click', function(event) {

			if ( ! $(event.target).closest('.modal', '.button-modal').length ) {

				$('body').find('.modal').removeClass('active');
				$('body').removeClass('modal-active');

			}
		});

	}


	// Tabs Toggle.
	$(document).on('click', '.main-nav-link > a', function(e) {

		e.preventDefault();

		if ( ! $(this).parent().hasClass('disabled') ) {

			$('.main-nav-link a').parent().removeClass('active');
			$(this).parent().addClass('active');
			$('.main-content > div').removeClass('active');

			var id = $(this).attr('href');
			$(id).addClass('active');

		}
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


	// Signup and Set Local Storage.
	var today = Date.now();
	var expiry_date = 1000 * 60 * 60 * 24 * 365;
	var signup = localStorage.getItem('opencareEbookSignup');
	var $disabled = $('.main-nav-link.disabled');

	if ( null !== signup && today - signup < expiry_date ) {

		$disabled.removeClass('disabled');

	} else if ( null == signup || expiry_date < today - signup ) {

		$('form').on('submit', function() {

			$('.modal').removeClass('active');
			$('body').removeClass('modal-active');
			localStorage.setItem('opencareEbookSignup', today);
			$disabled.removeClass('disabled');

		});

	}

});
