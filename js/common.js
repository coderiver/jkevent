head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$('#fullpage').fullpage({
		verticalCentered: false,
		easing: 'easeInQuart',
		// verticalCentered: true,
		menu: true,
		// navigation: true,
		css3: true,
		scrollingSpeed: 500,
		scrollOverflow: true,
		// touchSensitivity: 15,
		// paddingTop: '103px',
		// paddingBottom: '83px',
		// fixedElements: '.header, .nav, .nav__left, nav__right',
		normalScrollElements: '.reviews, .review__text, .offer',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '.js-nav',

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

			if (index == '2' || index == '3' || index == '4' && index++) {
				header.find('.header__logo').addClass('is-rotate');
			}

		},

		// onLeave: function(index, nextIndex, direction){
		// 	var	activePage = $('.section.active'),
		// 		prevPage = $('.section.active').prev('.section'),
		// 		nextPage = $('.section.active').next('.section');

		// 	if (direction =='down') {
		// 		// activePage.addClass('is-visible');
		// 		prevPage.addClass('is-hidden')
		// 	}
		// 	else if (direction =='up') {
		// 		activePage.removeClass('is-hidden');
		// 		// nextPage.removeClass('is-visible');
		// 		// prevPage.addClass('is-hidden');
		// 	};

		// }
	});

	$('.offer__container').hover(function() {
		var slider = $(this).find('.offer__backside-wrap');

		$(this).find('.offer__more').click(function(event) {
			slider.css('left', '-100%');
		});

		$(this).find('.offer__back').click(function(event) {
			slider.css('left', '0');
		});
	}, function() {
		var slider = $(this).find('.offer__backside-wrap');
		setTimeout(function() {
			slider.css('left', '0');
		}, 400);
	});

});








