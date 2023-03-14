console.log('js connected');

//we can access the whole html using document in the console.log()
// console.log(document);

// const student = {
//     name: 'abul',
//     ID: 21,
//     age: 25,
//     study: function (time) {
//         console.log(time, 'stduying')
//     }
// }

// console.log(document.getElementsByTagName('h3'))
// let licollection = document.getElementsByTagName('li');
// // console.log(licollection);
// for (const li of licollection) {
//     console.log(li.innerText);
// }

// let headings = document.getElementsByTagName('h3');
// // console.log(headings);
// for (const heading of headings) {
//     console.log(heading.innerText);
// }

//get element by ID
let menuTitle = document.getElementById('menu-title');
console.log(menuTitle.innerText);

//if we want to change the innertext
menuTitle.innerText = 'js domination';

//get element by className
let changeColor = document.getElementsByClassName('important-places');
console.log(changeColor);


//by query SelectorAll
// console.log(document.querySelectorAll('.fruits-container li'));

let allfruit = document.querySelectorAll('.fruits-container li');
console.log(allfruit.innerText);
for (let fruit of allfruit) {
    console.log(fruit.innerText);
}
// console.log(document.querySelector('.fruits-container li'));


//how to access style from js
console.log(document.getElementsByClassName('.menu-title').style)