"use strict";
const mobile_width = 803;
const old_middle_screen_width = 1323;
const new_middle_screen_width = 1871;
const single_max_width = 1640;
const single_min_width = 825;

function fit_all_functions() {
    fix_code();
    control_media_text();
    control_gallery();
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

function control_img(select1 = '.col .post_words', select2 = '.col .wp-block-image', w = 2) {
    let post_width = $(select1).width();
    let img_width = post_width;
    $(select2).each(function () {
        if ($(this).find('figure').hasClass('alignleft')) {
            $(this).css('float', 'left');
            img_width = post_width / w;
        }
        else if ($(this).find('figure').hasClass('alignright')) {
            $(this).css('float', 'right');
            img_width = post_width / w;
        }
        else {
            $(this).find('figure').css('clear', 'both');
            $(this).find('figure').css('margin-left', 'auto');
            $(this).find('figure').css('margin-right', 'auto');
            img_width = post_width * 2 / w;
        }
        $(this).find('img').removeAttr('width');
        $(this).find('img').removeAttr('height');
        $(this).find('img').width(img_width);
        $(this).find('img').height(img_width);
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
    });
}

function control_media_text() {
    $('.wp-block-media-text').each(function () {
        let img = $(this).find('img');
        let words_height = $(this).children('.wp-block-media-text__content').height();
        console.log($(this).height());
        console.log(words_height);
        console.log('aa');
        $(img).removeAttr('width');
        $(img).attr('height',words_height);
    });
}

function display_readmore() {
    $('.readmore').each(function () {
        $(this).css('display', 'none');
    });
}