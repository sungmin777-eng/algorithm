const S='baekjoon'
const suffixes: string[] = [];
for (let i = 0; i < S.length; i++) {
  suffixes.push(S.substring(i));
}

// 3) 사전순(lexicographical) 정렬
suffixes.sort();

// 4) 결과를 한 줄에 하나씩 출력
console.log(suffixes.join('\n'));