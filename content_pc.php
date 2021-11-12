<div id="col0" class="col">
    <div class="name">
        <a href="<?php echo esc_url(home_url('/')); ?>"
           title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>"
           rel="home"><?php bloginfo('name'); ?></a>
    </div>
    <div class="info">
        <?php bloginfo('description'); ?>
    </div>
</div>
<div id="col1" class="col">
    <?php get_sidebar() ?>
</div>
<div id="col2" class="col">
    <?php
    $bc_post_num = 0;
    if (have_posts()) :
        while (have_posts()) : the_post();
            if ($bc_post_num == 1){
                echo "<div class='con'>";
            }
            if ($_GET['ds'] == 4){
                if ($bc_post_num == 3 || $bc_post_num == 5){
                    echo "<div class='con'>";
                }
            }
            elseif ($_GET['ds'] == 3 && $bc_post_num == 4){
                echo "<div class='con'>";
            }
            get_content();
            if ($bc_post_num == 6){
                echo "</div>";
            }
            if ($_GET['ds'] == 4){
                if ($bc_post_num == 2 || $bc_post_num == 4){
                    echo "</div>";
                }
            }
            elseif ($_GET['ds'] == 3 && $bc_post_num == 3){
                echo "</div>";
            }
            $bc_post_num++;
        endwhile;
    endif;
    ?>
</div>