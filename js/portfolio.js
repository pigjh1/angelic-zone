/**********************************************************
 * 파일명	:design.js
 * 설명		:디자인용 스크립트
 * 작성자	:김주희
 * 작성일	:2014.01.17
***********************************************************/

$(window).load(function(){
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

		picDataHtml =	"<ul class='pic'>"+
								"	<li><img src='/images/portfolio/"+ directory +"/"+ img1 +"' /></li>"+
								"</ul>";
		siteDataHtml =	"<li class='url'><a href='"+ site +"' target='_blank'>"+ site +"</a></li>";
		rateDataHtml =	"<li><span>참여</span> | "+ rate +"</li>";
		periodDataHtml =	"<li><span>기간</span> | "+ period +"</li>";
		workingDataHtml="<li><span>비고</span> | "+ working +"</li>";

		if (img1 == "") picDataHtml = "";
		if (siteState == "N") siteDataHtml = "";
		if (rate == "") rateDataHtml = "";
		if (period == "") periodDataHtml = "";
		if (working == "") workingDataHtml = "";

		dataHTML =	"	<li class='box "+ year +"'>"+
							picDataHtml +
							"		<ul class='cont'>"+
							"			<li class='tit'>"+ project +"</li>"+
							siteDataHtml +
							rateDataHtml +
							periodDataHtml +
							workingDataHtml +
							"		</ul>";
							"	</li>";

		if (state == "Y") o.append(dataHTML);
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
}