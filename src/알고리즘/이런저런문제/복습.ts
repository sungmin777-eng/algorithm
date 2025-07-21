const input = [
  '15',
  'push 1',
  'push 2',
  'top',
  'size',
  'empty',
  'pop',
  'pop',
  'pop',
  'size',
  'empty',
  'pop',
  'push 3',
  'empty',
  'top'
  'none'
];

const n=Number(input[0]);
const line=input.slice(1);
console.log(line)

const stack:number[]=[];
const output:string[]=[];
for(let i=0;i<n;i++){
    const [cmd,arg]=line[i].split(' ')
console.log(line)
    switch (cmd){
        case 'push':
            stack.push(Number(arg))
            break
        case 'pop':
            output.push(stack.length? String(stack.pop()):-1)
            break
        case 'size':
            output.push(String(stack.length))
            break
        case 'empty':
            output.push(stack.length===0?String(1):String(0))
            break
        case 'top'  :
            output.push(stack.length?String(stack[stack.length-1]):String(-1))
            break
        default:
            output.push('출력값이 없습니다');
            break
    }
}
console.log(output.join('\n'))


