head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// paginator
	$(".pagi li a").click(function() {
		var pageNav = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(pageNav).offset().top
		}, 700);
		return false;
	});

	function paginator() {
		$(".page").each(function(){
			var pos = $(this).offset().top - $(this).height() / 3;
			var id = $(this).attr('id');
			if ($(window).scrollTop() >= pos) {
				$(".pagi li a").removeClass("is-active");
				$('[href = #'+id+']').addClass('is-active');
			}
		});
	};

	// change color of paginator
	function paginatorColor() {
		var top = $('#page2').offset().top - $('.pagi').position().top;
		var bottom = $('#page5').offset().top + $('.pagi').position().top ;
		var scroll = $(document).scrollTop();

		if ( scroll >= top && scroll <= bottom ) {
			$('.pagi').addClass('is-dark');
		}
		else {
			$('.pagi').removeClass('is-dark');
		};
	};

	$(".move-down, .move-up").click(function() {
		var target = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(target).offset().top + 1
		}, 1000);
		return false;
	});

	$('.cycle-pager-active .reviews__pagi-item').addClass('is-active');

	$(document).scroll(function () {
		var topScroll = $(document).scrollTop();
		var lastPageTop = $('#page6').offset().top;

		paginator();
		paginatorColor();

		// hide and show header on scroll
		if ( topScroll > 20 && topScroll <= lastPageTop - 1 ) {
			$('.header').fadeOut();
		}
		else {
			$('.header').fadeIn();
		};

		// hide and show footer__top on scroll
		if ( topScroll >= $('#page2').offset().top && topScroll <= $('#page5').offset().top ) {
			$('.footer__top').slideDown();
		}
		else {
			$('.footer__top').slideUp();
		};

		// hide and show footer on scroll
		if ( topScroll >= 0 && topScroll <= $('#page4').offset().top || topScroll < 0 ) {
			$('.footer__bottom').slideDown();
		}
		else {
			$('.footer__bottom').slideUp();
		};

		// replace header social on header tel
		// if ( topScroll >= lastPageTop ) {
		// 	$('.header .social').show();
		// 	$('.header__tel').hide();
		// }
		// else {
		// 	// setTimeout( function() {
		// 		$('.header .social').fadeOut();
		// 	// }, 500);
		// 		$('.header__tel').fadeIn();
		// };

		if ( topScroll >= lastPageTop ) {
			$('.header .social').show();
			$('.header__tel').hide();
		};
		if ( topScroll <= $('#page4').offset().top ) {
			// setTimeout( function() {
				$('.header .social').hide();
			// }, 500);
				$('.header__tel').show();
		};

	});

});








