/**********************************************************
 * 파일명	:design.js
 * 작성자	:김주희
 * 작성일	:2014.01.17
***********************************************************/

<<<<<<< HEAD
=======
var winWidth = $(window).width();
var winHeight = $(window).height();
var winRate = winWidth/winHeight;
var userAgent = navigator.userAgent.toLowerCase();

>>>>>>> 8b534bf955482bbc8c23572416810b41458ffbe0
$(window).resize(function() {
	if(this.resizeTO) {
		clearTimeout(this.resizeTO);
	}
	this.resizeTO = setTimeout(function() {
		$(this).trigger('resizeEnd');
	}, 500);
});

$(window).on('resizeEnd', function() {
	setPage();
});

$(window).load(function(){
	$("#gnb a").click(function() {
		$.scrollTo($($(this).attr("href")), {
			duration: 750,
			offset : 0
		});
		return false;
	});
	$(document).on("scroll", function() {
		setPage();
	});

	setPhoto();
});

function setPage(){
	var curTop, offTop1, offTop2, offTop3, offTop4,  offTop5;
	var mar = 45;
	curTop = $(document).scrollTop();
	offTop1 = $("#home").position().top - mar;
	offTop2 = $("#profile").position().top - mar;
	offTop3 = $("#photo").position().top - mar;
	offTop4 = $("#contacts").position().top - mar;

	$("#gnb a").removeClass("active");

	if (curTop >= offTop1 && curTop < offTop2) {
		$("#gnb a").eq(0).addClass("active");
	} else if (curTop >= offTop2 && curTop < offTop3) {
		$("#gnb a").eq(1).addClass("active");
	} else if (curTop >= offTop3 && curTop < offTop4) {
		$("#gnb a").eq(2).addClass("active");
	} else if (curTop >= offTop4) {
		$("#gnb a").eq(3).addClass("active");
	}
<<<<<<< HEAD
=======

	// Grid Layout
	var $container = $('.portfolio ul.pr');
	var $optionSets = $('.optionSet');
	var $optionLinks = $optionSets.find('a');

	setTimeout(function() {
		$(".loader").hide();
		$container.show();
		$container.isotope({
			masonry: {
				itemSelector : '.box',
				columnWidth: 1
			}
		});
	}, 3000);

	$optionLinks.click(function(){
		var $this = $(this);
		if ( $this.hasClass('selected') ) {
			return false;
		}

		var $optionSet = $this.parents('.optionSet');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');

		var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
		value = value === 'false' ? false : value;
		options[ key ] = value;
		$container.isotope( options );

		return false;
	});
>>>>>>> 8b534bf955482bbc8c23572416810b41458ffbe0
}

function setPhoto(){
	var userFeed = new Instafeed({
		get: 'user',
		userId: 247077117,
		accessToken: '247077117.53cf32b.0837454ff2eb45be9295e1f755613ebb',
		clientId: '53cf32b2d623408ba4eb67a8c09b70dd',
		template: '<li><a href="{{link}}" target="INSTA"><img src="{{image}}" /></a></li>',
		links: false,
		limit: 60 //max:60
	});
	userFeed.run();
}