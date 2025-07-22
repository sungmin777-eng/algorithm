const input ='baekjoon'

let result:string[]=[]


for (let i=0; i<input.length;i++){
    result.push(input.slice(i))

}
result.sort()
console.log(result.join('\n'))

const input = 'baekjoon'; // 예시 입력

// 모든 접미사를 구하기
const suffixes = [];
for (let i = 0; i < input.length; i++) {
    suffixes.push(input.slice(i));
}

// 사전순으로 정렬
suffixes.sort();

// 정렬된 접미사를 출력
suffixes.forEach(suffix => {
    console.log(suffix);
});

