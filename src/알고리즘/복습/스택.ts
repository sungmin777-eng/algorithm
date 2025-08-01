const input=
`14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`.trim().split('\n')

const N=Number(input[0])
const lines=input.slice(1).map(lines=>lines.split(' '))

const stack:number[]=[]
const output:string[]=[]

for (const [x,y] of lines){
    switch (x){
    case 'push':
        stack.push(Number(y))
        break
    case 'pop':
        output.push(stack.length?String(stack.pop()):'-1')
        break
    case 'size':
        output.push(String(stack.length))
        break
    case 'empty':
        output.push(stack.length?'0':'1')
        break
    case 'top':
        output.push(stack.length?String(stack[stack.length-1]):'-1')
        break
    default:
    console.log('초기')
    break

    
}
}
console.log(output.join('\n'))