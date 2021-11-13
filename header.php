<?php
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
session_start();
?>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width,initial-scale=0.6">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/main.css" type="text/css" media="screen"/>
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/control.js"></script>
    <?php wp_head(); ?>
</head>
