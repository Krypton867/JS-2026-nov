// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book11 = {
    title: 'The Little Prince',
    pageCount: 96,
    genre: 'Philosophical fiction'
};
let book12 = {
    title: '1984',
    pageCount: 320,
    genre: 'Dystopian fiction'
};
let book13 = {
    title: 'The Hobbit',
    pageCount: 304,
    genre: 'Fantasy, adventure'
};


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book21 = {
    title: 'The Little Prince',
    pageCount: 96,
    genre: 'Philosophical fiction',
    authors: [
        {name: 'Antoine de Saint-Exupery', age: 44}
    ]
};
let book22 = {
    title: '1984',
    pageCount: 320,
    genre: 'Dystopian fiction',
    authors: [
        {name: 'George Orwell', age: 46}
    ]
};
let book23 = {
    title: 'The Hobbit',
    pageCount: 304,
    genre: 'Fantasy, adventure',
    authors: [
        {name: 'John Ronald Reuel Tolkien', age: 81}
    ]
};


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user1 = {
    name: 'name1',
    username: 'username1',
    password: '1a'
}
let user2 = {
    name: 'name2',
    username: 'username2',
    password: '2b'
}
let user3 = {
    name: 'name3',
    username: 'username3',
    password: '3c'
}
let user4 = {
    name: 'name4',
    username: 'username4',
    password: '4d'
}
let user5 = {
    name: 'name5',
    username: 'username5',
    password: '5e'
}
let user6 = {
    name: 'name6',
    username: 'username6',
    password: '6f'
}
let user7 = {
    name: 'name7',
    username: 'username7',
    password: '7g'
}
let user8 = {
    name: 'name8',
    username: 'username8',
    password: '8h'
}
let user9 = {
    name: 'name9',
    username: 'username9',
    password: '9i'
}
let user10 = {
    name: 'name10',
    username: 'username10',
    password: '10j'
}

console.log(user1.password);
console.log(user2.password);
console.log(user3.password);
console.log(user4.password);
console.log(user5.password);
console.log(user6.password);
console.log(user7.password);
console.log(user8.password);
console.log(user9.password);
console.log(user10.password);


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temp = [{morning: 10, day: 15, evening: 13}, {morning: 11, day: 16, evening: 14}, {morning: 9, day: 14, evening: 12}, {morning: 10, day: 15, evening: 13}, {morning: 11, day: 16, evening: 14}, {morning: 10, day: 15, evening: 13}, {morning: 10, day: 15, evening: 13}];


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1;
if (a !== 0){
    console.log('Вірно');
}else{
    console.log('Невірно');
}
let b = 0;
if (b !== 0){
    console.log('Вірно');
}else{
    console.log('Невірно');
}
let c = -3;
if (c !== 0){
    console.log('Вірно');
}else{
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 50;
if (time >=0 && time <= 15) {
    console.log('Перша частина години');
}else if(time >15 && time <= 30){
    console.log('Друга частина години');
} else if(time >30 && time <= 45){
    console.log('Третя частина години');
} else{
    console.log('Четверта частина години');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 31;

if (day >0 && day <= 10) {
    console.log('Перша декада');
}else if(day >10 && day <= 20) {
    console.log('Друга декада');
}else{
    console.log('Третя декада');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let DayOfTheWeek = 5;
switch (DayOfTheWeek){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Число повинно бути в діапазоні від 1 до 7');
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Перше число');
let number2 = +prompt('Друге число');

if (number1 > number2){
    console.log(number1);
} else if(number1 < number2){
    console.log(number2);
} else{
    console.log('Числа рівні');
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = 0;
if (!x === true){
    x = 'default';
}
console.log(x);


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
}