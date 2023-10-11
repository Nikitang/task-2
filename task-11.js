const sekond = 3665;
const minute = Math.round(sekond / 60);
const hours = Math.round(minute / 60, -1);
const sek = Math.round(minute % 60);
console.log(`${hours} ${minute} ${sek}`);