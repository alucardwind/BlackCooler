<?php
session_start();
?>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width,initial-scale=0.6">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/control.js"></script>
    <?php wp_head(); ?>
</head>
