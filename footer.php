<script>
    let body_clientWidth = document.body.clientWidth;
    check_client_width(body_clientWidth);
</script>
<?php if (is_home() || is_paged() || is_archive() || is_search()) : ?>
<script>
    show_decorate();
</script>
<?php
endif;
if (is_single()) :
?>
<script>
    change_page_width(body_clientWidth);
    show_single_decorate();
</script>
<?php endif; ?>