<? include 'include/header_share.php'; ?>
<body>
<div id="wrap">
	<? include 'include/header.php'; ?>

	<section id="container" class="portfolio">
		<h2 class="bg3">Portfolio</h2>

		<article>
			<ul id="filter" class="optionSet" data-option-key="filter">
				<li><a href="#show-all" data-option-value="*" class="selected">ALL</a></li>
				<li><a href="#2014" data-option-value=".2014">2014</a></li>
				<li><a href="#2013" data-option-value=".2013">2013</a></li>
				<li><a href="#2012" data-option-value=".2012">2012</a></li>
				<li><a href="#2011" data-option-value=".2011">2011</a></li>
				<li><a href="#2010" data-option-value=".2010">2010</a></li>
				<li><a href="#2009" data-option-value=".2009">2009</a></li>
			</ul>

			<h3>신규 구축 및 리뉴얼</h3>
			<div class="loader"><img src="/images/common/loader.gif" alt="" /></div>

			<ul class="pr">
			</ul>

			<h3>유지보수 업무</h3>
			<ul class="pr2">
			</ul>
		</article>
	</section>

	<? include 'include/footer.php'; ?>
</div>

<script src="/js/data/portfolio.js"></script>

</body>
</html>