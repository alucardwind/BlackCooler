<?php get_header(); ?>

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
			get_content('search');
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
