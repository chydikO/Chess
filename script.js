"use strict";
let map = Array();
let inf = Array();
let moveColor = "white";

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

function initInf() {
    //map[x][y];
    inf = [
        [" "," "," "," "," ", " "," "," "],
        [" "," "," "," "," ", " "," "," "],
        [" "," "," "," "," ", " "," "," "],
        [" "," "," "," "," ", " "," "," "],
        [" "," "," "," "," ", " "," "," "],
        [" "," "," "," "," ", " "," "," "],
        [" "," "," "," "," ", " "," "," "],
        [" "," "," "," "," ", " "," "," "]
    ];
}

function getColor(x, y) {
    let figure = map[x][y];
    if (figure === " ") return "";
    return figure.toUpperCase() === figure ? "white" : "black";
}

function markMovesFrom() {
    function canMoveFrom(x, y) {
        if (getColor(x, y) === moveColor) {
            return true;
        }
        return false;
    }
    initInf();
    for (let x = 0; x <= 7; x++) {
        for (let y = 0; y <= 7 ; y++) {
            if (canMoveFrom(x, y)) {
                inf[x][y] = "1";
            }
        }
    }
}

function figureToHtml(figure) {
    switch (figure) {
        case "K": return "&#9812"; case "k": return "&#9818";
        case "Q": return "&#9813"; case "q": return "&#9819";
        case "R": return "&#9814"; case "r": return "&#9820";
        case "B": return "&#9815"; case "b": return "&#9821";
        case "N": return "&#9816"; case "n": return "&#9822";
        case "P": return "&#9817"; case "p": return "&#9823";
        default: return "&nbsp;";
    }
}

function showMap() {
    let html = "<table border='1' cellpadding='2' cellspacing='0'>";
    let colorBg;
    for (let y = 7; y >= 0;  y--) {
        html += "<tr>";
        //TODO: need replace &nbsp to style
        html += "<td>&nbsp;" + y + "&nbsp;</td>";
        for (let x = 0; x <= 7; x++) {
            if (inf[x][y] === ' ') {
                colorBg = (x + y) % 2 ?  "#eeffee" : "#abcdef";
            } else {
                colorBg = inf[x][y] === '1' ?  "#ffaaaa" : "#aaffaa";
            }
            html += "<td style=" +
                "'height: 50px;" +
                "width: 50px; background-color: " + colorBg + "; " +
                "text-align: center; font-size: 40px;" +
                "'>";
            html += figureToHtml(map[x][y]);
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
markMovesFrom();
showMap();