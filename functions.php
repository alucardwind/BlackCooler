<?php
//禁止使用顶部的管理员工具栏
show_admin_bar(false);

//加入侧边栏
function blackcooler_widgets_init() {
	register_sidebar( array(
		'id'            => 'sidebar-1'
	) );
}
add_action( 'widgets_init', 'blackcooler_widgets_init' );

function get_content( $name = null ) {
    $templates = array();
    $name      = (string) $name;
    if ( '' !== $name ) {
        $templates[] = "content_{$name}.php";
    }
    $templates[] = 'content.php';
    locate_template( $templates, true, false);
}