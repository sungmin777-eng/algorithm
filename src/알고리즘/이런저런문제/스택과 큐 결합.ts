const input = [
  '14',
  'push_back 1',
  'push_front 2',
  'front',
  'back',
  'size',
  'empty',
  'pop_front',
  'pop_back',
  'pop_front',
  'size',
  'empty',
  'pop_back',
  'push_front 3',
  'empty'
];

const n=Number(input[0]);
const line=input.slice(1);

const stack:number[]=[];
const que:number[]=[];

const Deque: number[] = [];
const output: string[] = [];

type Mode = 'stack' | 'que';

function getMode(cmd: string): Mode | null {
  if (cmd.includes('front')) return 'que';
  if (cmd.includes('back')) return 'stack';
  return null;
}

for (let i = 0; i < n; i++) {
  const [cmd, arg] = line[i].split(' ');

  switch (cmd) {
    case 'push_front':
      Deque.unshift(Number(arg));
      break;
    case 'push_back':
      Deque.push(Number(arg));
      break;
    case 'pop_front':
      output.push(Deque.length ? String(Deque.shift()) : '-1');
      break;
    case 'pop_back':
      output.push(Deque.length ? String(Deque.pop()) : '-1');
      break;
    case 'size':
      output.push(String(Deque.length));
      break;
    case 'empty':
      output.push(Deque.length ? '0' : '1');
      break;
    case 'front':
      output.push(Deque.length ? String(Deque[0]) : '-1');
      break;
    case 'back':
      output.push(Deque.length ? String(Deque[Deque.length - 1]) : '-1');
      break;
    default:
      console.log(`입력값 오류: ${cmd}`);
      break;
}
 const mode = getMode(cmd);
  if (mode === 'stack') {
    stack.push([...Deque]); // back 관련 명령어들
  } else if (mode === 'queue') {
    que.push([...Deque]); // front 관련 명령어들
  }
}
console.log(output.join('\n'));




console.log(stack);
console.log(que)
