const input = [-1234]; 
let n = input[0];  

let reverse = 0; 

 let N=Math.abs(n)
console.log(N)

while (N !== 0) {
    
    let digit = N % 10;  
    reverse = reverse * 10 + digit; 
    N=Math.floor(N/10)

n>0?console.log(reverse):console.log(-1*reverse)
}


const input1 = [12300];
let num = Number(input1[0]);
let rever = 0;
let hasZeroCount = 0; // 뒤에 0이 몇 개 있는지 카운트할 변수

while (num !== 0) {
    let numb = num % 10; // num의 마지막 자리를 구함
    if (numb === 0) {
        hasZeroCount++; // 0을 발견하면 카운트를 증가시킴
    }
    rever = rever * 10 + numb; // rever에 추가
    num = Math.floor(num / 10); // num을 10으로 나누어 자릿수를 한 칸씩 줄임
}

// 0을 출력하고 나서 rever 값 출력
console.log("0".repeat(hasZeroCount) + rever)

