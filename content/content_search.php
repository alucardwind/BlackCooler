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
    ?>
</div>