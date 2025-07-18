import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const commands = input.slice(1);

const stack: number[] = [];
const output: string[] = [];

for (let i = 0; i < N; i++) {
  const [cmd, arg] = commands[i].split(' ');

  switch (cmd) {
    case 'push':
      stack.push(Number(arg));
      break;
    case 'pop':
      output.push(stack.length ? String(stack.pop()) : '-1');
      break;
    case 'size':
      output.push(String(stack.length));
      break;
    case 'empty':
      output.push(stack.length === 0 ? '1' : '0');
      break;
    case 'top':
      output.push(stack.length ? String(stack[stack.length - 1]) : '-1');
      break;
  }
}

console.log(output.join('\n'));


const stack:number[]=[];
const outpt:string[]=[];

for (let i=0;i<N;i++){
    const [cmd,arg]=commands[i].split(' ');

    switch (cmd){
        case 'push':
            stack.push(Number(arg))
            break
        
        case 'pop':
            output.
    }
}