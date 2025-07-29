function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let char of s) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isValid("(())()")); 
console.log(isValid("(()("));   
console.log(isValid(")("));  