function promising(level: number): boolean {
  for (let i = 1; i < level; i++) {
    if (
      cols[i] === cols[level] ||                      // 같은 열
      Math.abs(cols[level] - cols[i]) === level - i   // 같은 대각선
    ) {
      return false;
    }
  }
  return true;
}

function queens(level: number): boolean {
  if (!promising(level)) return false;

  if (level === N) {
    for (let i = 1; i <= N; i++) {
      console.log(`(${i}, ${cols[i]})`);
    }
    return true; // 하나의 해만 찾고 멈추려면 true
    // return false; // 모든 해를 찾고 싶으면 false
  }

  for (let i = 1; i <= N; i++) {
    cols[level + 1] = i; // level + 1 번째 행의 퀸을 i 열에 배치
    if (queens(level + 1)) return true;
  }

  return false;
}
