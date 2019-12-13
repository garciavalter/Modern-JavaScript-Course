// filter method

const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter(score => {
    return score > 20;
});

console.log(filteredScores);

const users = [ 
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter (user =>  user.premium);

console.log(premiumUsers);

// map method

const prices = [10, 30, 15, 25, 50, 40, 5];

const salePrices = prices.map(price => price /2)

console.log(salePrices);

const products = [
    {name: 'gold star', price: 30},
    {name: 'mushroom', price: 10},
    {name: 'green shells', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'red shells', price: 50},
];

const discountPrice = products.map(product => {
    if (product.price > 30) {
       return {name: product.name, price: product.price / 2} 
    }
    else { 
        return {name: product.name, price: product.price};
    }
});

console.log(discountPrice);

// reduce method

const scores1 = [10, 20, 60, 40, 70, 90, 30];

const result = scores1.reduce((acc, curr) => {
    if (curr > 50) {
        acc ++;
    } 
    return acc;
}, 0)

console.log(result);

const scores2 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
];

const filteredScores2 = scores2.reduce((acc, curr) => {
    if (curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;
},0);

console.log(filteredScores2);

// find method

const scores3 = [10, 5, 0, 40, 30, 10, 90, 70];

const firstHighScore = scores3.find(score => score > 50);

console.log(firstHighScore);

// sort method

// example 1 - sorting string
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();
names.reverse();
console.log(names);


// example 2 - sorting numbers

const scores4 = [10, 50, 20, 5, 35, 70, 45];

scores4.sort((a,b) => a - b);
console.log(scores4);

// example 3 - sorting objects

const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70},

]

// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if (b.score > a.score) {
//         return 1; 
//     } else {
//         return 0;
//     }
// });

players.sort((a,b) => b.score - a.score);

console.log(players);



// const lowestPrice = products.filter(product => product.price > 20);
// console.log (lowestPrice);

// const salePrice = lowestPrice.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);
// console.log (lowestPrice));
console.log(promos);