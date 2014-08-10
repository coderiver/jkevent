head.ready(function() {

	$('#fullpage').fullpage({
		verticalCentered: false,
		easing: 'easeInQuart',
		menu: true,
		css3: true,
		scrollingSpeed: 500,
		scrollOverflow: true,
		normalScrollElements: '.reviews, .review__text, .offer, .gallery',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '.js-nav',
		// verticalCentered: true,
		// navigation: true,
		// touchSensitivity: 15,
		// paddingTop: '103px',
		// paddingBottom: '83px',
		// fixedElements: '.header, .nav, .nav__left, nav__right',

		afterLoad: function(anchorLink, index){
			var paginator = $('.pagi'),
				header = $('.header'),
				footer = $('.footer');

			if (index == '2' || index == '3' || index == '4' || index == '5') {
				paginator.addClass('is-dark');
				header.addClass('is-small');
				// header.find('.header__logo').fadeOut();
				// header.find('.header__logo-small').fadeIn();
				footer.slideDown();
			}
			else {
				paginator.removeClass('is-dark');
				header.removeClass('is-small');
				// header.find('.header__logo').fadeIn();
				// header.find('.header__logo-small').fadeOut();
				footer.slideUp();
			};

			if (index == 6) {
				header.find('.header__tel').addClass('is-hidden');
				header.find('.social').addClass('is-visible');
			}
			else {
				header.find('.header__tel').removeClass('is-hidden');
				header.find('.social').removeClass('is-visible');
			};

		},

		onLeave: function(index, nextIndex, direction){
			var prevPage = $('.section.active').prev('.section'),
				nextPage = $('.section.active').next('.section');

			if (direction =='down') {
				prevPage.addClass('is-slidedown');
				setTimeout(function() {
					$('.section').removeClass('is-slidedown');
				}, 1000)
			}
			else if (direction =='up') {
				nextPage.addClass('is-slideup');
				setTimeout(function() {
					$('.section').removeClass('is-slideup');
				}, 1000)
			};
		},
	});

	//flip offer on click
	$('.offer').click(function(event) {
		$(this).addClass('is-flipped');
		showAboutOffer();
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.offer').length == 0) {
			$('.offer').removeClass('is-flipped');
		};
	});
	//flip offer on hover
	$('.offer').hover(function() {
		$(this).addClass('is-flipped');
		showAboutOffer();
	}, function() {
		$(this).removeClass('is-flipped');
	});
	//navigation inside offer block
	function showAboutOffer() {
		var activeOffer = $('.offer.is-flipped'),
			slider = activeOffer.find('.offer__backside-wrap'),
			linkToAbout = activeOffer.find('.offer__content').find('.offer__more'),
			linkBack = activeOffer.find('.offer__back'),
			allAbout = activeOffer.find('.offer-about1, .offer-about2, .offer-about3');

		allAbout.hide();

		linkToAbout.click(function(event) {
			var targetAbout = $(this).attr('href');

			slider.css('left', '-100%');
			$('.'+targetAbout).show();
			return false;
		});

		linkBack.click(function(event) {
			slider.css('left', '0');
			setTimeout(function() {
				allAbout.hide();
			}, 400);
			return false;
		});

		activeOffer.hover(function() {
			/* Stuff to do when the mouse enters the element */
		}, function() {
			setTimeout(function() {
				slider.css('left', '0');
				allAbout.hide();
			}, 400);
		});
	};


	//show popup
	$('.btn.btn_offer').click(function(event) {
		$('.popup').show();
		$('body').addClass('noscroll');
		setTimeout(function() {
			$('.popup').addClass('is-visible');
		}, 10);
		return false;
	});
	//hide popup
	$('.popup__form-close').click(function(event) {
		$('.popup').removeClass('is-visible');
		setTimeout(function() {
			$('.popup').hide();
			$('body').removeClass('noscroll');
		}, 1000);
		return false;
	});

});