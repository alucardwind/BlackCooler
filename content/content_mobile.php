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
    <?php rol_copyright(); ?>
</div>
<div id="mobile_row1" class="mobile_row">
    <div id="page_bar">
		<?php wp_nav_menu(array('theme_location' => 'primary', 'menu_class' => 'nav-menu')); ?>
    </div>
	<?php
        while (have_posts()) : the_post();
        if (!is_sticky()) :
    ?>
        <div class="post_words">
            <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
                <div class="post_top">
                    <div class="post_info">
		                <?php the_category(' '); ?><?php edit_post_link(__('编辑', 'blackcooler'), ''); ?>
                    </div>
                    <div class="post_title">
                        <a href="<?php the_permalink() ?>" rel="bookmark"
                           title="进入单页的 <?php the_title(); ?>">
			                <?php the_title(); ?>
                        </a>
                    </div>
                </div>
                <div class="post_content">
					<?php the_content('...点这里浏览全文 »'); ?>
                </div>
                <div class="sign">
					<strong><?php the_author(); ?></strong>创作于<?php the_time('Y.m.jS') ?>
                </div>
            </div>
            <div class="readmore">
                <a href="<?php the_permalink() ?>" rel="bookmark"
                   title="进入单页的 <?php the_title(); ?>">
                    点击进入完整文章
                </a>
            </div>
        </div>
		<?php  endif;
	endwhile; ?>
</div>
<div id="mobile_row2" class="mobile_row">
	<?php get_sidebar() ?>
</div>