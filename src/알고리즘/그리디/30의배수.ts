const input = '123123480'; 

const digits = input.split('').map(Number);
const sum = digits.reduce((acc, cur) => acc + cur, 0);

if (!digits.includes(0)) {
  console.log('-1');
} else if (sum % 3 !== 0) {
  console.log('-1');
} else {
  digits.sort((a, b) => b - a);
  const result = digits.join('');
  console.log(result);
}
