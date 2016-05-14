<? include 'include/header_share.php'; ?>
<body>
<div id="wrap">
	<? include 'include/header.php'; ?>

	<section id="container" class="photo">
		<h2 class="bg4">Photo</h2>
		<h3>Instagram</h3>
		<ul id="instafeed" class="instagram"></ul>

		<h3>ToyCamera</h3>
		<ul id="lomofeed" class="lomography"></ul>
	</section>

	<? include 'include/footer.php'; ?>
</div>

<script type="text/javascript" src="/js/lib/instafeed.min.js"></script>
<script type="text/javascript">
var userFeed = new Instafeed({
	get: 'user',
	userId: 247077117,
	accessToken: '247077117.467ede5.4f9addd68e2d45c288dd3bc18c24dabc',
	template: '<li><a href="{{link}}" target="INSTA"><img src="{{image}}" /></a></li>',
	links: false,
	limit: 32 //max:60
});
userFeed.run();

var xmlhttp = new XMLHttpRequest();
//var url = "http://www.lomography.co.kr/homes/pigjh1/stream.json";
var url = "/js/data/lomo.json";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "";
	var limit = 32;

    for(i = 0; i < limit; i++) {
        out += "<li><a href='http://www.lomography.co.kr" + arr[i].url + "' target='LOMO'><img src=" + arr[i].src + " /></a></li>";
    }
    document.getElementById("lomofeed").innerHTML = out;
}

</script>

</body>
</html>