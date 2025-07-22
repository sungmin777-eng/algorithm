const input=`500000000000000000 500000000000000002`

let[a,b]=input.split(' ').map(Number)

function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
     }
     return a;
    }
    console.log(gcd(a,b))

    const input = `3 4`;  // 예시 입력

// 입력 처리: 자릿수 A, B
const [x, y] = input.split(' ').map(Number);

// 자릿수가 작은 수만큼 1로 이루어진 수 생성
let min = Math.min(x, y);
let result = '1'.repeat(min);  // 최소 자릿수만큼 '1'을 반복한 문자열 생성

console.log(result)