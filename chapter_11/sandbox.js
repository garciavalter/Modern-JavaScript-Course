// dates & times

const before = new Date('February 1 2019 7:30:59');
const timeOfClass = new Date(1553079153698);
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

// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - timeOfClass.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);


console.log(mins, hours, days);

console.log(`this class was recorded ${days} ago`);

const timestamp = 1675938474990;
console.log(new Date(timestamp));

// digital clock

const clock = document.querySelector('.clock');

const tick = () => { 

  const now = new Date();
  
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  
  const html = `
  <span>${h}</span> : 
  <span>${m}</span> : 
  <span>${s}</span>
  `;
  
  clock.innerHTML = html;

  
};

setInterval(tick, 1000);