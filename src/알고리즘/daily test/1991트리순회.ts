const input =
`7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`.trim().split('\n')

const N = +input[0]
const tree = new Map<string, { left: string, right: string }>()

let line = 1;
for (let i = 0; i < N; i++) {
    const [root, left, right] = input[line++].split(' ')
    tree.set(root, { left, right })
}

let preorder = ''
let inorder = ''
let postorder = ''

function rootPatrol(node: string) {
    if (node === '.') return
    preorder += node
    const current = tree.get(node)
    console.log(current)
    rootPatrol(current!.left)
    rootPatrol(current!.right)
}

function leftPatrol(node: string) {
    if (node === '.') return
    const current = tree.get(node)
    leftPatrol(current!.left)
    inorder += node
    leftPatrol(current!.right)
}

function rightPatrol(node: string) {
    if (node === '.') return
    const current = tree.get(node)
    rightPatrol(current!.left)
    rightPatrol(current!.right)
    postorder += node
}

rootPatrol('A')
leftPatrol('A')
rightPatrol('A')

console.log(preorder)
console.log(inorder)
console.log(postorder)
