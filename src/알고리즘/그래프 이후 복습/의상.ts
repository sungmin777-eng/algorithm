const input =
`2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`.trim().split('\n');

const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[line++]);
  const count = new Map<string, number>();

  for (let i = 0; i < N; i++) {
    const [item, type] = input[line++].split(' ');
    count.set(type, (count.get(type) ?? 0) + 1);
    
    
  }
console.log(...count.values())
  let answer = 1;
  for (const num of count.values()) {

    answer *= (num + 1); // 안 입는 경우 포함
  }

  console.log(answer - 1); // 알몸 제외
}
