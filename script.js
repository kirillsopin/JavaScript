function task1(){

let arr = [];
let arr2 = [];

for(let i = 0; i < 50; i++){

let num = Math.floor(Math.random()*100) - 50;

arr.push(num);

if(num >= -5 && num <= 5){
arr2.push(num);
}

}

alert("Массив:\n" + arr.join(", "));
alert("Числа от -5 до 5:\n" + arr2.join(", "));
alert("Количество: " + arr2.length);

}



function task2(){

let arr = [];

for(let i = 0; i < 20; i++){
arr.push(Math.floor(Math.random()*100) - 50);
}

let sum = 0;
let minPositive = 1000;

for(let i = 0; i < arr.length; i++){

if(arr[i] < 0){
sum += arr[i];
}

if(arr[i] > 0 && arr[i] < minPositive){
minPositive = arr[i];
}

}

if(sum < -100){
sum = sum + minPositive;
}

alert("Массив:\n" + arr.join(", "));
alert("Результат: " + sum);

}



function task3(){

let arr = [];

for(let i = 0; i < 6; i++){
arr.push(Math.floor(Math.random()*50));
}

let diff = [];

for(let i = 0; i < arr.length-1; i++){
diff.push(arr[i+1] - arr[i]);
}

alert("Исходный массив:\n" + arr.join(", "));
alert("Массив разницы:\n" + diff.join(", "));

}



function task4(){

let words = [];
let w = prompt("Введите слово (пусто чтобы закончить)");

while(w != ""){

words.push(w);

w = prompt("Введите слово (пусто чтобы закончить)");

}

let oldWord = prompt("Какое слово заменить?");
let newWord = prompt("На какое заменить?");

let count = 0;
let newArr = [];

for(let i = 0; i < words.length; i++){

if(words[i] == oldWord){
newArr.push(newWord);
count++;
}else{
newArr.push(words[i]);
}

}

alert("Старый массив:\n" + words.join(", "));
alert("Новый массив:\n" + newArr.join(", "));
alert("Количество замен: " + count);

}