const input=
`6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`.trim().split('\n')


const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const line = input[i].trim();
  let balance = 0;
  let isVPS = true;

  for (const ch of line) {
    if (ch === '(') {
      balance++;
    } else {
      if (balance === 0) {
        isVPS = false;
        break;
      }
      balance--;
    }
  }

  result.push(isVPS && balance === 0 ? 'YES' : 'NO');
}

console.log(result.join('\n'));

