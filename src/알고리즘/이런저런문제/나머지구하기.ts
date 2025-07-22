const input = `5 8 4`;
let [A, B, C] = input.split(' ').map(Number);


const one = (A + B) % C;
const two = ((A % C) + (B % C)) % C;
const three = (A * B) % C;  
const four = ((A % C) * (B % C)) % C;

console.log(one);
console.log(two);
console.log(three);
console.log(four);
