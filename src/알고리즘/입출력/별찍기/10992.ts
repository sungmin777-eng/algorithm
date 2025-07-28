const n =4
for (let i = 1; i <= n; i++) {
  const space = ' '.repeat(n - i);
  if (i === 1) {
    console.log(space + '*');
  } else if (i === n) {
    console.log('*'.repeat(2 * n - 1));
  } else {
    const innerSpace = ' '.repeat(2 * i - 3);
    console.log(space + '*' + innerSpace + '*');
  }
}