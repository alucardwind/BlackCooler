<?php get_header(); ?>
<body>
<script>
    let body_clientWidth = document.body.clientWidth;
    check_client_width(body_clientWidth);
</script>
<div id="page">
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
    get_footer();
    ?>
</div>
</body>
</html>
