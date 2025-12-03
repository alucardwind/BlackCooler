<?php get_header(); ?>

<div id="page">
	<?php
	if (isset($_GET['ds'])){
		if ($_GET['ds'] == 0){

		}
        elseif ($_GET['ds'] == 1){
			?>
            <div id="mobile_row0" class="mobile_row">
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
		        <?php echo do_shortcode('[redonleft_copyright]'); ?>
            </div>
            <div id="mobile_row1" class="mobile_row">
                <div id="page_bar">
			        <?php wp_nav_menu(array('theme_location' => 'primary', 'menu_class' => 'nav-menu')); ?>
                </div>
                <div id="post404">
                    <h2>你访问的页面不存在</h2>
                </div>
            </div>
            <div id="mobile_row2" class="mobile_row">
		        <?php get_sidebar() ?>
            </div>
                <?php
		}
		else{?>
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
                <div id="post404">
                    <h2>你访问的页面不存在</h2>
                </div>
            </div>
    <?php
		}
	}
	else {
		echo '网站不兼容IE浏览器<br>website Not compatible with IE(Internet Explorer) browser';
	}
	get_footer();
	?>
</div>
</body>
</html>
