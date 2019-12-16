const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

        // console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            callback(undefined, data);
        } else if (request.readyState === 4){
            callback('could not fetch data, error: ', undefined);
        }

    });


request.open('GET', 'todos.json');
request.send();
};

getTodos((err, data) => {
    console.log('callback fired!')
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});