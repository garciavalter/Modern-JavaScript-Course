// rest parameter

const double = (...nums) => {
    console.log(nums);
    return nums.map (num => num * 2);
    // do something


}

const result = double(1,2,3,5,7,9,2,4,6,8);
console.log(result)


// spread syntax (arrays)

const people = ['shaun', 'ryu', 'crystal'];

console.log(...people);
const members = ['mario', 'chun-li', ...people];

console.log(members);

// spread syntax (objects)

const person = {name: 'shaun', age: 30, job: 'net ninja'};
const personClone = {...person, location: 'manchester'};

console.log(personClone);

