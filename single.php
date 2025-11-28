<?php get_header(); ?>

<div id="page">
    <div id="black_cover"></div>
    <?php
    if (isset($_GET['ds'])){
        if ($_GET['ds'] == 0){

        }
        elseif ($_GET['ds'] == 1){
            get_single('mobile');
        }
        else{
            get_single('pc');
        }
    }
    else {
	    echo 'Redonleft.com<br>加载页面中...';
    }
    get_footer();
    ?>
</div>
</body>
</html>
