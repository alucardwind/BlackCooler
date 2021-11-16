<?php
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
session_start();
?>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>

    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/main.css" type="text/css" media="screen"/>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/control.js"></script>
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/decorate.js"></script>
    <?php wp_head(); ?>
</head>
