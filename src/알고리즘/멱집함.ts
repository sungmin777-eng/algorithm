function powerSet(k: number): void {
if (k === n) {
// 현재 포함된 원소만 출력
let subset = '';
for (let i = 0; i < n; i++) {
if (include[i]) subset += data[i] + ' ';
}
console.log(subset.trim());
return;
}

include[k] = false;     // 현재 원소를 포함하지 않음
powerSet(k + 1);        // 왼쪽 서브트리

include[k] = true;      // 현재 원소를 포함함
powerSet(k + 1);        // 오른쪽 서브트리
}

// 실행
powerSet(0);

const data = ['a', 'b', 'c'];
const n = data.length;
const include: boolean[] = new Array(n).fill(false);

function powerSet(k: number): void {
  console.log(`powerSet(${k}) 호출됨 → include = [${include.join(', ')}]`);

  if (k === n) {
    let subset = '';
    for (let i = 0; i < n; i++) {
      if (include[i]) subset += data[i] + ' ';
    }
    console.log(`  👉 출력: [${subset.trim()}]`);
    return;
  }

  // 1. 현재 원소를 포함하지 않음
  include[k] = false;
  console.log(`include[${k}] = false`);
  powerSet(k + 1);

  // 2. 현재 원소를 포함함
  include[k] = true;
  console.log(`include[${k}] = true`);
  powerSet(k + 1);
}
