/**********************************************************
 * 파일명	:design.js
 * 설명		:디자인용 스크립트
 * 작성자	:김주희
 * 작성일	:2014.01.17
***********************************************************/

$(window).load(function(){
	$("#gnb a").click(function() {
		$.scrollTo($($(this).attr("href")), {
			duration: 750,
			offset : 60
		});
		return false;
	});

	var $container = $('#portfolio ul.pr');
	$container.isotope({
		masonry: {
			itemSelector : '.box',
			columnWidth: 1
		}
	});

	//$("#portfolio article").hide();
	//$("#portfolio article").eq(0).show();

	$("#portfolio nav a").click(function(){
		var datalink = $(this).attr("href");
		$("#portfolio article").hide();
		$(datalink).show();
	});

	$("#portfolio .pic").click(function(){
		$("#portfolioPop").layerPopup();
		var picData = $(this).parents("li").find(".pic").html();
		var contData = $(this).parents("li").find(".cont").html();

		picData = "<ul class='pic'>" + picData + "</ul>";
		contData = "<ul class='cont'>" + contData + "</ul>";

		$(".picArea").append(picData);
		$(".contArea").append(contData);

		$(".picArea").each(function(){
			o=$(this).find(".pic"); //슬라이드 이미지
			b_prev=$(this).find(".prev"); //이전버튼
			b_next=$(this).find(".next"); //다음버튼
			len=o.find("img").length;

			o.cycle({
				before : function(currSlideElement, nextSlideElement){
				  o.css('height', $(nextSlideElement).height()+'px');
				},
				fx: 'scrollHorz',
				timeout: 0,
				speed: 500,
				prev: b_prev,
				next: b_next,
				pagerAnchorBuilder: function (idx, pic) {
					return '<li>'+(idx+1)+'</li>';
				}
			});
		});

		return false;
	});

	var article = $('.faq .article');
	article.addClass('none');
	article.find('.a').slideUp(100);

	$('.faq .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('none')){
			article.addClass('none').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			article.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			myArticle.removeClass('none').addClass('show');
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('none');
			myArticle.find('.a').slideUp(100);
		}
	});

});

jQuery.fn.layerPopup = function(){
	var obj = $(this);
	function topPos(){
		var top = $(window).height() < obj.height() ? "0" : ($(window).height() - obj.height()) / 2;
		return top;
	}
	$.blockUI({
		message: obj,
		css: {
			top: topPos(),
			left: ($(window).width() - obj.width()) /2 + "px"
		}
	});
	obj.find(".popup_close").click(function(){
		$.unblockUI();
		$(".picArea").html("");
		$(".contArea").html("");
		return false;
	});

	$(window).resize(function(){
		$(".blockPage").css({
			top: topPos(),
			left: ($(window).width() - obj.width()) /2 + "px"
		});
	});
}