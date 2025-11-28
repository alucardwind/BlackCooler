<div class="post_words">
    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
        <div class="cat_icon">
            C:\>
            <?php
            $pid = get_the_ID();
            $cats = get_the_category($pid);
            $cat_id = $cats[0]->term_id;
            switch ( $cat_id ) {
                case 0:
                    break;
                case 1:
                    ?>
                    <i class="fa-solid fa-bookmark"></i>
                    <?php
                    break;
                case 2:
                    ?>
                    <i class="fa-solid fa-video"></i>
                    <?php
                    break;
                case 3:
                    ?>
                    <i class="fa-solid fa-flask"></i>
                    <?php
                    break;
                case 4:
                    ?>
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <?php
                    break;
                case 5:
                    ?>
                    <i class="fa-solid fa-gamepad"></i>
                    <?php
                    break;
                case 6:
                    ?>
                    <i class="fa-solid fa-hand-spock"></i>
                    <?php
                    break;
            }
            ?>
        </div>
        
		<div class="post_title">
            <a href="<?php the_permalink() ?>" rel="bookmark"
               title="进入单页的 <?php the_title(); ?>">
				<?php the_title(); ?>
            </a>
        </div>

        <div class="post_info">
            <?php the_category(' '); ?><?php edit_post_link(__('编辑', 'blackcooler'), ''); ?>
        </div>
        
        <div class="post_content">
	        <?php the_content('...点这里浏览全文 »'); ?>
        </div>
        <div class="sign">
	        <strong><?php the_author(); ?></strong>创作于<?php the_time('Y.m.jS') ?>
        </div>
        <div class="readmore">
            <a href="<?php the_permalink() ?>" rel="bookmark"
               title="进入单页的 <?php the_title(); ?>">
		        点击进入完整文章
            </a>
        </div>
    </div>
</div>