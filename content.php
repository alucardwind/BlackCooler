<div class="post_words">
    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
        <div class="post_info">
	        <?php the_category(' '); ?><?php edit_post_link(__('编辑', 'blackhack'), ''); ?>
        </div>
		<div class="post_title">
            <a href="<?php the_permalink() ?>" rel="bookmark"
               title="进入单页的 <?php the_title(); ?>">
				<?php the_title(); ?>
            </a>
        </div>
        <div class="post_content">
	        <?php the_content('...点这里浏览全文 »'); ?>
        </div>
        <div class="sign">
	        <?php the_author(); ?></strong>创作于<?php the_time('Y.m.jS') ?>
        </div>
    </div>
</div>