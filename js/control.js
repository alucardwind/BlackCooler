"use strict";
const mobile_width = 803;
const old_middle_screen_width = 1323;
const new_middle_screen_width = 1871;
const single_max_width = 1640;
const single_min_width = 825;

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