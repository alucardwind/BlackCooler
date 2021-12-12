"use strict";
const mobile_width = 803;
const old_middle_screen_width = 1323;
const new_middle_screen_width = 1871;
const single_max_width = 1640;
const single_min_width = 825;
let body_clientWidth;

function fit_all_functions() {
    fix_code();
    control_media_text();
    control_gallery();
    control_embed();
}

function GetQueryString(name)
{
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return false;
}

function changeURLArg(url,arg,arg_val)
{
    let pattern=arg+'=([^&]*)';
    let replaceText=arg+'='+arg_val;
    if(url.match(pattern)){
        let tmp='/('+ arg+'=)([^&]*)/gi';
        tmp=url.replace(eval(tmp),replaceText);
        return tmp;
    }
    else{
        if(url.match('[\?]')){
            return url+'&'+replaceText;
        }
        else{
            return url+'?'+replaceText;
        }
    }
}

function check_client_width(bcw) {
    let ds = 0
    if(bcw < mobile_width){
        ds = 1
    }
    else if(mobile_width <= bcw && bcw < old_middle_screen_width){
        ds = 2
    }
    else if (old_middle_screen_width <= bcw && bcw <new_middle_screen_width){
        ds = 3
    }
    else if (bcw >= new_middle_screen_width){
        ds = 4
    }
    if(!GetQueryString("ds") || GetQueryString("ds") != ds){
        window.location.href = changeURLArg(window.location.href, 'ds', ds)
    }
}

function change_page_width(bcw) {
    let page_width = 0;
    if (bcw > single_max_width){
        page_width = single_max_width;
    }
    else if (bcw < single_min_width) {
        page_width = single_min_width;
    }
    else {
        page_width = bcw;
    }
    $('#page').width(page_width);
    //在给page加上宽度后，有可能出现滚动条从而改变可视宽度，所以需要再次进行计算宽度
    bcw = document.body.clientWidth;
    if (bcw > single_max_width){
        page_width = single_max_width;
    }
    else if (bcw < single_min_width) {
        page_width = single_min_width;
    }
    else {
        page_width = bcw;
    }
    $('#page').width(page_width);
}

function change_sidebar() {
    let first_li = $('.row .widget');
    if (first_li.length > 0){
        let sidebar_width = $('.row #sidebar').outerWidth();
        let li_width = Math.floor(sidebar_width / first_li.length);
        let the_first = true;
        first_li.each(function () {
            $(this).css('width', li_width);
            if (the_first) {
                $(this).addClass('sidebar_first');
                the_first = false;
            }
        });
    }
}

function change_pagecol_width() {
    let page_width = $('#page').outerWidth();
    let title_width = $('.col').outerWidth();
    $('.page_col').css('width', page_width - title_width);
}

function control_img(select1 = '.col .post_words', select2 = '.col figure', w = 2) {
    let post_width = $(select1).width();
    $(select2).each(function () {
        let img_width = post_width;
        if ($(this).hasClass('wp-block-image')){
            img_width = post_width * 2 / w - 20;
            $(this).find('img').attr('width', img_width);
            $(this).find('img').attr('height', img_width / 16 * 9);
            $(this).width(img_width);
            $(this).height(img_width / 16 * 9);
        }
        else if ($(this).hasClass('alignleft') || $(this).hasClass('alignright')) {
            img_width = post_width / w - 20;
            $(this).find('img').attr('width', img_width);
            $(this).find('img').attr('height', img_width / 16 * 9);
            $(this).width(img_width);
            $(this).height(img_width / 16 * 9);
        }
        else if ($(this).hasClass('aligncenter')) {
            img_width = post_width * 2 / w - 20;
            $(this).find('img').attr('width', img_width);
            $(this).find('img').attr('height', img_width / 16 * 9);
            $(this).width(img_width);
            $(this).height(img_width / 16 * 9);
        }
    });
    $('.col .wp-block-image').each(function () {
        show_big_img(this);
    });
}

function show_big_img(element) {
    let screen_heigth = document.documentElement.clientHeight;//在html5规范中，应用documentElement来获取浏览器高度
    $(element).find('img').mouseenter(function () {
        let img = this;
        let img_src = $(img).attr('src');
        let img_width = img.naturalWidth;
        let img_height = img.naturalHeight;
        if (!img_width || !img_height) {
            return;
        }
        let bili = img_height / img_width;
        let pos = img.getBoundingClientRect();
        let img_small_width = pos.width;
        let x = 0;
        let y = 0;
        if (pos.left + img_small_width /2 > body_clientWidth / 2) {
            x = pos.left - img_width - 30;
            if (x < 40) {
                x = 40;
            }
            img_width = pos.left - 40 - x;
        }
        else {
            x = pos.right + 40;
            if (x + img_width > body_clientWidth - 40){
                img_width = body_clientWidth - 60 - x;
            }
        }
        img_height = img_width * bili;
        if (img_height >= screen_heigth - 40) {
            img_height = screen_heigth - 40;
            img_width = img_height / bili;
        }
        if (pos.top < 40) {
            y = 40;
        }
        else if (pos.top + img_height > screen_heigth - 40){
            y = screen_heigth - img_height - 40;
        }
        else {
            y = pos.top;
        }
        $.ajax({
            url:'/wp-content/themes/blackcooler/ajax/ajax_show_img.php',
            method: 'GET',
            data:{
                img_src:img_src,
                imgwidth:img_width,
                imgheight:img_height
            },
            success:function (result) {
                $("#show_large_image").html(result);
                $("#show_large_image").css("left",x+"px");
                $("#show_large_image").css("top",y+"px");
                $("#show_large_image").fadeIn('fast');
            }
        });
    });
    $(element).find('img').mouseleave(function () {
        $("#show_large_image").fadeOut('fast');
    });
}

function fix_code() {
    let block_code = $('.wp-block-code');
    if (block_code.length == 0){
        return;
    }
    block_code.each(function () {
        let code = $(this).find('code');
        let code_height = code.height();
        let num = code_height / 18;
        let ul_node = document.createElement('ul');
        ul_node.setAttribute('class', 'code_list_num');
        for(let ii = 1; ii <= num; ii++){
            let li_node = document.createElement("LI");
            let li_node_text = document.createTextNode(ii);//创建li内容
            li_node.appendChild(li_node_text);//将li内容填入li标签内
            ul_node.appendChild(li_node);//将li填入ul内
        }
        this.appendChild(ul_node);
    });
}

function control_gallery() {
    let post_words_width = $('.post_words').width();
    let item_width = (post_words_width - 30) / 3;
    let block_gallery = $('.blocks-gallery-item');
    if (block_gallery.length == 0) {
        return;
    }
    block_gallery.each(function () {
        $(this).height(item_width);
        show_big_img(this);
    });
}

function control_media_text() {
    $('.wp-block-media-text').each(function () {
        let img = $(this).find('img');
        let words_height = $(this).children('.wp-block-media-text__content').height();
        $(img).removeAttr('width');
        $(img).attr('height',words_height);
    });
}

function display_readmore() {
    $('.readmore').each(function () {
        $(this).css('display', 'none');
    });
}

function control_embed() {
    $('.wp-embedded-content').each(function () {
        $(this).removeAttr('style');
        $(this).removeAttr('width');
        $(this).removeAttr('height');
    });
}

function control_pagebar() {
    let li = $('.mobile_row #page_bar ul li');
    let ul_width = $('.mobile_row #page_bar ul').width();
    let li_width = Math.floor(ul_width / li.length);
    li.each(function () {
        $(this).width(li_width);
    });
}

function mobile_control_sidebar() {
    let row_width = $('.mobile_row').width();
    let widget = $('.mobile_row #sidebar .widget');
    let widget_width = (row_width - 10) / 2;
    let i = 1;
    widget.each(function () {
        $(this).css('width', widget_width);
        if (i % 2 == 1) {
            $(this).css('margin-right', '10px');
        }
        i++;
    });
    let h2 = document.createElement('h2');
    h2.className = 'sidebar_title';
    h2.innerHTML = '侧边栏';
    $(h2).on('click', function () {
        display_sidebar();
    });
    $('#mobile_row2').prepend(h2);
}

function display_sidebar() {
    $('.mobile_row #sidebar').toggle('fast','linear');
}

function close_black() {
    $('#black_cover').fadeOut('slow');
}