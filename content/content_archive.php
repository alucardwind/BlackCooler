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
	rol_player(array('type' => 'netease'));
	rol_copyright();
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
					echo '<li><a href="' . get_category_link( $category->term_id ) . '">' . $category->name . "&nbsp;" . $category->count . '</a> </li> ';
				}
				?>
			</ul>
		</div>
	</div>
	<?php
	if (is_category()) { ?>
		<h2 class="pagetitle"><?php printf(__('以下文章归类于 &#8216;%s&#8217;','blackcooler'), single_cat_title('', false)); ?></h2>
		<?php /* If this is a tag archive */
	} elseif (is_tag()) { ?>
		<h2 class="pagetitle"><?php printf(__('Posts Tagged &#8216;%s&#8217;','blackcooler'), single_tag_title('', false)); ?></h2>
		<?php /* If this is a daily archive */
	} elseif (is_day()) { ?>
		<h2 class="pagetitle"><?php printf(__('以下文章写于 %s|Daily archive page','blackcooler'), get_the_time(__('F jS, Y','blackcooler'))); ?></h2>
		<?php /* If this is a monthly archive */
	} elseif (is_month()) { ?>
		<h2 class="pagetitle"><?php printf(__('以下文章写于 %s|Monthly archive page','blackcooler'), get_the_time(__('F, Y','blackcooler'))); ?></h2>
		<?php /* If this is a yearly archive */
	} elseif (is_year()) { ?>
		<h2 class="pagetitle"><?php printf(__('以下文章写于 %s|Yearly archive page','blackcooler'), get_the_time(__('Y','blackcooler'))); ?></h2>
		<?php /* If this is an author archive */
	} elseif (is_author()) { ?>
		<h2 class="pagetitle"><?php _e('Author Archive','blackcooler'); ?></h2>
		<?php /* If this is a paged archive */
	} elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
		<h2 class="pagetitle"><?php _e('Blog Archives','blackcooler'); ?></h2>
	<?php }
	$bc_post_num = 0;
	$con_num = 0;
	if (have_posts()) :
		while (have_posts()) : the_post();
			if ($bc_post_num == 0){
				$con_num++;
				echo "<div id='con" . $con_num . "' class='con'>";
			}
			if ($_GET['ds'] == 4){
				if ($bc_post_num == 2 || $bc_post_num == 4){
					$con_num++;
					echo "<div id='con" . $con_num . "' class='con'>";
				}
			}
			elseif ($_GET['ds'] == 3 && $bc_post_num == 3){
				$con_num++;
				echo "<div id='con" . $con_num . "' class='con'>";
			}
			get_content();
			if ($bc_post_num == 5){
				echo "</div>";
			}
			if ($_GET['ds'] == 4){
				if ($bc_post_num == 1 || $bc_post_num == 3){
					echo "</div>";
				}
			}
			elseif ($_GET['ds'] == 3 && $bc_post_num == 2){
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