<script>
    let body_clientWidth = document.body.clientWidth;
    check_client_width(body_clientWidth);
</script>
<?php if (is_home() || is_paged() || is_archive() || is_search()) : ?>
    <script>
        control_img();
        fix_code();
        show_decorate();
    </script>
<?php
endif;
if (is_single()) :
?>
    <script>
        change_page_width(body_clientWidth);
        control_img('.row .post_words', '.row .wp-block-image', 4);
        fix_code();
        show_single_decorate();
        change_sidebar();
    </script>
<?php
endif;
if (is_page()) :
?>
    <script>
        change_page_width(body_clientWidth);
        change_pagecol_width();
        show_page_decorate();
    </script>
<?php endif; ?>
