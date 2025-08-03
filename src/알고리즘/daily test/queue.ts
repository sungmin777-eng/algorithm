명령은 총 여섯 가지이다.

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const input=`15
push 1
push 2
front
back
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
front`.trim().split('\n')

const N=Number(inputp[0])

const lines=input.slice(1).map(line=>line.split(' '))
const queue:number[]=[]
const output:string[]=[]

for (const [x,y] of lines){
    switch (x){
        case 'push':
            que.push(Number(y))
            break
        case 'pop':
            output.push(que.length?String(que.shift()):'-1')
        case 'size':
            output.push(String(que.length))

        case 'empty'

    }
}