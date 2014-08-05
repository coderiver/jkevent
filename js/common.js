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

	$('.move-down, .move-up').click(function() {
		var target = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(target).offset().top + 1
		}, 1000);
		return false;
	});

	$('.cycle-pager-active .reviews__pagi-item').addClass('is-active');

	$(document).scroll(function () {
		var topScroll = $(document).scrollTop(),
			lastPageTop = $('#page6').offset().top,
			fifthPageTop = $('#page5').offset().top,
			secondPageTop = $('#page2').offset().top,
			header = $('.header'),
			footer = $('.footer'),
			logoBig = $('.header__logo'),
			logoSmall = $('.header__logo-small');

		paginator();
		paginatorColor();

		// change header on scroll
		if (topScroll >= secondPageTop - 100 && topScroll <= lastPageTop - 10) {
			header.addClass('is-small');
			logoBig.fadeOut();
			logoSmall.fadeIn();
		}
		else {
			header.removeClass('is-small');
			logoBig.fadeIn();
			logoSmall.fadeOut();
		};

		if (topScroll >= lastPageTop - 10) {
			header.find('.header__tel').addClass('is-hidden');
			header.find('.social').addClass('is-visible');
		}
		else {
			header.find('.header__tel').removeClass('is-hidden');
			header.find('.social').removeClass('is-visible');
		}


		// hide and show footer on scroll
		if ( topScroll >= secondPageTop && topScroll <= fifthPageTop + 80) {
			footer.slideDown();
		}
		else {
			footer.slideUp();
		};

	});

});








