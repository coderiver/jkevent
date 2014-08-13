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

		afterLoad: function(anchorLink, index){
			var paginator = $('.pagi'),
				header = $('.header'),
				headerTel = header.find('.header__tel'),
				headerSocialBtns = header.find('.social'),
				footer = $('.footer');

			if (index == '2' || index == '3' || index == '4' || index == '5') {
				paginator.addClass('is-dark');
				header.addClass('is-small');
				footer.slideDown();
			}
			else {
				paginator.removeClass('is-dark');
				header.removeClass('is-small');
				footer.slideUp();
			};

			if (index == 6) {
				headerTel.addClass('is-hidden');
				headerSocialBtns.addClass('is-visible');
			}
			else {
				headerTel.removeClass('is-hidden');
				headerSocialBtns.removeClass('is-visible');
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
	$('.js-popup-open').click(function(event) {
		iniitialObject = $(this);
		targetPopup = $($(this).attr('href'));

		targetPopup.show();
		switchPriceValue();

		targetPopup.find('input[type="radio"]').click(function(event) {
			switchPriceValue();
		});

		$('body').addClass('noscroll');
		setTimeout(function() {
			targetPopup.addClass('is-visible');
		}, 10);
		return false;
	});
	//hide popup
	$('.js-popup-close').click(function(event) {
		var	targetPopup = $($(this).attr('href'));

		targetPopup.removeClass('is-visible');
		setTimeout(function() {
			targetPopup.hide();
			$('body').removeClass('noscroll');
		}, 1000);
		return false;
	});

	//change price value in popup form on click on radio buttons
	function switchPriceValue() {
		var currentOffer = iniitialObject.parents('.offer'),
			priceValue = targetPopup.find('.value'),
			checkedRadioButton = targetPopup.find('input[type="radio"]:checked').data('price'),
			targetPriceVariant = currentOffer.find('.js-price' + checkedRadioButton).text();

		priceValue.text(targetPriceVariant);
	};

});

$.validate();
