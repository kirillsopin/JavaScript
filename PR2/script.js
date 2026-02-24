const style = document.createElement("style");
style.innerHTML = `
body{
    text-align:center;
    font-family:Arial;
}
table{
    border-collapse:collapse;
    margin:auto;
}
th, td{
    width:50px;
    height:50px;
    border:1px solid black;
    text-align:center;
}
.weekend{
    background:#ff6b6b;
    color:white;
}
.holiday{
    background:red;
    color:white;
    font-weight:bold;
}
.today{
    background:#00c853;
    color:white;
    font-weight:bold;
}
`;
document.head.appendChild(style);

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const currentDay = today.getDate();

const title = document.createElement("h1");
let monthName = today.toLocaleDateString("uk-UA", {
    month: "long",
    year: "numeric"
});
title.innerText = monthName.charAt(0).toUpperCase() + monthName.slice(1);
document.body.appendChild(title);

const holidays = {
    "1-1": "Новий рік",
    "7-1": "Різдво Христове",
    "8-3": "Міжнародний жіночий день",
    "1-5": "День праці",
    "9-5": "День перемоги",
    "28-6": "День Конституції України",
    "24-8": "День Незалежності України",
    "14-10": "День захисників і захисниць України"
};

const table = document.createElement("table");

const days = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","НД"];
let headerRow = document.createElement("tr");

for (let d of days){
    let th = document.createElement("th");
    th.innerText = d;
    headerRow.appendChild(th);
}
table.appendChild(headerRow);

let firstDay = new Date(year, month, 1);
let lastDay = new Date(year, month + 1, 0);

let startDay = firstDay.getDay();
if(startDay === 0) startDay = 7;

let date = 1;

for(let i=0;i<6;i++){

    let row = document.createElement("tr");

    for(let j=1;j<=7;j++){

        let td = document.createElement("td");

        if(i===0 && j<startDay || date>lastDay.getDate()){
            td.innerText="";
        } else {

            td.innerText=date;

            const key = date + "-" + (month+1);

            if(j===6 || j===7){
                td.classList.add("weekend");
            }

            if(holidays[key]){
                td.classList.add("holiday");
            }

            if(date===currentDay){
                td.classList.add("today");
            }

            if(date===currentDay && holidays[key]){
                alert("Сьогодні: " + holidays[key]);
            }

            date++;
        }

        row.appendChild(td);
    }

    table.appendChild(row);
}

document.body.appendChild(table);