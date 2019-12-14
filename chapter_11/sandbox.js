// dates & times

const now = new Date();

console.log(now);
console.log(typeof now);

// year, month, day, times

console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate', now.getDate());
console.log('getDay', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());

// timestamps

console.log('timestamp: ', now.getTime());

// console.log( (now.getTime() - 1553079153698)/100/60/60/24);

// date strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());