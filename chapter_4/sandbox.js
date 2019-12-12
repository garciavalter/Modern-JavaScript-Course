// Lesson 30 Function declarations & expressions
//function declaration

// function greet(){
//     console.log('hello there');
// }

// // function expression

// const speak = function(){
//     console.log('good day');
// };

// // greet();
// // greet();
// // greet();


// speak();

// Lesson 31 Arguments & paramenters

// const speak = function (name = 'luigi', time = 'night'){
//     name1 = name.replace(name[0], name[0].toUpperCase());
//     console.log(`Good ${time} ${name1}`);
// };

// speak();
// speak('shaun','day');

// returning values

// const speak = function (name = 'luigi', time = 'night'){
//     name1 = name.replace(name[0], name[0].toUpperCase());
//     console.log(`Good ${time} ${name1}`);
// };

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

// Lesson 33 Arrow Functions

// const calcArea = radius => 3.14 * radius ** 2;

// const area = calcArea (5);
// console.log(area);

// const greet = () => 'hello, world';

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// let greeting = greet();
// let tax = bill([10,15,30], 0.2);

// console.log(greeting);
// console.log(tax);


// Lesson 34 Functions vs Methods

// const name = 'shaun';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// Lesson 35 Foreach Method and Callback Functions

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`);
// }

// people.forEach(logPerson);

// Lesson 36 - Callback functions in Action

// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// let html =``;

// people.forEach(person => {
//     //create html template
//     html += `<li style ="color: purple;">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;
