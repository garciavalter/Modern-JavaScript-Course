// Lesson 46 The Query Selector

// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// // console.log(paras[1]);
// console.log(errors);

// Lesson 47 Other ways to Query the DOM

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);


// get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);


// get elements by their tag name
// const paras = document.getElementsByTagName('p');

// console.log(paras);

// Lesson 48 Adding & Changing Page Content

// const para = document.querySelector('p');

// para.innerText = ' ninjas are awesome!';
// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerHTML);
//     para.innerText += ' new Text';
// });

// const content = document.querySelector('.content');

// content.innerHTML = '<h2> THIS IS A NEW H2</h2>'

// console.log(content.innerHTML);

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// }); 

// Lesson 49 Gettint & Setting attributes

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.thenetninja.co.uk');

// link.innerHTML = 'the net ninja website';

// const msgs = document.querySelector('p.error');

// msgs.setAttribute('class', 'success');
// msgs.setAttribute('style', 'color: green;');
// console.log(msgs);

// Lesson 50 - Changing CSS styles

// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;');
 
// console.log(title.style);

// title.style.color = "orange";
// title.style.margin = "50px";
// title.style.fontSize = "60px";
// title.style.margin = "";

// Lesson 51 Adding & Removing Classes

// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('Sucess');

// const paras = document.querySelectorAll('p');

// paras.forEach(p =>{
//     if (p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     else if (p.textContent.includes('sucess')){
//         p.classList.add('sucess');
//     }
// });

// const title = document.querySelector('.title');

// title.class List.toggle('test');
// title.classList.toggle('test');

// Lesson 53 - Event Basics

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('You clicked');
// })

// const ul = document.querySelector('ul');
// const items = document.querySelectorAll('li');
// const button = document.querySelector('button');

// // items.forEach(item => {
// //     item.addEventListener('click', e => {
// //         // console.log('item clicked');
// //         // console.log(e.target);
// //         console.log('You clicked on ' + item.textContent);
// //         e.stopPropagation();
// //         // e.target.style.textDecoration = 'line-through';
// //         e.target.remove();
// //     });
// // });

// button.addEventListener('click', () => {
//     // ul.innerHTML += '<li> something new </li>';
//     const li = document.createElement('li');
//     li.textContent = 'Something New';
//     // ul.append(li);
//     ul.prepend(li);
// });

// ul.addEventListener('click', e => {
//     // console.log('event in UL');
//     if (e.target.tagName === 'LI'){
//     e.target.remove();
//     }

// });

// Lesson 57 - More DOM Events

// const copy = document.querySelector('.copy-me');
// const box = document.querySelector('.box');

// copy.addEventListener('copy', () => {
//     console.log('OI! my content is copyright');
// });

// box.addEventListener('mousemove', e => {
//     // console.log(e);
//     // console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX}
//     y pos - ${e.offsetY}`;

// });

//  document.addEventListener('wheel', e => {
//     //  console.log(e);
//     console.log('Pos X is: ' + e.pageX, 'Pos Y is: ' + e.pageY);
//  });