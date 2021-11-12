pc
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