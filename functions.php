<?php
function get_content( $name = null ) {
    $templates = array();
    $name      = (string) $name;
    if ( '' !== $name ) {
        $templates[] = "content_{$name}.php";
    }
    $templates[] = 'content.php';
    locate_template( $templates, true, false);
}