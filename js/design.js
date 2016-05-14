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

	setPortfolio();
});


function setPortfolio(){
	var project;
	var company;
	var category;
	var state;
	var site;
	var siteState;
	var year
	var rate;;
	var period;
	var working;
	var directory;
	var img1;
	var img2;
	var img3;

	var o = $(".portfolio ul.pr");
	var o2 = $(".portfolio ul.pr2");

	for (i=0; i< data.length; i++) {
		project = data[i].project;
		company = data[i].company;
		category = data[i].category;
		state = data[i].state;
		site = data[i].site;
		siteState = data[i].siteState;
		rate = data[i].rate;
		year = data[i].year;
		period = data[i].period;
		working = data[i].working;
		directory = data[i].directory;
		img1 = data[i].img1;
		img2 = data[i].img2;
		img3 = data[i].img3;

		picDataHtml	=	"<ul class='pic'>"+
								"	<li><img src='images/portfolio/"+ directory +"/"+ img1 +"' /></li>"+
								"</ul>";
		siteDataHtml	=	"<li><a href='"+ site +"' target='_blank'>"+ site +"</a></li>";
		detailDataHtml	=	"<li>참여 | "+ rate +"</li><li>기간 | "+ period +"</li><li>메모 | "+ working +"</li>";

		if (img1 == "") picDataHtml = "";
		if (siteState == "") siteDataHtml = "";

		dataHTML =	"	<li class='box "+ year +"'>"+
							picDataHtml +
							"		<ul class='cont'>"+
							"			<li>"+ project +"</li>"+
							siteDataHtml +
							detailDataHtml +
							"		</ul>";
							"	</li>";

		if (category == "유지보수") {
			dataHTML = "";
			dataHTML2 = "<li class='box "+ year +"'>"+ project +"</li>";
			if (state == "Y")  o2.append(dataHTML2);
		}

		if (state == "Y")  o.append(dataHTML);
	}

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
	}, 500);

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
}

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



/* tab */
jQuery.fn.tabSelector = function(link){
	var $tab = $(this);

	$(this).find(link).eq(0).addClass("on");
	$(this).find(".tabCont").eq(0).show();

	$tab.find(link).each(function(idx){
		$(this).find("a").bind("click focus", function(event){
			$(this).parent().addClass("on").siblings(link).removeClass("on");
			$(this).parent().next(".tabCont").show().siblings(".tabCont").hide();

			event.preventDefault();
		});
	});
};
