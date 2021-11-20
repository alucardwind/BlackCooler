<?php
get_header();
?>
<body>
<div id="page">
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
	get_footer();
	?>
</div>
</body>
</html>
