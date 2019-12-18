function User(username, email){
    this.username = username;
    this.email = email;
}

User.prototype.login = function() {
    console.log(`${this.username} has logged in`)
    return this;
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
    return this;
}

function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
    //delete user
    users.filter(u => u.username !== user.username);
}   

// class User { 
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logout`);;
//         return this;
//     }
//     incScore(){
//         this.score++;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
    
// }

// class Admin extends User{
//     constructor(username, email, title){
//         super(username, email);
//         this.title = title;
//     }
    
//     deleteUser(user){
//         users = users.filter(u => u.username !== user.username);
        
//     }
// }

const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin ('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');

let users = [userOne, userTwo, userThree];
console.log(users);

userOne.login().logout();

userThree.deleteUser(userTwo);
console.log(users)