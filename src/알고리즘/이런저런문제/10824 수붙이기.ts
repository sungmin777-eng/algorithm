const input = '10 20 30 40'; 
const [A, B, C, D] = input.split(' ').map(Number);

const AB = Number(`${A}${B}`);


const CD = Number(`${C}${D}`);

console.log(AB + CD);