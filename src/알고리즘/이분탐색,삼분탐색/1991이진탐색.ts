const input = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`.trim().split('\n');

const N = Number(input[0]);
const tree: Record<string, [string, string]> = {};


// 트리 구성
for (let i = 1; i <= N; i++) {
  const [parent, left, right] = input[i].split(' ');
  tree[parent] = [left, right];
}

// 전위 순회: 루트 → 왼쪽 → 오른쪽
function preorder(node: string): string {
  if (node === '.') return '';
  const [left, right] = tree[node];
  return node + preorder(left) + preorder(right);
}

// 중위 순회: 왼쪽 → 루트 → 오른쪽
function inorder(node: string): string {
  if (node === '.') return '';
  const [left, right] = tree[node];
  return inorder(left) + node + inorder(right);
}

// 후위 순회: 왼쪽 → 오른쪽 → 루트
function postorder(node: string): string {
  if (node === '.') return '';
  const [left, right] = tree[node];
  return postorder(left) + postorder(right) + node;
}

// 결과 출력
console.log(preorder('A'));   // 전위
console.log(inorder('A'));    // 중위
console.log(postorder('A'));  // 후위
