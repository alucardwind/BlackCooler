<?php
session_start();
require 'saetv2.ex.class.php';
?>
<!DOCTYPE HTML>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    <?php
    date_default_timezone_set("Asia/Shanghai");
    wp_head();
//    setcookie("is_home", is_home(), time()-3600);
//    setcookie("is_paged", is_paged(), time()-3600);
//    setcookie("is_search", is_search(), time()-3600);
//    setcookie("is_single", is_single(), time()-3600);
//    setcookie("is_page", is_page(), time()-3600);
    setcookie("is_home", is_home());
    setcookie("is_paged", is_paged());
    setcookie("is_search", is_search());
    setcookie("is_single", is_single());
    setcookie("is_page", is_page());
    ?>
</head>
<body>
<?php wp_body_open(); ?>
<div id="show_large_image"></div>