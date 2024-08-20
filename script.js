// console.log('Hello world');
// let str = 'Hello world';
// console.log(str);

// let number = 5;
// let and;
// console.log(and);
// let nullValue = null;
// console.log(nullValue);
// let bullValue = true;

// console.log(typeof bullValue);

// var name = 'имя';
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
// alert('площадь окружности' + square); // домашки

// console.log(1 == 1);

// console.log(1 === '1');

// console.log(!false); //! как частица нет, не фолс это тру

// console.log(1 >= 0);
// console.log(1 <= 0);

// console.log(1 != "1");
// console.log(1 !== "1");

// 1 вариант
// if(2 < 0){
//     alert('это правда');
// } else {
//     alert('Это неправда');
// }

// 2 вариант, но лучше использовать первый с фигурными скобками
// if(2 > 0) alert('это правда');
// else alert('это неправда');

// const x = +prompt('введите число');

// if(x > 5){
//     alert('значение больше 5');
// } else if (x == 0){
//     alert('значение равно 0');
// } else {
//     alert('значение меньше 5 и не равно 0');
// }

// if (x > 5 || x == 0) {
//     alert('')
// }

// if (true || false) {
//     console.log(true)
// };

// if (false && true && false) {
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

// alert(y);
// }

// const x = +prompt('Введите число');
// if (x > 0){
//     alert('число положительное');
// } else if (x < 0){
//     alert('число отрицательное');
// } else {
//     alert('число равно нулю');
// };

// const nge = +prompt('введите ваш возраст');
// if (nge > 0 && nge <= 120) {
//     alert('вы подходите по возрасту');
// }

// const num = +prompt('введите число');

// if (num > 0) {
//     alert(`модуль числа ${num}`);
// } else {
//     alert(`модуль числа ${-num}`);
// }

// const hours = +prompt('введите часы');
// const min = +prompt('введите минуты');
// const sec = +prompt('введите секунды');
// if ((hours >= 0 && hours <= 23) && (min >= 0 && min <= 59) && (sec >= 0 && sec <= 59)){
//     // alert('вы ввели такое время: ' + hours + ' : ' + min + ' : ' + sec);
//     // alert (`Московское время ${hours} : ${min} : ${sec}`);
//     alert (`Московское время ${hours} часов ${min} минут ${sec} секунд`);
// }else {
//     alert ('вы не в Москве');
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
//         alert('мало');
//         // alert('знвчение от 1 до 3');
//         break;
//     case 2:
//         alert('мало');
//         break;
//     case 4:
//         alert('самое то');
//          break;
    
//     default:
//         alert('значение не подходит'); //х5 - значение не подходит, х4-самое то, х1-2 -мало
//         break;
// }


// const mounth = +prompt('введите номер месяца');
// switch (mounth) {
//     case 1:
//         alert('Январь');
//         break;
//     case 2:
//         alert('Февраль');
//         break;
//     case 3:
//         alert('Март');
//         break;
//     default:
//         alert('вы ничего не знаете');
//         break;
// // }

// const x = +prompt('введите число 1');
// const y = +prompt('введите число 2');
// const sign = prompt('введите знак');

// switch (sign) {
//     case '+':
//         alert(`${x + y}`);
//         break;
//     case '-':
//         alert(`${x - y}`);
//         break;
//     case '/':
//         alert(`${x / y}`);
//         break;  
//     case '*':
//         alert(`${x * y}`)
//         break;  
//     default:
//         break;
// }

//  11/07/2024
    //  ЦИКЛЫ

// for (let i = 0; i < 10; i++) {
//     // if (i === 2) {
//     //     continue;
//     // }
//     // console.log(i);
//     // if (i === 5){
//     //     break;
//     // }   
//     // можно и так и так
//     if (i === 2) continue;
//     console.log(i);
//     if (i === 5) break;
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

// function sayHello() {
//     console.log('Привет мир');
// }
// sayHello()

// for (let index = 0; index < 10; index++) {
//     sayHello();
    
// }

// function compnreValues(n, b){
//     if (n > b){
//         console.log('n > b');
//     } else {
//         console.log('n < b');
//     }
// }
// compnreValues(10, 20);
// compnreValues(15, 10);
// compnreValues(35, 100);

// function sum(n,b) {
//     return n + b;
// }
// console.log(sum(10, 10));

// function sum(n,b) {
//     let funcValue = 'Выведи меня';
//     return n + b;
// }
// console.log(funcValue);
// console.log(sum(10, 10));

// function sum(n,b) {
//     let funcValue = 'Выведи меня';
//     console.log(funcValue);
//     return n + b;
// }
// console.log(sum(10, 10));
// console.log(funcVnlue);



// console.log(sum(10, 10));

// function sum(n,b) {
//     let funcValue = 'Выведи меня';

//     return n + b;
// }


// console.log(sum(10, 10));
// const h = 10;
// function sum(n, b, h) {
//     let funcValue = 'Выведи меня';
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
//     alert('анонимная функция');

// })();

// ( () => {
//     alert('стрелочная функция')
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
// const value = prompt('введите число');
// for (let i = 1; i <= 10; i++){
//     console.log(value * i);
// }

    // 6.Вывести числа от 1 до 100, которые являются числами фибоначи

// let n = 0;
// let b = 1;
// console.log(n);
// console.log(b);
// while (true) {
//     let sum = n + b;
//     if (sum > 100) {
//         break;
//     }
//     console.log(sum);
//     n = b;
//     b = sum;
// }

// let firstValue = 'Первая строка';
// let secondValue = 'Вторая строка';

// let ThirdValue = firstValue;

// firstValue = secondValue;
// secondValue = firstValue;






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
//     minutes = minutes < 10 ? '0' +minutes : minutes;
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

// так меняется константа
// const obj2 = {
//     a: 'privet',
// }
// obj2.a = 'i tebe privet';
// console.log(obj2)

// // если добавить то выведет obj3, так как константа изменена
// let obj3 = obj2;
// obj3.a = 'chto budet tut';
// console.log(obj3)


// a = '';
// b = 9;
// c = null;
// console.log(!!(!a || !b && !c)); // true
// console.log(!!(a || !b && !c)); // false
// console.log(!!(a || !b && c)); // false
// console.log(!(!a && b && !c)); // false
// console.log(!(a || !b && !c)); // true

// b = + '5';
// console.log(b)
// b = + 'ghbdtn'
// console.log(b)


