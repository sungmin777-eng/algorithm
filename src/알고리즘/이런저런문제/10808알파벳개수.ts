

const input = 'baekjoon'; // 백준에서는 fs.readFileSync로 입력을 받음

// 알파벳 빈도 저장 배열 (a부터 z까지)
const frequency = new Array(26).fill(0);

// 문자열 순회하면서 빈도 계산
for (let char of input) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0); // 'a'의 ASCII 값을 기준으로 인덱스 계산
    frequency[index]++;
}

// 결과 출력 (공백으로 구분하여 출력)
console.log(frequency.join(' '));

const freq=new Array(28).fill(0);
for (let char of input){
    const ind=char.charCodeAt(0) -'bad'.charCodeAt(0);
    freq[ind]+=2;
}
console.log(freq)