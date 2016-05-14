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

	$("#profile .tabWrap").tabSelector("h3");

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
	var img4;
	var img5;

	var dataHTML;
	var o = $("#portfolio ul.pr");

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
		img4 = data[i].img4;
		img5 = data[i].img5;

		picDataHtml	=	"<ul class='pic'>"+
								"	<li><img src='images/portfolio/"+ directory +"/"+ img1 +"' /></li>"+
								"</ul>";
		siteDataHtml	=	"<li><a href='"+ site +"' target='_blank'>"+ site +"</a></li>";
		detailDataHtml	=	"<li>작업참여 | "+ rate +"</li><li>작업기간 | "+ period +"</li><li>작업환경 | "+ working +"</li>";

		if (img1 == "") picDataHtml = "";
		if (siteState == "") siteDataHtml = "";
		if (category == "유지보수") detailDataHtml = "";

		dataHTML =	"	<li class='box "+ year +"'>"+
							picDataHtml +
							"		<ul class='cont'>"+
							"			<li>"+ project +"</li>"+
							siteDataHtml +
							detailDataHtml +
							"		</ul>";
							"	</li>";

		if (state == "")  o.append(dataHTML);
	}

	// Grid Layout
	var $container = $('#portfolio ul.pr');
	var $optionSets = $('.optionSet');
	var $optionLinks = $optionSets.find('a');

	$container.isotope({
		masonry: {
			itemSelector : '.box',
			columnWidth: 1
		}
	});

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


/* 스킬 그래프 */
var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('diagram', 600, 600),
			rad = 73,
			defaultText = 'Skills',
			speed = 250;

		r.circle(300, 300, 85).attr({ stroke: 'none', fill: '#193340' });

		var title = r.text(300, 300, defaultText).attr({
			font: '20px Arial',
			fill: '#fff'
		}).toFront();

		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 300 + rad * Math.cos(b),
				sy = 300 - rad * Math.sin(b),
				x = 300 + rad * Math.cos(a),
				y = 300 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}

		$('.get').find('.arc').each(function(i){
			var t = $(this),
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();

			rad += 30;
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });

			z.mouseover(function(){
                this.animate({ 'stroke-width': 50, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
				});
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': 26, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});
            });
		});
	}
}
$(function(){ o.init(); });


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
