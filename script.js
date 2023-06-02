"use strict";
function showMap() {
    let html = "<table border='1' cellpadding='2' cellspacing='0'>";
    for (let y = 7; y >= 0;  y--) {
        html += "<tr>";
        //TODO: need replace &nbsp to style
        html += "<td>&nbsp;" + y + "&nbsp;</td>";
        for (let x = 0; x <= 7; x++) {
            let colorBg = (x + y) % 2 ?  "#eeffee" : "#abcdef";
            html += "<td style='height: 50px; width: 50px; background-color: " + colorBg + "'></td>";
        }
        html += "</tr>";
    }
    html += "<tr>";
    html += "<td>&nbsp;</td>";
    for (let x = 0; x <= 7; x++) {
        html += "<td style='text-align: center'>" + x + "</td>";
    }
    html += "</tr>";
    document.getElementById("board").innerHTML = html;
}
showMap();