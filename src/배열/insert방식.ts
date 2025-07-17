const path = [1, 2];
const result = [];

result.push(path);     // (1) 얕은 복사 (참조가 저장됨)
path.pop();            // (2) 원래 배열에서 마지막 요소 제거됨

console.log(result);

const pathh = [1, 2];
result.push([...pathh]);  // 완전히 새로운 배열을 복사해서 저장
pathh.pop();              // 원래 배열 수정해도
console.log(result);     // ✅ 여전히 [ [1, 2] ]