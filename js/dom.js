console.log('js connected');

//we can access the whole html using document in the console.log()
console.log(document);

const student = {
    name: 'abul',
    ID: 21,
    age: 25,
    study: function (time) {
        console.log(time, 'stduying')
    }
}

console.log(document.getElementsByTagName('h3'))
let licollection = document.getElementsByTagName('li');
// console.log(licollection);
for (const li of licollection) {
    console.log(li.innerText);
}

let headings = document.getElementsByTagName('h3');
// console.log(headings);
for (const heading of headings) {
    console.log(heading.innerText);
}