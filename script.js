// console.log('Hello world');
// let str = 'Hello world';
// console.log(str);

// let number = 5;
// let und;
// console.log(und);
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

console.log(1 == 1);

console.log(1 === '1');

console.log(!false); //! как частица нет, не фолс это тру

console.log(1 >= 0);
console.log(1 <= 0);

console.log(1 != "1");
console.log(1 !== "1");

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

// const age = +prompt('введите ваш возраст');
// if (age > 0 && age <= 120) {
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
//     trueTime = false;
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
// }

const x = +prompt('введите число 1');
const y = +prompt('введите число 2');
const sign = prompt('введите знак');

switch (sign) {
    case '+':
        alert(`${x + y}`);
        break;
    case '-':
        alert(`${x - y}`);
        break;
    case '/':
        alert(`${x / y}`);
        break;  
    case '*':
        alert(`${x * y}`)
        break;  
    default:
        break;
}

