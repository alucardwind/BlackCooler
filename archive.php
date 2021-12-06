<?php
get_header();
?>
<body>
<script>
    let body_clientWidth = document.body.clientWidth;
    check_client_width(body_clientWidth);
</script>
<div id="page">
    <div id="black_cover"></div>
	<?php
	if (isset($_GET['ds'])){
		if ($_GET['ds'] == 0){

		}
		elseif ($_GET['ds'] == 1){
			get_content('mobile');
		}
		else{
			get_content('archive');
		}
	}
	else {
		echo '网站不兼容IE浏览器<br>website Not compatible with IE(Internet Explorer) browser';
	}
	get_footer();
	?>
</div>
</body>
</html>
