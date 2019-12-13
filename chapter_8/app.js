const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form')
const scoreUpdate = document.querySelector('.result')

function addPercent() {
     return (100 / numberOfQuestions);
}

form.addEventListener('submit', e => {
    e.preventDefault();
   
    let score = 0;
    
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        
        if (answer === correctAnswers[index]){
            score += addPercent();
        }
        index++;
    });
    
    scrollTo(0,0);
    //  scoreUpdate.querySelector('span').textContent = `${score / correctAnswers.length * 100}%`;
     scoreUpdate.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        scoreUpdate.querySelector('span').textContent = `${Math.ceil(output)}%`;
       if (output === Math.ceil(score)){
            clearInterval(timer);
       } else {
            output++;
       }
    }, 10);


     
});


    

