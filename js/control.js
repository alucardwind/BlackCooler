
const mobile_width = 803;
const old_middle_screen_width = 1323;
const new_middle_screen_width = 1871;

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