/**********************************************************
 * 파일명	:design.js
 * 설명		:디자인용 스크립트
 * 작성자	:김주희
 * 작성일	:2011.05.11
***********************************************************/

jQuery(function($){
	var tab = $('.lnb');
	tab.removeClass('js_off');
	function onLnb(){
		var t = $(this);
		var myclass = [];
		t.parentsUntil('.lnb:first').filter('li').each(function(){
			myclass.push( $(this).attr('class') );
		});
		myclass = myclass.join(' ');
		if (!tab.hasClass(myclass)) tab.attr('class','lnb').addClass(myclass);
	}
	tab.find('li>a').mouseover(onLnb).focus(onLnb);
});