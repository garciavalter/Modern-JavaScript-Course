const greet = name => {
    console.log(`hello ${name}`);
};

greet('mario');
greet('luigi');
greet('link');

class User {
    constructor(){
        this.score = 0;
    }
}