<?php
session_start();
require 'saetv2.ex.class.php';
?>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    <title>
        <?php
        if (is_singular()) {
	        the_title();
            echo '-';
	        bloginfo('name');
        }
        else {bloginfo('name');}
        ?>
    </title>
    <!-- js库 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
    <!-- 加载APlayer -->
    <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
    <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
    <!-- 加载主题CSS -->
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/main.css?ver=1.1" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/mobile.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/single.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/page.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/plug_in.css" type="text/css" media="screen"/>
    <!-- 加载主题js -->
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/control.js?ver=1.1"></script>
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/decorate.js"></script>
    <?php wp_head(); ?>
</head>
<body>
<script>
    body_clientWidth = document.documentElement.clientWidth;
    check_client_width(body_clientWidth);
</script>
<div id="show_large_image"></div>