// Lesson 37 - Objects at Glance

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// // user.age = 35;

// console.log(user.age);

// const key = 'location';


// console.log(user[key]);
// console.log(user.name);

// console.log(typeof user);

// // Lesson 39 - Adding methods

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs: function(){

//     }
// };

// user.login();
// user.logout();

// const name = 'mario';

// console.log(name.toUpperCase());

// Lesson 40 'This' Keyword

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs: function(){
//         console.log('this user has written the following blogs: ');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         });

//     }
// };

// user.logBlogs();

// Lesson 41 Objects in Arrays

// const blogs = [
//     {
//         title: 'why mac & cheese rules',
//         likes: 30
//     },
//     {
//         title: '10 things to make with marmite',
//         likes: 20
//     }
// ];

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [
//         {
//             title: 'why mac & cheese rules',
//             likes: 30
//         },
//         {
//             title: '10 things to make with marmite',
//             likes: 20
//         }
//     ],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs: function(){
//         console.log('this user has written the following blogs: ');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         });

//     }
// };

// user.logBlogs();

// // Lesson 42 Math Objects

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 5.3;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // Random Numbers

// const random = Math.random();
// console.log(random);

// console.log(Math.round(random * 100));


// Lesson - 43 - Primitive Vs Reference Types