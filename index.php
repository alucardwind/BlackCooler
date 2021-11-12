<?php get_header(); ?>
<body>
<script>
    let body_clientWidth = document.body.clientWidth;
    check_client_width(body_clientWidth);
</script>
<?php
if (isset($_GET['ds'])){
    if ($_GET['ds'] == 0){

    }
    elseif ($_GET['ds'] == 1){
        get_content('mobile');
    }
    else{
        get_content('pc');
    }
}
?>
</body>
</html>