<!DOCTYPE HTML>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    <?php
    date_default_timezone_set("Asia/Shanghai");
    setcookie("is_home", is_home(), ['samesite' => 'Lax']);
    setcookie("is_paged", is_paged(), ['samesite' => 'Lax']);
    setcookie("is_search", is_search(), ['samesite' => 'Lax']);
    setcookie("is_single", is_single(), ['samesite' => 'Lax']);
    setcookie("is_page", is_page(), ['samesite' => 'Lax']);
    wp_head();
    ?>
</head>
<body>
<?php wp_body_open(); ?>
<div id="show_large_image"></div>