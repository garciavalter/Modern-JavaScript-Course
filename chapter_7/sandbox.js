const submit = document.querySelector('.signup-form');
const userNamePattern = /^[a-zA-z]{6,12}$/;
const feedback = document.querySelector('.feedback');
//const username = document.querySelector('#username');


submit.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value)
    // console.log(submit.username.value);

    if (userNamePattern.test(submit.username.value)){
        console.log('your username is valid');
        feedback.style.background = 'darkgreen';
        feedback.textContent = 'Your UserName is Valid';
    } else{
        console.log('your username is invalid');
        feedback.style.background = 'darkred';
        feedback.textContent = 'Your UserName is Invalid';
    }
});

submit.username.addEventListener('keyup', e => {
    if (e.target.value.search(userNamePattern) < 0) {
        e.target.setAttribute('class', 'error');
    }
    else {
        e.target.setAttribute('class', 'success');
    }
});