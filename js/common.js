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
			var pos = $(this).offset().top;
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

		console.log ('bla');
	};

	$(".move-down, .move-up").click(function() {
		var target = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(target).offset().top
		}, 700);
		return false;
	});


	$(document).scroll(function () {
		var scroll_top = $(document).scrollTop();
		var doc_bottom = $('#page6').offset().top;

		paginator();
		paginatorColor();

		// hide and show header on scroll
		if ( scroll_top > 20 && scroll_top <= doc_bottom - 1 ) {
			$('.header').fadeOut();
		}
		else {
			$('.header').fadeIn();
		};

		// hide and show footer__top on scroll
		if ( scroll_top >= $('#page2').offset().top && scroll_top <= $('#page5').offset().top ) {
			$('.footer__top').slideDown();
		}
		else {
			$('.footer__top').slideUp();
		};

		// hide and show footer on scroll
		if ( scroll_top >= 0 && scroll_top <= $('#page4').offset().top || scroll_top < 0 ) {
			$('.footer__bottom').slideDown();
		}
		else {
			$('.footer__bottom').slideUp();
		};

		// replace header social on header tel
		if ( scroll_top >= doc_bottom - 1000 ) {
			$('.header .social').show();
			$('.header__tel').hide();
		}
		else {
			setTimeout( function() {
				$('.header .social').hide();
			}, 500);
				$('.header__tel').show();
		};
	});

});