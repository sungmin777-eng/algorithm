const input = [
  '15',
  'push 1',
  'push 2',
  'front',
  'back',
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
  'front'
];

const n= Number(input[0]);
const line= input.slice(1)

console.log(line)
const que:number[]=[]
const output:string[]=[]
for(let i=0;i<n;i++){
    const[cmd,arg]=line[i].split(' ')

    switch (cmd){
        case 'push':
            que.push(Number(arg))
            break
        case 'pop':
            output.push(que.length?String(que.shift()):'-1')
            break
        case 'size':
            output.push(String(que.length))
            break
        case 'empty':
            output.push(que.length? '0':'1')
            break
        case 'front':
            output.push(que.length? String(que[0]):'-1')
            break
        case 'back':
            output.push(que.length? String(que[que.length-1]):'-1')
            break

        default;
        console.log('입력값이 없습니다');
        break
    }
}

console.log(output.join('\n'))

