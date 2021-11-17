function creat_canvas(class_name, width, height) {
    let canvas = document.createElement("canvas");
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.className = class_name;
    $(canvas).css("width", width);
    $(canvas).css("height", height);
    $(canvas).css("z-index", -1);
    return canvas;
}

function show_decorate() {
    change_zhiding();
    sidebar_decorate();
    title_decorate();
    cats_decorate();
    postswords_decorate();
    posttitle_decorate();
}

function sidebar_decorate() {
    $('.col #sidebar ul li ul, .col #sidebar ul li ol').each(function () {
        if ($(this).height() >= 80){
            let can = creat_canvas("sidebar_right", 10, 80);
            $(can).css("float", "right");
            let dat_tx = can.getContext("2d");
            dat_tx.beginPath();
            dat_tx.scale(2,2);
            for (let i = 0; i < 4; i++){
                dat_tx.moveTo(1, i * 17 + 1);
                dat_tx.lineTo(5, i * 17 + 1);
                dat_tx.lineTo(5, i * 17 + 15);
                dat_tx.lineTo(1, i * 17 + 15);
                dat_tx.lineTo(1, i * 17 + 1);
            }
            dat_tx.lineWidth = 1;
            dat_tx.globalAlpha = 0.2;
            dat_tx.strokeStyle = "#bdde2d";
            dat_tx.lineCap="round";
            dat_tx.lineJoin="round";
            dat_tx.stroke();
            $(this).prepend(can);
        }
    });
}

function title_decorate() {
    let title = $(".col #title");
    let title_width = title.outerWidth();
    let title_height = title.outerHeight();
    let canvas = creat_canvas("title_cover", title_width, title_height);
    $(canvas).css("position", "absolute");
    $(canvas).css("inset", "0px");
    let dat_tx = canvas.getContext("2d");
    dat_tx.beginPath();
    dat_tx.scale(2,2);
    dat_tx.moveTo(20, 1);
    dat_tx.lineTo(1, 1);
    dat_tx.lineTo(1, 20);
    dat_tx.moveTo(1, title_height - 20);
    dat_tx.lineTo(1, title_height - 2);
    dat_tx.lineTo(20, title_height - 2);
    dat_tx.moveTo(title_width - 20, title_height - 2);
    dat_tx.lineTo(title_width - 2, title_height - 2);
    dat_tx.lineTo(title_width - 2, title_height - 20);
    dat_tx.moveTo(title_width - 2, 20);
    dat_tx.lineTo(title_width - 2, 1);
    dat_tx.lineTo(title_width - 20, 1);
    dat_tx.lineWidth = 2;
    dat_tx.globalAlpha = 1;
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.lineCap="round";
    dat_tx.lineJoin="round";
    dat_tx.stroke();
    let y = title_height - 60;
    if (title_height > 300) {
        dat_tx.beginPath();
        dat_tx.setLineDash([1, 4]);
        dat_tx.moveTo(1, y);
        for (let i = 0; i < 8; i++) {
            y -= 25;
            dat_tx.lineTo(1, y);
            y -= 10;
            dat_tx.moveTo(1, y);
        }
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.setLineDash([]);
        dat_tx.lineWidth = 1;
        let gra = dat_tx.createLinearGradient(0, title_height - 40, 0, title_height - y);
        gra.addColorStop(0, '#bdde2d');
        gra.addColorStop(1, '#344349');
        dat_tx.moveTo(0, title_height - 40);
        dat_tx.lineTo(0, title_height - y);
        dat_tx.strokeStyle = gra;
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.setLineDash([1, 4]);
        y = 60;
        dat_tx.moveTo(title_width - 2, y);
        for (let i = 0; i < 8; i++) {
            y += 25;
            dat_tx.lineTo(title_width - 2, y);
            y += 10;
            dat_tx.moveTo(title_width - 2, y);
        }
        dat_tx.lineWidth = 2;
        dat_tx.strokeStyle = "#bdde2d";
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.setLineDash([]);
        dat_tx.lineWidth = 1;
        gra = dat_tx.createLinearGradient(title_width, 40, title_width, y);
        gra.addColorStop(0, '#bdde2d');
        gra.addColorStop(1, '#344349');
        dat_tx.moveTo(title_width, 40);
        dat_tx.lineTo(title_width, y);
        dat_tx.strokeStyle = gra;
        dat_tx.stroke();
    }
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.lineWidth = 1;
    let x = title_width - 32;
    y = title_height - 55;
    let line = 15;
    dat_tx.moveTo(x, y);
    dat_tx.lineTo(x + 4, y + 4);
    dat_tx.moveTo(x + 4 + line, y + 4 + line);
    dat_tx.lineTo(x + 8 + line, y + 8 + line);
    dat_tx.lineTo(x + 4 + line, y + 12 + line);
    dat_tx.moveTo(x + 4, y + 12 + line * 2);
    dat_tx.lineTo(x, y + 16 + line * 2);
    dat_tx.moveTo(x, y);
    dat_tx.lineTo(x - 4, y + 4);
    dat_tx.moveTo(x - 4 - line, y + 4 + line);
    dat_tx.lineTo(x - 8 - line, y + 8 + line);
    dat_tx.lineTo(x - 4 - line, y + 12 + line);
    dat_tx.moveTo(x - 4, y + 12 + line * 2);
    dat_tx.lineTo(x, y + 16 + line * 2);
    dat_tx.moveTo(x - 5, y + 8 + line);
    dat_tx.lineTo(x + 5, y + 8 + line);
    dat_tx.moveTo(x, y + 8 + line);
    dat_tx.lineTo(x, y + 3 + line);
    dat_tx.stroke();
    title.prepend(canvas);
}

function cats_decorate() {
    let li_num = $(".col #get_cats ul li").length;
    let ul_padding = $(".col #get_cats ul").css("padding-left");
    ul_padding = parseInt(ul_padding.replace("px", ""));
    let ul_width = $(".col #get_cats ul").width();
    let li_width = Math.floor((ul_width - ul_padding) / li_num);
    $(".col #get_cats ul li").each(function () {
        $(this).width(li_width);
    });
    let getcats_width = $('.col #get_cats').outerWidth();
    let getcats_height = $('.col #get_cats').outerHeight() - parseInt($('.col #get_cats').css("padding-top").replace("px", ""));
    let canvas = creat_canvas("cat_cover", getcats_width, getcats_height);
    $(canvas).css("position", "absolute");
    $(canvas).css("bottom", "0px");
    let dat_tx = canvas.getContext("2d");
    dat_tx.beginPath();
    dat_tx.scale(2,2);
    dat_tx.strokeStyle = "#ffffff";
    dat_tx.lineWidth = 2;
    dat_tx.globalAlpha = 0.5;
    dat_tx.moveTo(1, 2);
    dat_tx.lineTo(20, 2);
    dat_tx.moveTo(2, 1);
    dat_tx.lineTo(2, 20);
    dat_tx.moveTo(getcats_width - 20, 2);
    dat_tx.lineTo(getcats_width - 2, 2);
    dat_tx.lineTo(getcats_width - 2, 20);
    dat_tx.moveTo(getcats_width - 2, getcats_height - 20);
    dat_tx.lineTo(getcats_width - 2, getcats_height - 2);
    dat_tx.lineTo(getcats_width - 20, getcats_height - 2);
    dat_tx.moveTo(20, getcats_height - 2);
    dat_tx.lineTo(2, getcats_height - 2);
    dat_tx.lineTo(2, getcats_height - 20);
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.globalAlpha = 1;
    dat_tx.setLineDash([15, 15]);
    let x = 25;
    dat_tx.moveTo(x, 2);
    dat_tx.lineTo(320, 2);
    x = 20;
    dat_tx.moveTo(x, 4);
    dat_tx.lineTo(320, 4);
    dat_tx.stroke();
    $('#get_cats').prepend(canvas);
}

function postswords_decorate() {
    let posts = $('.col .post_words');
    let post_width = 0;
    let post_height = 0;
    posts.each(function () {
        post_width = $(this).outerWidth();
        post_height = $(this).outerHeight();
        let canvas = creat_canvas('post_cover', post_width, post_height);
        $(canvas).css("position", "absolute");
        $(canvas).css("inset", "0px");
        let dat_tx = canvas.getContext("2d");
        dat_tx.beginPath();
        dat_tx.scale(2,2);
        dat_tx.strokeStyle = "#ffffff";
        dat_tx.lineWidth = 1;
        dat_tx.globalAlpha = 0.5;
        dat_tx.moveTo(1, 1);
        dat_tx.lineTo(60, 1);
        dat_tx.lineTo(65, 7);
        dat_tx.lineTo(105, 7);
        dat_tx.lineTo(110, 1);
        dat_tx.lineTo(post_width, 1);
        for (let i = 0; i < 7; i++) {
            let x = 40 + i * 25
            dat_tx.rect(x, post_height - 18, 20, 5);
        }
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.lineWidth = 2;
        dat_tx.moveTo(0, 1);
        dat_tx.lineTo(20, 1);
        dat_tx.moveTo(1, 1);
        dat_tx.lineTo(1, 20);
        dat_tx.moveTo(post_width - 20, 1);
        dat_tx.lineTo(post_width - 1, 1);
        dat_tx.lineTo(post_width - 1, 20);
        dat_tx.moveTo(post_width - 1, post_height - 20);
        dat_tx.lineTo(post_width - 1, post_height - 1);
        dat_tx.lineTo(post_width - 20, post_height - 1);
        dat_tx.moveTo(20, post_height - 1);
        dat_tx.lineTo(1, post_height - 1);
        dat_tx.lineTo(1, post_height - 20);
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.strokeStyle = "#bdde2d";
        dat_tx.globalAlpha = 1;
        dat_tx.setLineDash([15, 15]);
        let x = post_width - 25;
        dat_tx.moveTo(x, 2);
        dat_tx.lineTo(post_width - 220, 2);
        x = post_width - 20;
        dat_tx.moveTo(x, 4);
        dat_tx.lineTo(post_width - 220, 4);
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.setLineDash([]);
        dat_tx.lineWidth = 4;
        dat_tx.strokeStyle = "#ffffff";
        dat_tx.moveTo(15, 15);
        dat_tx.lineTo(30, 15);
        dat_tx.moveTo(post_width - 30, 15);
        dat_tx.lineTo(post_width - 15, 15);
        dat_tx.lineTo(post_width - 15, 30);
        dat_tx.moveTo(post_width - 15, post_height - 30);
        dat_tx.lineTo(post_width - 15, post_height - 15);
        dat_tx.lineTo(post_width - 30, post_height - 15);
        dat_tx.moveTo(30, post_height - 15);
        dat_tx.lineTo(15, post_height - 15);
        dat_tx.lineTo(15, post_height - 30);
        dat_tx.moveTo(15, 30);
        dat_tx.lineTo(15, 13);
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.lineWidth = 2;
        dat_tx.setLineDash([2, 4]);
        dat_tx.moveTo(15, 50);
        dat_tx.lineTo(15, post_height - 50);
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.setLineDash([]);
        dat_tx.strokeStyle = "#bdde2d";
        dat_tx.moveTo(40, 1);
        dat_tx.lineTo(40, 15);
        dat_tx.moveTo(post_width - 40, post_height - 1);
        dat_tx.lineTo(post_width - 40, post_height - 15);
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.strokeStyle = "#ffffff";
        dat_tx.globalAlpha = 0.5;
        dat_tx.moveTo(40, 15);
        dat_tx.lineTo(40, 40);
        dat_tx.stroke();
        $(this).prepend(canvas);
    });
}

function posttitle_decorate() {
    let posttitle_width = 0;
    let posttitle_height = 0;
    $('.col .post_title').each(function () {
        posttitle_width = $(this).outerWidth();
        posttitle_height = $(this).outerHeight();
        let canvas = creat_canvas('title_bottom', posttitle_width, posttitle_height);
        $(canvas).css("position", "absolute");
        $(canvas).css("inset", "0px");
        let dat_tx = canvas.getContext("2d");
        dat_tx.beginPath();
        dat_tx.scale(2,2);
        dat_tx.strokeStyle = "#bdde2d";
        dat_tx.lineWidth = 2;
        dat_tx.moveTo(1, posttitle_height - 1);
        dat_tx.lineTo(10, posttitle_height - 4);
        dat_tx.lineTo(1, posttitle_height - 7);
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.strokeStyle = "#ffffff";
        dat_tx.lineWidth = 1;
        dat_tx.globalAlpha = 0.5;
        dat_tx.moveTo(15, posttitle_height - 4);
        dat_tx.lineTo(posttitle_width, posttitle_height - 4);
        dat_tx.stroke();
        $(this).prepend(canvas);
    });
}

function change_zhiding() {
    let zhiding = $('.col #zhiding');
    let con_width = $('.col .con').width();
    if (GetQueryString("ds") == 2) {
        zhiding.width(con_width);
    }
    else if (GetQueryString("ds") == 3) {
        zhiding.width(con_width * 2 + 10);
    }
    else if (GetQueryString("ds") == 4) {
        zhiding.width(con_width * 3 + 20);
    }
}

function show_single_decorate() {

}