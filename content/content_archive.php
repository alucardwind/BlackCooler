<div id="col0" class="col">
	<div id="title">
		<div id="name">
			<a href="<?php echo esc_url(home_url('/')); ?>"
			   title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>"
			   rel="home"><?php bloginfo('name'); ?></a>
		</div>
		<div id="info">
			<?php bloginfo('description'); ?>
		</div>
	</div>
	<div id="page_bar">
		<?php wp_nav_menu(array('theme_location' => 'primary', 'menu_class' => 'nav-menu')); ?>
	</div>
	<?php
    echo do_shortcode('[redonleft_player type="netease"]');
    echo do_shortcode('[redonleft_copyright]');
	?>
</div>
<div id="col1" class="col">
	<?php get_sidebar() ?>
</div>
<div id="col2" class="col">
	<div id="col2_top">
		<div id="search_form">
			<?php get_search_form()?>
		</div>
		<div id="get_archives">
			文章归档
			<select name="archive-dropdown" onchange="document.location.href=this.options[this.selectedIndex].value;">
				<option value=""><?php esc_attr( _e( '选择月份', 'blackcooler' ) ); ?></option>
				<?php
				$args = array(
					'type'				=> 'monthly',
					'limit'				=> '',
					'format'			=> 'option',
					'before'			=> '',
					'after'				=> '',
					'show_post_count'	=> true,
					'echo'				=> 1,
					'order'				=> 'DESC',
					'post_type'			=> 'post'
				);
				wp_get_archives( $args );
				?>
			</select>
		</div>
		<div id="get_cats">
			<ul>
				<?php
				$categories=get_categories();
                foreach($categories as $category) {
                    echo '<li><a href="' . get_category_link( $category->term_id ) . '">';
                    switch ($category->term_id) {
                        default:
                            echo '<i class="fa-solid fa-bookmark"></i>';
                            break;
                        case 2:
                            echo '<i class="fa-solid fa-video"></i>';
                            break;
                        case 3:
                            echo '<i class="fa-solid fa-flask"></i>';
                            break;
                        case 4:
                            echo '<i class="fa-solid fa-chalkboard-user"></i>';
                            break;
                        case 5:
                            echo '<i class="fa-solid fa-gamepad"></i>';
                            break;
                        case 6:
                            echo '<i class="fa-solid fa-hand-spock"></i>';
                            break;
                    }
                    echo "&nbsp;" . $category->name . "&nbsp;" . $category->count . '</a> </li> ';
                }
				?>
			</ul>
		</div>
	</div>
    <h2 class="pagetitle">
	<?php
	if (is_category()) {
        printf(__('以下文章归类于 &#8216;%s&#8217;','blackcooler'), single_cat_title('', false));
	} elseif (is_tag()) {
        printf(__('Posts Tagged &#8216;%s&#8217;','blackcooler'), single_tag_title('', false));
	} elseif (is_day()) {
        printf(__('以下文章写于 %s|Daily archive page','blackcooler'), get_the_time(__('F jS, Y','blackcooler')));
	} elseif (is_month()) {
        printf(__('以下文章写于 %s|Monthly archive page','blackcooler'), get_the_time(__('F, Y','blackcooler')));
	} elseif (is_year()) {
        printf(__('以下文章写于 %s|Yearly archive page','blackcooler'), get_the_time(__('Y','blackcooler')));
	} elseif (is_author()) {
        _e('Author Archive','blackcooler');
	} elseif (isset($_GET['paged']) && !empty($_GET['paged'])) {
        _e('Blog Archives','blackcooler'); 
    }?>
    </h2>
	<?php
	$bc_post_num = 0;
	$con_num = 0;
	if (have_posts()) :
		while (have_posts()) : the_post();
            if ($bc_post_num == 0){
                $con_num++;
                echo "<div id='con" . $con_num . "' class='con'>";
            }
            elseif ($_GET['ds'] == 4){
                if ($bc_post_num == 3){
                    $con_num++;
                    echo "<div id='con" . $con_num . "' class='con'>";
                }
            }
            elseif ($_GET['ds'] == 3){
                if ($bc_post_num == 2 || $bc_post_num == 4){
                    $con_num++;
                    echo "<div id='con" . $con_num . "' class='con'>";
                }
            }
            elseif ($_GET['ds'] == 2){
                $con_num++;
                echo "<div id='con" . $con_num . "' class='con'>";
            }
            get_content();
            if ($bc_post_num == 5){
                echo "</div>";
            }
            elseif ($_GET['ds'] == 4){
                if ($bc_post_num == 2){
                    echo "</div>";
                }
            }
            elseif ($_GET['ds'] == 3){
                if ($bc_post_num == 1 || $bc_post_num == 3){
                    echo "</div>";
                }
            }
            elseif ($_GET['ds'] == 2){
                echo "</div>";
            }
            $bc_post_num++;
		endwhile;
	endif;
	page_navi( array(
		'items'        => 7,
		'prev_label'   => '上一页',
		'next_label'   => '下一页',
		'first_label'  => '首页',
		'last_label'   => '末页',
		'show_num'     => true,
		'num_position' => 'after'
	) );
	?>
</div>