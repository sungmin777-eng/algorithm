const input = [
    'This is String',
    'SPACE    1    SPACE',
    ' S a M p L e I n P u T     ',
    '0L1A2S3T4L5I6N7E8'
];

let line=0
let line1:string[]=[]
const line2:[]=[]
for(let i=0;i<input.length;i++){
    line1=new Array(input[line++])
    
}

console.log(line1)

const input: string[] = [
    'This is String',
    'SPACE    1    SPACE',
    ' S a M p L e I n P u T     ',
    '0L1A2S3T4L5I6N7E8'
];

// 문자열에서 소문자, 대문자, 숫자, 공백의 개수를 세는 함수
function countCharacters(str: string): number[] {
    let lowercase = 0;
    let uppercase = 0;
    let digits = 0;
    let spaces = 0;

    // 문자열을 한 문자씩 확인
    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            lowercase++; // 소문자
        } else if (char >= 'A' && char <= 'Z') {
            uppercase++; // 대문자
        } else if (char >= '0' && char <= '9') {
            digits++; // 숫자
        } else if (char === ' ') {
            spaces++; // 공백
        }
    }

    // 결과 배열로 반환
    return [lowercase, uppercase, digits, spaces];
}
console.log(countCharacters(input.forEach(line)))

// 예시 입력 배열 (문제에서 제공된 예제 입력)
const input: string[] = [
    'This is String',
    'SPACE    1    SPACE',
    ' S a M p L e I n P u T     ',
    '0L1A2S3T4L5I6N7E8'
];

// 각 문자열에 대해 countCharacters 함수를 호출하고 결과 출력
input.forEach(line => {
    const result = countCharacters(line);
    console.log(result.join(' ')); // 각 개수를 공백으로 구분하여 출력
});

let numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});

const input = [
  "This is String",
  "SPACE    1    SPACE",
  " S a M p L e I n P u T     ",
  "0L1A2S3T4L5I6N7E8"
];

for (let str of input) {
  let lowerCount = 0;
  let upperCount = 0;
  let digitCount = 0;
  let spaceCount = 0;
  
  for (let char of str) {
    if (char >= 'a' && char <= 'z') lowerCount++;   // 소문자
    else if (char >= 'A' && char <= 'Z') upperCount++;  // 대문자
    else if (char >= '0' && char <= '9') digitCount++;  // 숫자
    else if (char === ' ') spaceCount++;  // 공백
  }
  
  console.log(`${lowerCount} ${upperCount} ${digitCount} ${spaceCount}`);
}