/**********************************************************
 * 파일명	:design.js
 * 작성자	:김주희
 * 작성일	:2014.01.17
***********************************************************/

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