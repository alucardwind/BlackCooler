$(document).ready(function () {
    body_clientWidth = document.documentElement.clientWidth;
    check_client_width(body_clientWidth);
    close_black();
});
if (GetQueryString("ds") == 1){
    $(document).ready(function () {
        $('#page').width(body_clientWidth);
        control_img('.mobile_row .post_content', '.mobile_row figure', 2);
        fit_all_functions();//注意fit_all_functions()的顺序，关系到功能是否有效
        // control_pagebar();
        mobile_control_sidebar();
        mobile_decorate();
        display_pagebar();
    });
}
else if (getCookie("is_single") == 1){
    $(document).ready(function () {
        change_page_width(body_clientWidth);
        control_img('.row .post_content', '.row figure', 4);
        fit_all_functions();
        display_readmore();
        change_sidebar();
        show_single_decorate();
    });
}
else if (getCookie("is_page") == 1) {
    $(document).ready(function () {
        change_page_width(body_clientWidth);
        change_pagecol_width();
        fit_all_functions();
        display_readmore();
        show_page_decorate();
    });
}
else {
    // 下面方法的调用顺序很重要，无论是那种情况，都应该是先改变页面宽度，
    // 再调整文章内的各种图片元素等用于最终确定高度，
    // 最后再描绘图像
    $(document).ready(function () {
        control_img();
        fit_all_functions();
        show_decorate();
    });
}