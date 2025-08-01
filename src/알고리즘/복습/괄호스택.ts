const line=`()(((()())(())()))(())`.trim()
let stack = [];
let result = 0;

for (let i = 0; i < line.length; i++) {
  if (line[i] === '(') {
    stack.push('(');
  } else {
    stack.pop(); 
    if (line[i - 1] === '(') {
 
      result += stack.length;
    } else {
      result += 1;
    }
  }
}

console.log(result);