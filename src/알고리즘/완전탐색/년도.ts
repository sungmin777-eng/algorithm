const input = [28, 3, 10];

const [A, B, C] = input;

let year = 1;

while (year <= 7980) {
  if ((year - A) % 15 === 0 && (year - B) % 28 === 0 && (year - C) % 19 === 0) {
    console.log(year);
    process.exit
    break;
  }
  year++;
}
console.log(year)

const char='hello'
console.log(char.substring(-1,5))
console.log(char.slice(0,5,2))