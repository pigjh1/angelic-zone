<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Angelic Zone</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.16.custom.min.js"></script>
<script type="text/javascript" src="js/design.js"></script>
<link rel="stylesheet" type="text/css" href="css/default.css" />
<link rel="stylesheet" type="text/css" href="css/layout.css" />
<link rel="stylesheet" type="text/css" href="css/jquery-ui-1.8.16.custom.css" />
<script type="text/javascript">
jQuery(function(){

	var article = $('.list_faq .article');
	article.addClass('hide');
	article.find('.a').slideUp(100);

	$('.list_faq .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			article.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.a').slideUp(100);
		}
	});

	$('.list_faq .hgroup .trigger').click(function(){
		var hidden = $('.list_faq .article.hide').length;
		if(hidden > 0){
			article.removeClass('hide').addClass('show');
			article.find('.a').slideDown(100);
		} else {
			article.removeClass('show').addClass('hide');
			article.find('.a').slideUp(100);
		}
	});

});
</script>
</head>
<body>
<div id="wrap">
	<div id="header">
		<? include '_include/header.php'; ?>
	</div>

	<div id="content">
		<h2 class="bg2">Who Am I</h2>

		<div class="list_faq">
			<div class="hgroup">
				<h3>이것이 궁금하다.</h3>
				<button type="button" class="trigger"><span>답변 모두 여닫기</span></button>
			</div>
			<ul>
				<li class="article">
					<p class="q"><a href="#a1" class="trigger">Q: 달걀의 노란자와 흰자중 어떤것을 좋아합니까?</a></p>
					<p class="a">A: 숨이 턱턱 막히는 노른자가 좋습니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a2" class="trigger">Q: 다른사람의 다이어리를 볼수 있다면 몰래 보겠습니까?</a></p>
					<p class="a">A: 다른 사람이 나의 다이어리를 보는건 싫지만, 저는 볼겁니다. 궁금하잖아요.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a3" class="trigger">Q: 사탕을 녹여서 먹습니까, 깨물어 먹습니까?</a></p>
					<p class="a">A: 반반. 열심히 녹여서 먹어야지 하는데 중간쯤 가면 깨물어 버린답니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a4" class="trigger">Q: 연필은 항상 뾰족하게 사용합니까?</a></p>
					<p class="a">A: 뾰족한게 좋아요. 바짝. 깍아서 사용한답니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a5" class="trigger">Q: 색연필은 한꺼번에 깍아서 사용합니까, 필요할때 바로 깍아서 사용합니까?</a></p>
					<p class="a">A: 한번에 깍아서 사용하는 편입니다. 사용중에 부러지거나 하면 아에 다른 색을 사용한답니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a6" class="trigger">Q: 브라보콘은 껍질을 한꺼번에 까서 먹습니까, 먹으면서 껍질을 깝니까?</a></p>
					<p class="a">A: 껍질은 죄다 까서 쓰레기통으로, 아이스크림은 입속으로 투입합니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a7" class="trigger">Q: 좋은 소식과 나쁜 소식이 있다면 어떤 것 부터 듣겠습니까?</a></p>
					<p class="a">A: .</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a8" class="trigger">Q: 치약을 짤때 밑에서 부터 짭니까, 중간부분을 짭니까?</a></p>
					<p class="a">A: 위에서부터 짭니다. 밑에서 부터는 짜기 힘들잖아요. 어느정도 쓰다 싶으면 밀대(?)같은걸로 위쪽으로 쭈욱- 해서 사용합니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a9" class="trigger">Q: 샴푸나 세제가 적게 남았을때는 버립니까, 물을 희석시켜 사용합니까?</a></p>
					<p class="a">A: 물에 몇번이나 희석해서 사용합니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a10" class="trigger">Q: 고기를 먹을때 구어주는걸 먹는편입니까, 구어주는 편입니까?</a></p>
					<p class="a">A: 구어주는걸 먹습니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a11" class="trigger">Q: 된밥을 좋아합니까, 진밥을 좋아합니까?</a></p>
					<p class="a">A: 된밥이 좋아요.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a12" class="trigger">Q: 좋아하는 음식은 처음에 먹습니까, 나중에 먹습니까?</a></p>
					<p class="a">A: 나중에 먹습니다.</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a13" class="trigger">Q: 닭고기의 어느 부위가 가장 좋나요?</a></p>
					<p class="a">A: 퍽퍽한 가슴살이 좋습니다. 다리는 살을 바르기 귀찮아서 싫어합니다 -ㅁ-;</p>
				</li>
				<li class="article">
					<p class="q"><a href="#a14" class="trigger">Q: 어떤 시간에 가장 생각을 많이 하나요?</a></p>
					<p class="a">A: 샤워할때. 잠자기전에. 변기위에서. 버스안에서.</p>
				</li>
			</ul>
		</div>

	</div>

	<div id="footer">
		<? include '_include/footer.php'; ?>
	</div>

</div>
</body>
</html>