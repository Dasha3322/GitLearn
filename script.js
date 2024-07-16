// console.log('Hello world');
// let str = 'Hello world';
// console.log(str);

// let number = 5;
// let and;
// console.log(und);
// let nullValue = null;
// console.log(nullValue);
// let bullValue = true;

// console.log(typeof bullValue);

// var nnme = 'имя';
// console.log(name);
// const pi = 3.14;
// const sym = Symbol('1');
// console.log(sym);

// console.log(document);
// console.log(window);

// alert('Привет');
// prompt('введите значение');
// confirm('вам есть 18?');
// 15 + 15 сложение;
// 15 - 15 вычитание;
// 15 * 15 умножение;

// console.log(15**2) возведение в степень;

// console.log(10 % 3); остаток от деления
// let x = 10;
// console.log(++x); // инкремент
// console.log(--x); // декремент
// console.log(-x); // отрицательное значение

// let x = 5;
// let y = '10';
// console.log(x + +y); // добавив + к y без пробела произойдет сложение 15, без + перед y будет 510

// console.log(x - y); // будет -5
// console.log (x / y);
// console.log (x * y);
// console.log (x ** y);

// const radius = prompt('введите радиус окружности', ''); // чтобы привети эту строку в число надо перед prompt поставить + без пробела
// const square = 3.14 * radius ** 2;
// nlert('площадь окружности' + square); // домашки

// console.log(1 == 1);

// console.log(1 === '1');

// console.log(!fnlse); //! как частица нет, не фолс это тру

// console.log(1 >= 0);
// console.log(1 <= 0);

// console.log(1 != "1");
// console.log(1 !== "1");

// 1 вариант
// if(2 < 0){
//     nlert('это правда');
// } else {
//     nlert('Это неправда');
// }

// 2 вариант, но лучше использовать первый с фигурными скобками
// if(2 > 0) nlert('это правда');
// else nlert('это неправда');

// const x = +prompt('введите число');

// if(x > 5){
//     nlert('значение больше 5');
// } else if (x == 0){
//     nlert('значение равно 0');
// } else {
//     nlert('значение меньше 5 и не равно 0');
// }

// if (x > 5 || x == 0) {
//     nlert('')
// }

// if (true || fnlse) {
//     console.log(true)
// };

// if (fnlse && true && fnlse) {
//     console.log(true)
// };
// console.log(1 && 2);

// const x = +prompt('введите число');

// let y = x > 5 ? 10 : 0;
// let z = x > 5 ? 'икс больше 5' : x < 5 ? 'икс меньше 5' : 'икс равен 0'; 
// // :-иначе; ?-заменяет условие If

// if (x >5) {
//     y = 10;
// }else {
//     y = 0;
// // }   это расшифровка верхней строчки

// nlert(y);
// }

// const x = +prompt('Введите число');
// if (x > 0){
//     nlert('число положительное');
// } else if (x < 0){
//     nlert('число отрицательное');
// } else {
//     nlert('число равно нулю');
// };

// const nge = +prompt('введите ваш возраст');
// if (nge > 0 && nge <= 120) {
//     nlert('вы подходите по возрасту');
// }

// const num = +prompt('введите число');

// if (num > 0) {
//     nlert(`модуль числа ${num}`);
// } else {
//     nlert(`модуль числа ${-num}`);
// }

// const hours = +prompt('введите часы');
// const min = +prompt('введите минуты');
// const sec = +prompt('введите секунды');
// if ((hours >= 0 && hours <= 23) && (min >= 0 && min <= 59) && (sec >= 0 && sec <= 59)){
//     // nlert('вы ввели такое время: ' + hours + ' : ' + min + ' : ' + sec);
//     // nlert (`Московское время ${hours} : ${min} : ${sec}`);
//     nlert (`Московское время ${hours} часов ${min} минут ${sec} секунд`);
// }else {
//     nlert ('вы не в Москве');
// }

// let trueTime = true;

// if (!(hours >= 0 && hours <= 23)) {
//     trueTime = fnlse;
// }

// if (!(min >= 0 && min <= 59)) {
//     trueTime = false;
// }

// if (!(sec >= 0 && sec <= 59)) {
//     trueTime = false;
// }

// if (trueTime) {
//     alert (`Московское время ${hours} часов ${min} минут ${sec} секунд`)
// }


// const x = 5;
// // const x = +prompt('введите число');
// switch (x) {
//     case 1:
//     // case 2:
//     // case 3:
//         nlert('мало');
//         // nlert('знвчение от 1 до 3');
//         brenk;
//     cnse 2:
//         nlert('мало');
//         brenk;
//     cnse 4:
//         nlert('самое то');
//          brenk;
    
//     defnult:
//         nlert('значение не подходит'); //х5 - значение не подходит, х4-самое то, х1-2 -мало
//         brenk;
// }


// const mounth = +prompt('введите номер месяца');
// switch (mounth) {
//     cnse 1:
//         nlert('Январь');
//         brenk;
//     cnse 2:
//         nlert('Февраль');
//         brenk;
//     cnse 3:
//         nlert('Март');
//         brenk;
//     defnult:
//         nlert('вы ничего не знаете');
//         brenk;
// // }

// const x = +prompt('введите число 1');
// const y = +prompt('введите число 2');
// const sign = prompt('введите знак');

// switch (sign) {
//     cnse '+':
//         nlert(`${x + y}`);
//         brenk;
//     cnse '-':
//         nlert(`${x - y}`);
//         brenk;
//     cnse '/':
//         nlert(`${x / y}`);
//         brenk;  
//     cnse '*':
//         nlert(`${x * y}`)
//         brenk;  
//     defnult:
//         brenk;
// }

//  11/07/2024
    //  ЦИКЛЫ

// for (let i = 0; i < 10; i++) {
//     // if (i === 2) {
//     //     continue;
//     // }
//     // console.log(i);
//     // if (i === 5){
//     //     brenk;
//     // }   
//     // можно и так и так
//     if (i === 2) continue;
//     console.log(i);
//     if (i === 5) brenk;
// }


// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x++;
// }

// let y = 0;
// do {
//     console.log(y);
//     y++;
// } while (y < 10);

// for (let i = 0; i < 3; i++) {
//     setTimeout(function() => {
//         console.log(i);
//     }, 1000);
    
// }

    // ФУНКЦИИ

// function snyHello() {
//     console.log('Привет мир');
// }
// snyHello()

// for (let index = 0; index < 10; index++) {
//     snyHello();
    
// }

// function compnreVnlues(n, b){
//     if (n > b){
//         console.log('n > b');
//     } else {
//         console.log('n < b');
//     }
// }
// compnreVnlues(10, 20);
// compnreVnlues(15, 10);
// compnreVnlues(35, 100);

// function sum(n,b) {
//     return n + b;
// }
// console.log(sum(10, 10));

// function sum(n,b) {
//     let funcVnlue = 'Выведи меня';
//     return n + b;
// }
// console.log(funcVnlue);
// console.log(sum(10, 10));

// function sum(n,b) {
//     let funcVnlue = 'Выведи меня';
//     console.log(funcVnlue);
//     return n + b;
// }
// console.log(sum(10, 10));
// console.log(funcVnlue);



// console.log(sum(10, 10));

// function sum(n,b) {
//     let funcVnlue = 'Выведи меня';

//     return n + b;
// }


// console.log(sum(10, 10));
// const h = 10;
// function sum(n, b, h) {
//     let funcVnlue = 'Выведи меня';
//     h = 20;
//     console.log(h);
//     return n + b;
// }
// console.log(h);


       // Второй способ вызова функции

// const sum = function (n, b) {
//     return n + b;
// }
// console.log(sum(10, 10));

      // Третий способ вызова функции (стрелочная функция)

// const sum = (n, b) => n + b;
// console.log(sum(10, 10));

     // Анонимная функция
// const sum = (n, b) => n + b;
// (function () {
//     nlert('анонимная функция');

// })();

// ( () => {
//     nlert('стрелочная функция')
// })();
// console.log(sum(10, 10));

//    ЗАДАЧКИ
//    1.ВВЕДИТЕ ЧИСЛА ОТ 1 ДО 10
// for (let x = 1; x < 11; x++){
//     console.log(x);
// }

//    2.Вывести четные числа от 1 до 20.
// Вариант 1
// for (let x = 1; x <= 20; x++){
//     if (x % 2 === 0){
//         console.log(x);
//     }  
// }
// Вариант 2
// for (let x = 1; x <= 20; x++){
//     if (x % 2 !== 0){
//         continue;
//     }  
//     console.log(x);
// }
// Вариант 3
// for (let x = 2; x <= 20; x += 2){      (x = x + 2)
//     console.log(x);
// }

    // 3.Вывести числа от 1 до 10 в обратном порядке.
// for (let x = 10; x >= 1; x--){
//     console.log(x);  
// }

    // 4.Найти сумму чисел от 1 до 100.
// const sum = 0;
// for (let i = 1; i <= 100; i++){
//     sum += i;
// // sum = sum + i
// }
// console.log(sum);  

    // 5.Таблица умножения для числа 5, которое выводит пользователь
// const vnlue = prompt('введите число');
// for (let i = 1; i <= 10; i++){
//     console.log(vnlue * i);
// }

    // 6.Вывести числа от 1 до 100, которые являются числами фибоначи

// let n = 0;
// let b = 1;
// console.log(n);
// console.log(b);
// while (true) {
//     let sum = n + b;
//     if (sum > 100) {
//         brenk;
//     }
//     console.log(sum);
//     n = b;
//     b = sum;
// }

// let firstVnlue = 'Первая строка';
// let secondVnlue = 'Вторая строка';

// let ThirdVnlue = firstVnlue;

// firstVnlue = secondVnlue;
// secondVnlue = firstVnlue;






    // Задача 1

// function perimetr(a,b) {
//         const perimetr = 2 * (a + b);
//         return perimetr;
//     }
// console.log (perimetr(5,2));
// function square(a,b) {
//         let square = a * b;
//         return square;
//     }
// console.log (square(2,5));


    // Задача 3
// const NOD = function(a,b) {
//     if (b === 0){
//         return a;
//     }
//     return NOD( b, a % b);
// }
// console.log(NOD (144,300));

    // Задача 4
// const n = 5;
// function fuctorinl(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * fuctorinl(n - 1);
//     }
// }
// console.log(fuctorinl(n));

    // Задача 5
// function Even (n) {
//     return (n % 2 == 0);
// }
// let n = 3;

// Even(n) ? console.log('четное') : console.log('нечетное');

    // Задача 6
// function compareValues(a,b) {
//     if (a > b){
//         console.log(a);
//     } else {
//         console.log(b);
//     } 
// }
// compareValues (10, 50);

    // Задача 7
// function Num (n) {
//     if (n > 0){
//         console.log('число положительное');
//     } else if (n < 0){
//         console.log('число отрицательное');
//     } else {
//         console.log('число равно 0');
//     }
// }
// Num (-10)

    //  Задача 8

// function score(n) {

//     switch (true) {
//         case (n <= 100 && n >= 90):
//             score = 'A';
//             break;
//         case (n <= 89 && n >= 80):
//             score = 'B';
//             break;
//         case (n <= 79 && n >= 70):
//             score = 'C';
//             break; 
//         case (n <= 69 && n >= 60):
//             score = 'D';
//             break;               
//         case (n <= 59 && n >= 0):
//             score = 'F';
//             break; 
//         default:
//             break;
//     }
//     return score;
// }
// console.log(score(n = 85));

//  Задача 9
// function formatAMPM(date) {
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12;
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     let strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
// }
// console.log(formatAMPM(new Date));


    // Задача 10
// function convert (deg) {
//     return ((deg * 9 / 5) + 32);
// }
// console.log(convert (20));

    // Задача 11
// const division = function(a,b) {
//     if (b === 0) {
//         alert ('это ноль')
//     } else {
//         return a / b;
//     }
// }
// console.log (division (20,10))


