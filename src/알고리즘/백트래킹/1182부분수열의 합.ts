const input = `
5 0
-7 -3 -2 5 8
`.trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

let count = 0;

function backtrack(index: number, sum: number) { //이분 탐색 트리 형식의 백트래킹이라고 생각하면 됨.
  if (index === N) return;

  const newSum = sum + nums[index];
  if (newSum === S) count++;

  backtrack(index + 1, newSum);//현재 원소 포함
  backtrack(index + 1, sum);    //현재 원소 미포함.
}
backtrack(0, 0);
console.log(count);
