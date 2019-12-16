const resources = [
    'todos/luigi.json',
    'todos/mario.json',
    'todos/shaun.json'
]
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {

            // console.log(request, request.readyState);

            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.response);
                resolve(data);
            } else if (request.readyState === 4){
                reject('could not fetch data, error: ' + request.status);
            }

        });


        request.open('GET', resource);
        request.send();
    });
};
// promisse exemple

// const getSomething = () => {
    
//     return new Promise((resolve, reject)=> {
//         // fetch something
//         // resolve('some data');
//         reject('some error');
//     });

// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// // });

// getSomething()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// let i = 0;
// resources.forEach((resource) => {
//     getTodos(resource)
//         .then(data => console.log('Promisse resolved', resources.indexOf(resource) +1, data))
//         .catch(err => console.log(err));
//         i++;
// });

getTodos('todos/luigi.json').then(data =>{
    console.log('promise 1 resolved: ', data);
    return getTodos('todos/marios.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log('promise 3 resolved: ', data);
}).catch(err => {
    console.log('An error ocurred');
});