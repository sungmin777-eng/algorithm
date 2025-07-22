const input = `abcd
3
P x
L
P y`;
const input1=input.split('\n')
const str:string=input1[0]
const n:number=Number(input1[1])
const command=input1.slice(2)
console.log(command)

const stack:string[]=[]
const output:stringp[]=[]

for(let i=0;i<n;i++){
    const [cmd,arg]=command[i]

    switch (cmd){
        case 'L':
            
    }

}

let input = `abcd
3
P x
L
P y`;

const input1 = input.split('\n');  // 입력을 줄 단위로 나누기
let str: string = input1[0];       // 첫 번째 줄은 초기 문자열
let m: number = parseInt(input1[1]); // 두 번째 줄: 명령어 개수
let commands: string[] = input1.slice(2);  // 나머지 명령어들

let left: string[] = [...str];  // 초기 문자열을 왼쪽 스택으로 설정
let right: string[] = [];  // 오른쪽 스택은 비어 있음

// 명령어 처리
commands.forEach(command => {
    const [cmd, arg] = command.split(' ');  // 각 명령어를 공백으로 분리

    switch (cmd) {
        case 'L':  // 왼쪽으로 한 칸 이동
            if (left.length > 0) {
                right.push(left.pop()!);  // 왼쪽 스택에서 하나를 꺼내 오른쪽 스택으로
            }
            break;
        case 'D':  // 오른쪽으로 한 칸 이동
            if (right.length > 0) {
                left.push(right.pop()!);  // 오른쪽 스택에서 하나를 꺼내 왼쪽 스택으로
            }
            break;
        case 'B':  // 왼쪽 문자 삭제
            if (left.length > 0) {
                left.pop();  // 왼쪽 스택에서 하나를 제거
            }
            break;
        case 'P':  // 문자 삽입
            left.push(arg);  // 왼쪽 스택에 문자를 추가
            break;
    }
});

// 왼쪽 스택과 오른쪽 스택을 합쳐 최종 문자열 출력
console.log([...left, ...right.reverse()].join(''));


//커서 이동을 왼쪽 오른쪽 스택값으로 처리해서 설정할 수 있다. 