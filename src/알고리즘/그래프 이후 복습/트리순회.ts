const input = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`.trim().split('\n');

const N = Number(input[0]);
const tree: Record<string, { left: string; right: string }> = {};

for (let i = 1; i <= N; i++) {
  const [root, left, right] = input[i].split(' ');
  tree[root] = { left, right };
}

let preorder = '';
let inorder = '';
let postorder = '';

// 전위 순회: 루트 → 왼쪽 → 오른쪽
function preorderTraversal(node: string) {
  if (node === '.') return;
  preorder += node;
  preorderTraversal(tree[node]?.left);
  preorderTraversal(tree[node]?.right);
}


// 중위 순회: 왼쪽 → 루트 → 오른쪽
function inorderTraversal(node: string) {
  if (node === '.') return;
  inorderTraversal(tree[node]?.left);
  inorder += node;
  inorderTraversal(tree[node]?.right);
}

// 후위 순회: 왼쪽 → 오른쪽 → 루트
function postorderTraversal(node: string) {
  if (node === '.') return;
  postorderTraversal(tree[node]?.left);
  postorderTraversal(tree[node]?.right);
  postorder += node;
}

preorderTraversal('A');
inorderTraversal('A');
postorderTraversal('A');

console.log(preorder);   
console.log(inorder);    
console.log(postorder);  
