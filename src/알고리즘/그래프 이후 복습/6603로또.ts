const input = `
7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0
`.trim().split('\n')

function backtrack(arr: number[], start: number, result: number[]) {
  if (result.length === 6) {
    console.log(result.join(' '));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    result.push(arr[i]);
    backtrack(arr, i + 1, result);
    result.pop();
    console.log(i)

  }
}

for (const line of input) {
  const [k, ...nums] = line.trim().split(' ').map(Number);
  if (k === 0) break;

  backtrack(nums, 0, []);
  console.log('');
}