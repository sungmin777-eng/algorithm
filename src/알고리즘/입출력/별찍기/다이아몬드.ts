const n = 5;

for (let i = 1; i <= 2 * n - 1; i++) {
  let space = '';
  let star = '';

  if (i <= n) {
    space = ' '.repeat(n - i);
    star = '*'.repeat(2 * i - 1);
  } else {
    space = ' '.repeat(i - n);
    star = '*'.repeat(2 * (2 * n - i) - 1);
  }

  console.log(space + star);
}