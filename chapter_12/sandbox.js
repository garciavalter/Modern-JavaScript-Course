// async & await

const getTodos = async () => {

    const response =  await fetch('todos/luig1i.json');
    
    if (response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }

    const data = await response.json();
    return data;

};

getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('reject: ', err.message));