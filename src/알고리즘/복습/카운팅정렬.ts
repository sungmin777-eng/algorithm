// Quokka.js용 카운팅 정렬 데모 코드

// 1) 테스트용 입력 문자열 (Quokka에 붙여넣고 바로 실행해 보세요)
const inputStr = `
10
5
2
3
1
4
2
3
5
1
13
`.trim();

const [nLine, ...valueLines] = inputStr.split('\n');
const N = Number(nLine);
const lines = valueLines.map(Number);

const max=Math.max(...lines)

const count=Array(max+1).fill(0)

for (const x of lines){
    count[x]++
}

const stack:number[]=[]
for (let i=1;i<=max;i++){
    for (let j=1;j<=count[i];j++){
        stack.push(i)

    }
}


console.log(stack.join('\n'))