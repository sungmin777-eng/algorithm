const input=`15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`.trim().split('\n')

const N: number = Number(input[0]);

// 고정 크기 링 버퍼: 명령 수 최대치의 두 배 정도로 잡아둡니다.
const BUF_SIZE = N * 2 + 1;
const buffer: number[] = new Array(BUF_SIZE);
let head: number = N;  // 시작 포인터
let tail: number = N;  // 끝 포인터

const output: string[] = [];

for (let i: number = 1; i <= N; i++) {
  const [cmd, arg] = input[i].split(' ');

  switch (cmd) {
    case 'push_front':
      buffer[--head] = Number(arg);
      
      break;

    case 'push_back':
      buffer[tail++] = Number(arg);
      
      break;
      
    case 'pop_front':
      if (head === tail) {
        output.push('-1');
      } else {
        output.push(buffer[head++].toString());
        console.log(head)
      }
      break;

    case 'pop_back':
      if (head === tail) {
        output.push('-1');
      } else {
        output.push(buffer[--tail].toString());
      }console.log(tail)
      break;

    case 'size':
      output.push((tail - head).toString());
      break;

    case 'empty':
      output.push(head === tail ? '1' : '0');
    
      break;

    case 'front':
      output.push(head === tail ? '-1' : buffer[head].toString());
      break;

    case 'back':
      output.push(head === tail ? '-1' : buffer[tail - 1].toString());
      break;
  }
  console.log(head)
  console.log(tail)
}

// 한 번에 출력
console.log(output.join('\n'));
