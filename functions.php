<?php
function BlackCooler_scripts() {
	wp_enqueue_script( 'jquery-script', get_template_directory_uri() . '/js/jquery.min.js', array(), '3.6.0', false );
	wp_enqueue_script( 'font-awesome-script', get_template_directory_uri() . '/js/fontawesome.min.js', array(), '6.1.1', false );
	wp_enqueue_script( 'APlayer-script', get_template_directory_uri() . '/js/APlayer.min.js', array('jquery-script'), '1.10.1', false );
	wp_enqueue_script( 'meting-script', get_template_directory_uri() . '/js/Meting.min.js', array('jquery-script', 'APlayer-script'), '2.0.1', false );
	wp_enqueue_script( 'control-script', get_template_directory_uri() . '/js/control.js', array('jquery-script'), '1.0.1', false );
	wp_enqueue_script( 'decorate-script', get_template_directory_uri() . '/js/decorate.js', array('jquery-script'), '1.0.0', false );
	wp_enqueue_script( 'footer_control-script', get_template_directory_uri() . '/js/footer_control.js', array('jquery-script', 'control-script', 'decorate-script'), '1.0.0', true );
	wp_enqueue_style( 'APlayer-css',get_template_directory_uri() . '/css/APlayer.min.css' );
	wp_enqueue_style( 'main-css',get_template_directory_uri() . '/css/main.css' );
	wp_enqueue_style( 'mobile-css',get_template_directory_uri() . '/css/mobile.css' );
	wp_enqueue_style( 'single-css',get_template_directory_uri() . '/css/single.css' );
	wp_enqueue_style( 'page-css',get_template_directory_uri() . '/css/page.css' );
	wp_enqueue_style( 'plug_in-css',get_template_directory_uri() . '/css/plug_in.css' );
}

add_action( 'wp_enqueue_scripts', 'BlackCooler_scripts' );

//禁止使用顶部的管理员工具栏
show_admin_bar(false);
add_theme_support( "title-tag" );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) );

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
        $templates[] = "content/content_$name.php";
    }
    else {$templates[] = 'content/content.php';}
    locate_template( $templates, true, false);
}

function get_single( $name ) {
    $templates = array();
    $name      = (string) $name;
    if ( '' !== $name ) {
        $templates[] = "single_$name.php";
    }
    locate_template( $templates, true, false);
}

function get_single_page( $name ) {
	$templates = array();
	$name      = (string) $name;
	if ( '' !== $name ) {
		$templates[] = "page_$name.php";
	}
	locate_template( $templates, true, false);
}

function get_index( $name = null ) {
	$templates = array();
	$name      = (string) $name;
	if ( '' !== $name ) {
		$templates[] = "index_$name.php";
	}
    $templates[] = 'index.php';
	locate_template( $templates, true, false);
}

//更改comment的input顺序
function change_fields_order( $fields ) {
	$comment_field = $fields['comment'];
	$author_field = $fields['author'];
	$email_field = $fields['email'];
	$url_field = $fields['url'];
	$cookies_field = $fields['cookies'];
	unset( $fields['comment'] );
	unset( $fields['author'] );
	unset( $fields['email'] );
	unset( $fields['url'] );
	unset( $fields['cookies'] );
	// the order of fields is the order below, change it as needed:
	$fields['author'] = "<div class='call_name'>" . $author_field;
	$fields['email'] = $email_field;
	$fields['url'] = $url_field;
	$fields['cookies'] = $cookies_field . "</div>";
	//下面增加的div的结尾标识在comments.php中
	$fields['comment'] = "<div class='call_text'>" . $comment_field;
	// done ordering, now return the fields:
	return $fields;
}
add_filter( 'comment_form_fields', 'change_fields_order' );

function search_filter_page ($query) {
	if ($query->is_search) {
		$query->set('post_type', 'post');
	}
	return $query;
}
add_filter('pre_get_posts', 'search_filter_page');

function get_weibo( $name = null ) {
	$templates = array();
	$name      = (string) $name;
	if ( '' !== $name ) {
		$templates[] = "weibo_$name.php";
	}
	$templates[] = 'weibo.php';
	locate_template( $templates, true, false);
}