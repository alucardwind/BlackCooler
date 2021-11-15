function creat_canvas(class_name, width, height) {
    let canvas = document.createElement("canvas");
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.className = class_name;
    $(canvas).css("width", width);
    $(canvas).css("height", height);
    $(canvas).css("z-index", 1);
    return canvas;
}

function show_decorate() {
    sidebar_decorate();
    title_decorate();
}

function sidebar_decorate() {
    $('#sidebar ul li ul, #sidebar ul li ol').each(function () {
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
    let title = $("#title");
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
    let line= 15;
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