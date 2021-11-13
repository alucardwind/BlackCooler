<div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
	<?php the_category(' '); ?><?php edit_post_link(__('编辑', 'blackhack'), ''); ?>
    <a href="<?php the_permalink() ?>" rel="bookmark"
       title="进入单页的 <?php the_title(); ?>">
		<?php the_title(); ?>
    </a>
<?php
the_content('...点这里浏览全文 »');
?>
</div>