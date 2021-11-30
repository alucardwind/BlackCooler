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

function canvas_rect(dat_tx, start_x, start_y, width, height, linewidth, color, alpha, length) {
    dat_tx.beginPath();
    dat_tx.strokeStyle = color;
    dat_tx.lineWidth = linewidth;
    dat_tx.globalAlpha = alpha;
    dat_tx.lineCap="round";
    dat_tx.lineJoin="round";
    let start = Math.round(linewidth / 2);
    width = width - 1;
    height = height - 1;
    dat_tx.moveTo(start_x + start, start_y + start);
    dat_tx.lineTo(start_x + length, start_y + start);
    dat_tx.moveTo(start_x + width - length, start_y + start)
    dat_tx.lineTo(start_x + width - start, start_y + start);
    dat_tx.lineTo(start_x + width - start, start_y + length);
    dat_tx.moveTo(start_x + width - start, start_y + height - length);
    dat_tx.lineTo(start_x + width - start, start_y + height - start);
    dat_tx.lineTo(start_x + width - length, start_y + height - start);
    dat_tx.moveTo(start_x + length, start_y + height - start);
    dat_tx.lineTo(start_x + start, start_y + height - start);
    dat_tx.lineTo(start_x + start, start_y + height - length);
    dat_tx.moveTo(start_x + start, start_y + length);
    dat_tx.lineTo(start_x + start, start_y + start);
    dat_tx.stroke();
}

function show_decorate() {
    change_zhiding();
    sidebar_decorate();
    title_decorate();
    cats_decorate();
    postswords_decorate();
    posttitle_decorate();
    single_comments_cover( '#zhiding .comments' )
}

function show_single_decorate() {
    single_title_cover();
    single_post_cover();
    single_comments_cover();
}

function show_page_decorate() {
    title_decorate();
    single_comments_cover( '.page_col .post_comments' );
    page_post_cover();
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

function title_decorate( select = ".col #title") {
    let title = $(select);
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
    if (!ul_padding) {return;}
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
        canvas_rect(dat_tx, 0, 0, post_width, post_height, 2, '#ffffff', 0.5, 20);
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
        dat_tx.setLineDash([]);
        canvas_rect(dat_tx, 15, 15, post_width - 30, post_height - 30, 4, '#ffffff', 1, 15);
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
        canvas = creat_canvas('post_bottom_cover', post_width - 39, 35);
        $(canvas).css("position", "absolute");
        $(canvas).css("left", "35px");
        $(canvas).css("bottom", "2px");
        $(canvas).css("z-index", "2");
        dat_tx = canvas.getContext("2d");
        dat_tx.beginPath();
        dat_tx.scale(2,2);
        dat_tx.strokeStyle = "#ffffff";
        dat_tx.lineWidth = 1;
        dat_tx.globalAlpha = 0.5;
        for (let i = 0; i < 7; i++) {
            let x = 5 + i * 25
            dat_tx.rect(x, 25, 20, 5);
        }
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.lineWidth = 4;
        dat_tx.globalAlpha = 1;
        dat_tx.moveTo(347, 10);
        dat_tx.lineTo(347, 25);
        dat_tx.lineTo(332, 25);
        dat_tx.stroke();

        dat_tx.beginPath();
        dat_tx.lineWidth = 2;
        dat_tx.strokeStyle = "#bdde2d";
        dat_tx.moveTo(325, 40);
        dat_tx.lineTo(325, 27);
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

function single_title_cover() {
    let title = $('.row #title');
    let title_width = title.outerWidth();
    let title_height = title.outerHeight();
    let canvas = creat_canvas("single_title_cover", title_width, title_height);
    $(canvas).css("position", "absolute");
    $(canvas).css("inset", "0px");
    let dat_tx = canvas.getContext("2d");
    dat_tx.scale(2,2);
    canvas_rect(dat_tx, 0, 0, title_width, title_height, 2, "#bdde2d", 1, 20);
    let x = 60;
    if (title_width > 300) {
        dat_tx.beginPath();
        dat_tx.setLineDash([1, 4]);
        dat_tx.moveTo(x, 1);
        for (let i = 0; i < 8; i++) {
            x += 25;
            dat_tx.lineTo(x, 1);
            x += 10;
            dat_tx.moveTo(x, 1);
        }
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.setLineDash([]);
        dat_tx.lineWidth = 1;
        let gra = dat_tx.createLinearGradient(40, 1, x, 1);
        gra.addColorStop(0, '#bdde2d');
        gra.addColorStop(1, '#344349');
        dat_tx.moveTo(40, 1);
        dat_tx.lineTo(x, 1);
        dat_tx.strokeStyle = gra;
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.setLineDash([1, 4]);
        x = title_width - 30;
        dat_tx.moveTo(x, title_height - 3);
        for (let i = 0; i < 8; i++) {
            x -= 25;
            dat_tx.lineTo(x, title_height - 3);
            x -= 10;
            dat_tx.moveTo(x, title_height - 3);
        }
        dat_tx.lineWidth = 2;
        dat_tx.strokeStyle = "#bdde2d";
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.setLineDash([]);
        dat_tx.lineWidth = 1;
        gra = dat_tx.createLinearGradient(x, title_height - 1, title_width - 25, title_height - 1);
        gra.addColorStop(0, '#bdde2d');
        gra.addColorStop(1, '#344349');
        dat_tx.moveTo(x, title_height - 1);
        dat_tx.lineTo(title_width - 25, title_height - 1);
        dat_tx.strokeStyle = gra;
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.strokeStyle = "#bdde2d";
        dat_tx.lineWidth = 1;
        x = 32;
        let y = title_height - 60;
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
    }
    title.prepend(canvas);
}

function single_post_cover() {
    let post = $('.row .post_words');
    let post_width = post.outerWidth();
    let post_height = post.outerHeight();
    let canvas = creat_canvas("single_post_cover", post_width, post_height);
    $(canvas).css("position", "absolute");
    $(canvas).css("inset", "0px");
    let dat_tx = canvas.getContext("2d");
    dat_tx.scale(2,2);
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#ffffff";
    dat_tx.lineWidth = 1;
    dat_tx.globalAlpha = 0.5;
    dat_tx.moveTo(0,0);
    dat_tx.lineTo(100, 0);
    dat_tx.lineTo(110, 10);
    dat_tx.lineTo(150, 10);
    dat_tx.lineTo(160, 0);
    dat_tx.lineTo(post_width, 0);
    dat_tx.stroke();
    canvas_rect(dat_tx, 0, 0, post_width, post_height, 2, "white", 0.5, 20);
    canvas_rect(dat_tx, 10, 10, post_width - 20, post_height - 20, 4, "white", 1, 10);
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.lineWidth = 2;
    dat_tx.globalAlpha = 1;
    dat_tx.moveTo(30,0);
    dat_tx.lineTo(30, 10);
    dat_tx.moveTo(post_width - 30, post_height);
    dat_tx.lineTo(post_width - 30, post_height - 10);
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#ffffff";
    dat_tx.globalAlpha = 0.5;
    dat_tx.moveTo(30, 10);
    dat_tx.lineTo(30, 40);
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.globalAlpha = 1;
    dat_tx.moveTo(50, 70);
    dat_tx.lineTo(57, 67);
    dat_tx.lineTo(50, 64);
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#ffffff";
    dat_tx.moveTo(67, 67);
    dat_tx.lineTo(post_width - 45, 67);
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.lineWidth = 1;
    let x = post_width - 45;
    let y = 48;
    let line = 10;
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
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.globalAlpha = 1;
    dat_tx.lineWidth = 2;
    dat_tx.setLineDash([10, 15]);
    dat_tx.moveTo(post_width - 60, 1);
    dat_tx.lineTo(post_width - 300, 1);
    dat_tx.moveTo(post_width - 64, 3);
    dat_tx.lineTo(post_width - 300, 3);
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.setLineDash([]);
    dat_tx.strokeStyle = "#ffffff";
    dat_tx.lineWidth = 1;
    dat_tx.globalAlpha = 0.5;
    for (let i = 0; i < 10; i++) {
        let x = 40 + i * 25
        dat_tx.rect(x, post_height - 18, 20, 5);
    }
    dat_tx.stroke();
    if (post_height > 230) {
        dat_tx.beginPath();
        dat_tx.lineWidth = 2;
        dat_tx.setLineDash([1, 4]);
        dat_tx.moveTo(1, 30);
        dat_tx.lineTo(1, 230);
        dat_tx.stroke();
    }
    post.prepend(canvas);
}

function single_comments_cover( select = '.row .comments' ) {
    let post = $(select);
    let post_width = post.outerWidth();
    let post_height = post.outerHeight();
    let canvas = creat_canvas("single_post_cover", post_width, post_height);
    $(canvas).css("position", "absolute");
    $(canvas).css("inset", "0px");
    let dat_tx = canvas.getContext("2d");
    dat_tx.scale(2,2);
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#ffffff";
    dat_tx.lineWidth = 1;
    dat_tx.globalAlpha = 0.5;
    dat_tx.moveTo(0,0);
    dat_tx.lineTo(100, 0);
    dat_tx.lineTo(110, 10);
    dat_tx.lineTo(150, 10);
    dat_tx.lineTo(160, 0);
    dat_tx.lineTo(post_width, 0);
    dat_tx.stroke();
    canvas_rect(dat_tx, 0, 0, post_width, post_height, 2, "white", 0.5, 20);
    canvas_rect(dat_tx, 10, 10, post_width - 20, post_height - 20, 4, "white", 1, 10);
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.lineWidth = 2;
    dat_tx.globalAlpha = 1;
    dat_tx.moveTo(30,0);
    dat_tx.lineTo(30, 10);
    dat_tx.moveTo(post_width - 30, post_height);
    dat_tx.lineTo(post_width - 30, post_height - 10);
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.setLineDash([]);
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.globalAlpha = 1;
    dat_tx.lineWidth = 1;
    dat_tx.setLineDash([2, 4]);
    let x = 180;
    dat_tx.moveTo(x, 1);
    for (let i = 0; i < 3; i++) {
        x += 30;
        dat_tx.lineTo(x, 1);
        x += 10;
        dat_tx.moveTo(x, 1);
    }
    x = 165;
    dat_tx.moveTo(x, 3);
    for (let i = 0; i < 4; i++) {
        x += 30;
        dat_tx.lineTo(x, 3);
        x += 10;
        dat_tx.moveTo(x, 3);
    }
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.setLineDash([]);
    dat_tx.moveTo(163, 2);
    dat_tx.lineTo(325, 2);
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.globalAlpha = 1;
    dat_tx.setLineDash([2, 4]);
    x = 80;
    dat_tx.moveTo(post_width - x, post_height - 1);
    for (let i = 0; i < 3; i++) {
        x += 30;
        dat_tx.lineTo(post_width - x, post_height - 1);
        x += 10;
        dat_tx.moveTo(post_width - x, post_height - 1);
    }
    x = 65;
    dat_tx.moveTo(post_width - x, post_height - 3);
    for (let i = 0; i < 4; i++) {
        x += 30;
        dat_tx.lineTo(post_width - x, post_height - 3);
        x += 10;
        dat_tx.moveTo(post_width - x, post_height - 3);
    }
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.setLineDash([]);
    dat_tx.moveTo(post_width - 63, post_height - 2);
    dat_tx.lineTo(post_width - 225, post_height - 2);
    dat_tx.stroke();
    dat_tx.beginPath();
    let y = 20;
    while (y < post_height - 20) {
        dat_tx.moveTo(0, y);
        dat_tx.lineTo(4, y);
        dat_tx.moveTo(post_width, y);
        dat_tx.lineTo(post_width - 4, y);
        y += 20;
    }
    dat_tx.stroke();
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.lineWidth = 1;
    x = post_width - 95;
    y = post_height - 76;
    let line = 28;
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
    dat_tx.stroke();
    post.prepend(canvas);
}

function page_post_cover() {
    let post = $('.page_col .post_words');
    let post_width = post.outerWidth();
    let post_height = post.outerHeight();
    let canvas = creat_canvas("page_post_cover", post_width, post_height);
    $(canvas).css("position", "absolute");
    $(canvas).css("inset", "0px");
    let dat_tx = canvas.getContext("2d");
    dat_tx.scale(2,2);
    dat_tx.beginPath();
    dat_tx.fillStyle = "#bdde2d";
    dat_tx.fillRect(post_width - 10, 0, 8, 8);
    dat_tx.fill();
    dat_tx.beginPath();
    dat_tx.fillRect(0, post_height - 10, 8, 8);
    dat_tx.fill();
    dat_tx.beginPath();
    dat_tx.lineWidth = 4;
    dat_tx.strokeStyle = "#bdde2d";
    dat_tx.moveTo(2, 0);
    dat_tx.lineTo(2, 150);
    dat_tx.moveTo(2, 180);
    dat_tx.lineTo(2, 240);
    dat_tx.stroke();
    if (post_height > 400) {
        dat_tx.beginPath();
        dat_tx.strokeStyle = "#ffffff";
        let y = Math.floor(post_height * 0.6);
        dat_tx.moveTo(2, y);
        dat_tx.lineTo(2, y + 40);
        dat_tx.moveTo(2, y + 50);
        dat_tx.lineTo(2, y + 110);
        dat_tx.moveTo(2, y + 130);
        dat_tx.lineTo(2, y + 190);
        dat_tx.moveTo(2, y + 220);
        dat_tx.lineTo(2, y + 300);
        dat_tx.moveTo(2, y + 310);
        dat_tx.lineTo(2, y + 380);
        dat_tx.stroke();
        dat_tx.beginPath();
        dat_tx.strokeStyle = "#bdde2d";
        dat_tx.moveTo(post_width - 2, post_height - 50);
        dat_tx.lineTo(post_width - 2, post_height - 150);
        dat_tx.moveTo(post_width - 2, post_height - 160);
        dat_tx.lineTo(post_width - 2, post_height - 260);
        dat_tx.stroke();
    }
    dat_tx.beginPath();
    dat_tx.strokeStyle = "#ffffff";
    dat_tx.lineWidth = 1;
    dat_tx.globalAlpha = 0.5;
    for (let i = 0; i < 10; i++) {
        let x = 40 + i * 25
        dat_tx.rect(x, post_height - 18, 20, 5);
    }
    dat_tx.stroke();
    post.prepend(canvas);
}

function mobile_decorate() {
    $('.mobile_row #page_bar ul').each(function () {
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();
        let canvas = creat_canvas("page_post_cover", width, height);
        $(canvas).css("position", "absolute");
        $(canvas).css("inset", "0px");
        let dat_tx = canvas.getContext("2d");
        dat_tx.scale(2,2);
        dat_tx.beginPath();
        canvas_rect(dat_tx, 0, 0, width, height, 2, '#ffffff', 1, 10);
        dat_tx.stroke();
        $(this).prepend(canvas);
    });
    $('.mobile_row .post_words').each(function () {
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();
        let canvas = creat_canvas("page_post_cover", width, height);
        $(canvas).css("position", "absolute");
        $(canvas).css("inset", "0px");
        let dat_tx = canvas.getContext("2d");
        dat_tx.scale(2,2);
        dat_tx.beginPath();
        canvas_rect(dat_tx, 0, 0, width, height, 2, '#ffffff', 1, 10);
        dat_tx.stroke();
        $(this).prepend(canvas);
    });
    $('.mobile_single_row .post_words').each(function () {
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();
        let canvas = creat_canvas("page_single_post_cover", width, height);
        $(canvas).css("position", "absolute");
        $(canvas).css("inset", "0px");
        let dat_tx = canvas.getContext("2d");
        dat_tx.scale(2,2);
        dat_tx.beginPath();
        canvas_rect(dat_tx, 5, 5, width - 10, height - 10, 2, '#bdde2d', 1, 5);
        dat_tx.stroke();
        $(this).prepend(canvas);
    });
    $('.mobile_row .comments').each(function () {
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();
        let canvas = creat_canvas("page_post_cover", width, height);
        $(canvas).css("position", "absolute");
        $(canvas).css("inset", "0px");
        let dat_tx = canvas.getContext("2d");
        dat_tx.scale(2,2);
        dat_tx.beginPath();
        canvas_rect(dat_tx, 0, 0, width, height, 2, '#ffffff', 1, 10);
        dat_tx.stroke();
        $(this).prepend(canvas);
    });
    $('.mobile_page_row .post_words').each(function () {
        $(this).find('.page_post_cover').remove();
        $(this).find('.page_single_post_cover').remove();
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();
        let canvas = creat_canvas("page_post_cover", width, height);
        $(canvas).css("position", "absolute");
        $(canvas).css("inset", "0px");
        let dat_tx = canvas.getContext("2d");
        dat_tx.scale(2,2);
        dat_tx.beginPath();
        dat_tx.arc(10,10,5,0,2*Math.PI);
        dat_tx.fillStyle = '#bdde2d'
        dat_tx.fill();
        dat_tx.beginPath();
        dat_tx.arc(width - 10,10,5,0,2*Math.PI);
        dat_tx.fill();
        dat_tx.beginPath();
        dat_tx.arc(width - 10,height - 10,5,0,2*Math.PI);
        dat_tx.fill();
        dat_tx.beginPath();
        dat_tx.arc(10,height - 10,5,0,2*Math.PI);
        dat_tx.fill();
        $(this).prepend(canvas);
    });
}