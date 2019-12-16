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

resources.forEach((resource) => {
    getTodos(resource)
        .then(data => console.log(data))
        .catch(err => console.log(err));
});