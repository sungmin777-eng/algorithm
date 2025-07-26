const n = 5;

for (let i = 0; i < n; i++) {
  const space = ' '.repeat(i);
  const star = '*'.repeat(2 * (n - i) - 1);
  console.log(space + star);
}

for (let i = n - 2; i >= 0; i--) {
  const space = ' '.repeat(i);
  const star = '*'.repeat(2 * (n - i) - 1);
  console.log(space + star);
}
