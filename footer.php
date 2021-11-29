
<?php if (is_home() || is_paged() || is_archive() || is_search()) :
    if ($_GET['ds'] == 1) :?>
        <script>
            $('#page').width(body_clientWidth);
            $('#page').width(body_clientWidth);
            $(document).ready(function () {
                control_img('.mobile_row .post_words', '.mobile_row .wp-block-image', 2);
                fit_all_functions();
                control_catbar();
                mobile_control_sidebar();
                mobile_decorate();
            });
        </script>
    <?php endif; ?>
    <script>
        // 下面方法的调用顺序很重要，无论是那种情况，都应该是先改变页面宽度，
        // 再调整文章内的各种图片元素等用于最终确定高度，
        // 最后再描绘图像
        $(document).ready(function () {
            control_img();
            fit_all_functions();
            show_decorate();
        });
    </script>
<?php
endif;
if (is_single()) :
?>
    <script>
        $(document).ready(function () {
            change_page_width(body_clientWidth);
            control_img('.row .post_words', '.row .wp-block-image', 4);
            fit_all_functions();
            display_readmore();
            show_single_decorate();
            change_sidebar();
        });
    </script>
<?php
endif;
if (is_page()) :
?>
    <script>
        $(document).ready(function () {
            change_page_width(body_clientWidth);
            change_pagecol_width();
            fit_all_functions();
            display_readmore();
            show_page_decorate();
        });
    </script>
<?php endif; ?>
