var out = document.getElementById("output");

// ---------------- ЧАСТЬ 1 ----------------

// 1
function hello2(name) {
    if (!name) name = "гість";
    return "Привіт, " + name;
}
out.innerHTML += hello2("Василь") + "<br>";

// 2
function rgb() {
    var r = Math.floor(Math.random() * 256).toString(16);
    var g = Math.floor(Math.random() * 256).toString(16);
    var b = Math.floor(Math.random() * 256).toString(16);
    return "#" + r + g + b;
}
out.innerHTML += "Випадковий колір: " + rgb() + "<br>";

// 3
function chessTable(fcolor, scolor, contents) {
    var table = "<table border='1' cellspacing='0'>";
    for (var i = 0; i < 8; i++) {
        table += "<tr>";
        for (var j = 0; j < 8; j++) {
            var color = (i + j) % 2 == 0 ? fcolor : scolor;
            table += "<td style='background:" + color + "; width:30px; height:30px'>" + contents + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    return table;
}
out.innerHTML += chessTable("black", "white", "") + "<br>";

// 4
function repeat(str, n) {
    if (!str) str = "";
    if (!n) n = 2;
    return str.repeat(n);
}
out.innerHTML += repeat("Hi ", 3) + "<br>";

// 5
function words(n) {
    if (!n) n = 0;
    if (n % 10 == 1 && n % 100 != 11) return n + " товар";
    if (n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14))
        return n + " товари";
    return n + " товарів";
}
out.innerHTML += words(22) + "<br>";

// 6
function makeNumber(a, b, c) {
    return a * 100 + b * 10 + c;
}
out.innerHTML += makeNumber(1,4,9) + "<br>";

// 7
function isPerfect(num) {
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (num % i == 0) sum += i;
    }
    return sum == num;
}
out.innerHTML += "6 досконале? " + isPerfect(6) + "<br>";

// 8
function perfectRange(min, max) {
    var result = "";
    for (var i = min; i <= max; i++) {
        if (isPerfect(i)) result += i + " ";
    }
    return result;
}
out.innerHTML += "Досконалі 1-100: " + perfectRange(1,100) + "<br>";

// 9
function formatTime(h, m, s) {
    if (!m) m = 0;
    if (!s) s = 0;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    return h + ":" + m + ":" + s;
}
out.innerHTML += formatTime(5,3,9) + "<br>";

// 10
function dateDifference(h1, m1, s1, h2, m2, s2) {
    var t1 = h1 * 3600 + m1 * 60 + s1;
    var t2 = h2 * 3600 + m2 * 60 + s2;
    var diff = Math.abs(t1 - t2);

    var h = Math.floor(diff / 3600);
    var m = Math.floor((diff % 3600) / 60);
    var s = diff % 60;

    return formatTime(h, m, s);
}
out.innerHTML += dateDifference(10,0,0, 12,30,0) + "<br>";


// ---------------- ЧАСТЬ 2 (Math) ----------------

// 1
var L = 2 * Math.PI * 50;
out.innerHTML += "Довжина кола: " + L + "<br>";

// 2
out.innerHTML += "Максимум: " + Math.max(5,5,5,5,5) + "<br>";

// 3
out.innerHTML += "Випадкове 1-6: " + (Math.floor(Math.random()*6)+1) + "<br>";

// 4
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
out.innerHTML += "Random 10-20: " + randomMinMax(10,20) + "<br>";

// 5
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
out.innerHTML += "Random 1-10: " + randomInteger(1,10) + "<br>";

// 6
var a = 5;
var b = 10;
var c = Math.abs(a - b);
out.innerHTML += "c = " + c + "<br>";

// 7
out.innerHTML += "RGB ще раз: " + rgb() + "<br>";

// 8
var nFib = 12;
var phi = (1 + Math.sqrt(5)) / 2;
var el12 = Math.round(Math.pow(phi, nFib) / Math.sqrt(5));
out.innerHTML += "12 елемент Фібоначчі: " + el12 + "<br>";
