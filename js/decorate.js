function creat_canvas(class_name, width, height) {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.className = class_name;
    $(canvas).css("z-index", 1);
    return canvas;
}

function sidebar_decorate() {
    $('#sidebar ul li ul, #sidebar ul li ol').each(function () {
        if ($(this).height() >= 80){
            let can = creat_canvas("sidebar_right", 10, 80);
            $(can).css("float", "right");
            console.log(can);
            let dat_tx = can.getContext("2d");
            dat_tx.beginPath();
            //dat_tx.scale(2,2);
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