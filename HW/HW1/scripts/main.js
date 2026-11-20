// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let x = 'hello';
let y = 'owu';
let z = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 16;
let k = true;
let l = false;

console.log(x, y, z, d, e, f, g, h, i, j, k, l);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Володимир';
let middleName = 'Врублевський';
let lastName = 'Володимирович';

let person = middleName + ' ' + firstName + ' ' + lastName;

console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName2 = prompt('Enter first name');
let lastName2 = prompt('Enter last name');
let age = prompt('Enter age');

console.log(firstName2);
console.log(lastName2);
console.log(age);