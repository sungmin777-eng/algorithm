const input='((()))(())'

function countIronStickPieces(input: string): number {
  const stack: string[] = [];
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    const cur = input[i];

    if (cur === '(') {
      stack.push(cur);
    } else {
      stack.pop(); // 무조건 pop

      if (input[i - 1] === '(') {
        // 레이저: 레이저 앞에 '(' 있었음
        result += stack.length;
      } else {
        // 막대기 끝
        result += 1;
      }
    }
  }

  return result;
}
console.log(countIronStickPieces(input))