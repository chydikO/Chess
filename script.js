"use strict";
let map = Array();
function initMap() {
    //map[x][y];
    map = [
        ["R", "P"," ", " "," ", " ","p", "r"],
        ["N", "P"," ", " "," ", " ","p", "n"],
        ["B", "P"," ", " "," ", " ","p", "b"],
        ["Q", "P"," ", " "," ", " ","p", "q"],
        ["K", "P"," ", " "," ", " ","p", "k"],
        ["B", "P"," ", " "," ", " ","p", "b"],
        ["N", "P"," ", " "," ", " ","p", "n"],
        ["R", "P"," ", " "," ", " ","p", "r"]
    ];
}
function showMap() {
    let html = "<table border='1' cellpadding='2' cellspacing='0'>";
    for (let y = 7; y >= 0;  y--) {
        html += "<tr>";
        //TODO: need replace &nbsp to style
        html += "<td>&nbsp;" + y + "&nbsp;</td>";
        for (let x = 0; x <= 7; x++) {
            let colorBg = (x + y) % 2 ?  "#eeffee" : "#abcdef";
            html += "<td style='height: 50px; width: 50px; background-color: " + colorBg + "; text-align: center'>";
            html += map[x][y];
            html += "</td>";
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

initMap();
showMap();