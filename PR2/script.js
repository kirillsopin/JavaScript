function task2() {

let url = "https://www.google.com/search?q=javascript";
let regex = /https?:\/\/(www\.)?([^\/]+)/;

let result = url.match(regex);

alert(result[2]);

}


function task3() {

let ip = "192.168.1.1";

let regex = /^(25[0-5]|2[0-4]\d|1\d\d|\d\d|\d)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d|\d)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d|\d)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d|\d)$/;

alert(regex.test(ip));

}


function task4() {

let login = "user_123";

let regex = /^[A-Za-z][A-Za-z0-9_]{2,15}$/;

alert(regex.test(login));

}


function task5() {

let text = "Текст <b>жирний</b> і <i>курсив</i>";

let regex = /<\/?[a-z]+>/gi;

let result = text.match(regex);

alert(result);

}


function task6() {

let color = "#ff5733";

let regex = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;

alert(regex.test(color));

}


function task7() {

let text = "Привіт, @user1 і @admin! Як справи, @super_user?";

let regex = /@[A-Za-z0-9_]+/g;

let result = text.match(regex);

alert(result);

}


function task8() {

let card = "1234 5678 9012 3456";

let regex = /^(\d{4}\s?){4}$/;

alert(regex.test(card));

}