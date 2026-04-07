function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

function EmpTable(employees) {
    this.employees = employees;
}

EmpTable.prototype.getHtml = function () {
    let result = "<table>";
    result += "<tr><th>Ім'я</th><th>Посада</th><th>Зарплата</th></tr>";

    for (let i = 0; i < this.employees.length; i++) {
        let emp = this.employees[i];
        result += "<tr>";
        result += "<td>" + emp.name + "</td>";
        result += "<td>" + emp.position + "</td>";
        result += "<td>" + emp.salary + "</td>";
        result += "</tr>";
    }

    result += "</table>";
    return result;
};

function StyledEmpTable(employees) {
    EmpTable.call(this, employees);
}

StyledEmpTable.prototype = Object.create(EmpTable.prototype);
StyledEmpTable.prototype.constructor = StyledEmpTable;

StyledEmpTable.prototype.getStyles = function () {
    return "<style>th{background:lightblue;}</style>";
};

StyledEmpTable.prototype.getHtml = function () {
    return this.getStyles() + EmpTable.prototype.getHtml.call(this);
};

function Machine(power) {
    this._power = power;
    this._enabled = false;
}

Machine.prototype.enable = function () {
    this._enabled = true;
};

Machine.prototype.disable = function () {
    this._enabled = false;
};

function CoffeeMachine(power, capacity) {
    Machine.call(this, power);

    let waterAmount = 0;
    let timerId;

    this.capacity = capacity;

    this.setWaterAmount = function (amount) {
        if (amount < 0) throw new Error("Вода має бути додатньою");
        if (amount > capacity) throw new Error("Забагато води");
        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getBoilTime = function () {
        return waterAmount * 4200 * 80 / power;
    };

    this.onReady = function () {
        alert("Кава готова!");
    };

    this.run = function () {
        if (!this._enabled) throw new Error("Кавоварка вимкнена");

        alert("Кавоварка включена");

        timerId = setTimeout(this.onReady, this.getBoilTime());
    };

    this.stop = function () {
        clearTimeout(timerId);
        alert("Кавоварка вимкнена");
    };
}

CoffeeMachine.prototype = Object.create(Machine.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

function Fridge(power) {
    Machine.call(this, power);

    let food = [];

    this.addFood = function () {
        if (!this._enabled) throw new Error("Вимкнений холодильник");

        if (food.length + arguments.length > power / 100) {
            throw new Error("Забагато їжі");
        }

        for (let i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
    };

    this.getFood = function () {
        return food.slice();
    };

    this.disable = function () {
        if (food.length > 0) {
            throw new Error("Є їжа — не можна вимкнути");
        }
        Machine.prototype.disable.call(this);
    };
}

Fridge.prototype = Object.create(Machine.prototype);
Fridge.prototype.constructor = Fridge;

let employees = [
    new Employee("Іван", "Менеджер", 10000),
    new Employee("Олена", "Бухгалтер", 8000),
    new Employee("Петро", "Касир", 6000)
];

let coffee = new CoffeeMachine(1000, 500);

function showTable() {
    let table = new EmpTable(employees);
    document.getElementById("output").innerHTML = table.getHtml();
}

function showStyledTable() {
    let table = new StyledEmpTable(employees);
    document.getElementById("output").innerHTML = table.getHtml();
}

function startCoffee() {
    try {
        coffee.enable();
        coffee.setWaterAmount(200);
        coffee.run();
    } catch (e) {
        alert(e.message);
    }
}

function stopCoffee() {
    coffee.stop();
}

function checkFridge() {
    try {
        let fridge = new Fridge(500);
        fridge.enable();
        fridge.addFood("Молоко", "Сир");

        document.getElementById("output").innerHTML =
            "Продукти: " + fridge.getFood().join(", ");

        fridge.disable();
    } catch (e) {
        alert(e.message);
    }
}