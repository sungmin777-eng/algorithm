const input=[1234]

let n=Number(input[0])
let reverse=0

while (n!==0){
    let digit=n%10
    reverse+=digit
    n=Math.floor(n/10)

    console.log(reverse)
}

const input1=[100]

let N=Number(input1[0])
let rever=0

while (N!==0){
    let digi=N%10
    rever=rever*10+digi
    N=Math.floor(N/10)

}
rever%10===0?console.log(`${rever}+yes`):console.log(rever+'No')

const input2 = [321, 456, 789];

let maxReverse = 0;  // 뒤집은 숫자들 중 가장 큰 값을 저장할 변수

for (let NN of input2) {
    let re = 0;  // 각 숫자를 뒤집을 때마다 초기화
    
    while (NN !== 0) {
        let di = NN % 10;  // 마지막 자릿수를 추출
        re = re * 10 + di;  // reverse에 그 자릿수 추가
        NN = Math.floor(NN / 10);  // 마지막 자리를 제거
    }
    
    // 뒤집은 숫자 중 최댓값을 추적
    if (re > maxReverse) {
        maxReverse = re;
    }
}

console.log(maxReverse);  // 최댓값 출력



