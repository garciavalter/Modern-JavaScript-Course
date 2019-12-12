// Lesson 19  for Loops

// for (let i = 0; i < 5; i++)
// {
//     console.log('in loop', i);
// }
// // console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for (i=0; i < names.length; i++){ 
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// Lesson 20 While Loops
// let i = 0;

// while (i < 5){
//     console.log('in loop: ', i);
//     i++;
// }

// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;

// while (i < names.length){
//     console.log(names[i]);
//     i++;
// }

// Lesson 21 Do While Loops

// let i = 3;

// do{
//     console.log('val of i is: ', i);
//     i++;
// } while (i< 5);

// Lesson 22 If Statements

// const age = 25;

// if (age > 20){
//     console.log('You are over 20 years old.');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length >= 4) {
//     console.log ("That's a lot of ninjas");
// }

// const password = 'password123';

// if (password.length >= 8){
//     console.log('that password is long enough!')
// }

// Lesson 23 Else and Else if statements

// const password =  'p@ssword1234';

//  if (password.length >= 12){
//      console.log('that password is might strong!')
//  } else if (password.length >= 8){
//       console.log('that password is long enough!')
//   } else {
//       console.log ('that password is not long enough');
//  }

// Lesson 24 Logical Operators

// const password =  'p@ss';

//  if (password.length >= 12 && password.includes('@')){
//      console.log('that password is might strong!')
//  } else if (password.length >= 8 || password.includes('@') && password.length >= 5){
//       console.log('that password is long enough!')
//   } else {
//       console.log ('that password is not long enough');
//   }

// Lesson 25 logical NOT (!)

// let user = false;

// if (!user) {
//     console.log('user is not logged in');

// }

// Lesson 26 Break and Continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++){

//     if (scores[i] === 0){
//         continue;
//     }

//     console.log('your score is: ', scores[i]);

//     if (scores[i] === 100){
//         console.log('Congrats, you got the top score!');
//         break; 
//     }

// }

// Lesson 27 Switch Statements

// const grade = 'D';

// switch (grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//     case 'D':
//         console.log('you got an D!');
//         break;
//     case 'E':
//         console.log('you got an E!');   
//         break;
//     default:
//         console.log('is not a valid grade');
// }

// Lesson 28 Variables & Block Scope

// const age = 30;

// if (true){
//     const age = 40;
//     const name = 'shaun';
//     console.log ('inside first code block: ', age, name);
//     if (true){
//         const age = 50;
//         console.log('inside second code block: ', age);
//         var test = 'hello';
//     }
// }

// console.log ('outside code block: ', age, name, test);

