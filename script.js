let calculator = { a: 0, b: 0 };

function sum() {
    calculator.a = +document.getElementById("num1").value;
    calculator.b = +document.getElementById("num2").value;
    document.getElementById("calcResult").innerText = calculator.a + calculator.b;
}

function mul() {
    calculator.a = +document.getElementById("num1").value;
    calculator.b = +document.getElementById("num2").value;
    document.getElementById("calcResult").innerText = calculator.a * calculator.b;
}

let time = { hours: 20, minutes: 30, seconds: 45 };

function updateTime() {
    document.getElementById("timeDisplay").innerText =
        String(time.hours).padStart(2,'0') + ":" +
        String(time.minutes).padStart(2,'0') + ":" +
        String(time.seconds).padStart(2,'0');
}

function normalize() {
    if (time.seconds >= 60) {
        time.minutes += Math.floor(time.seconds / 60);
        time.seconds %= 60;
    }
    if (time.minutes >= 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes %= 60;
    }
    if (time.hours >= 24) {
        time.hours %= 24;
    }
}

function addSec() {
    time.seconds += 30;
    normalize();
    updateTime();
}

function addMin() {
    time.minutes += 10;
    normalize();
    updateTime();
}

function addHr() {
    time.hours += 1;
    normalize();
    updateTime();
}

updateTime();

let Automobile = {
    color: "чорний",
    model: "BMW",
    year: 2020,
    manufact: "Німеччина",
    name: "Іван",
    experience: 5
};

function showAuto() {
    document.getElementById("autoOutput").innerText =
        `${Automobile.model}, ${Automobile.year}, ${Automobile.color}, ${Automobile.manufact}`;
}

function showDriver() {
    document.getElementById("autoOutput").innerText =
        `${Automobile.name}, стаж: ${Automobile.experience} років`;
}

function checkYear() {
    let y = prompt("Введіть рік");
    document.getElementById("autoOutput").innerText =
        (y == Automobile.year) ? "Підходить" : "Жаль";
}

function changeColor() {
    let c = prompt("Новий колір");
    Automobile.color = c;
    showAuto();
}