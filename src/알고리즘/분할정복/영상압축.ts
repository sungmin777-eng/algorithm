const input = `
8
11110000
11110000
00011100
00011100
11110000
11110000
11110011
11110011
`.trim().split("\n");

const N = Number(input[0]);
const video: string[][] = input.slice(1).map(line => line.split(""));

// (x, y)부터 시작하는 size x size 영역을 압축
function compress(x: number, y: number, size: number): string {
  const first = video[x][y];

  let isSame = true;
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (video[i][j] !== first) {
        isSame = false;
        break;
      }
    }
    if (!isSame) break;
  }

  if (isSame) return first;

  const newSize = size / 2;
  const upperLeft = compress(x, y, newSize);                     // ↖
  const upperRight = compress(x, y + newSize, newSize);          // ↗
  const lowerLeft = compress(x + newSize, y, newSize);           // ↙
  const lowerRight = compress(x + newSize, y + newSize, newSize);// ↘

  console.log(`compress(${x}, ${y}, ${size})`);
  return `(${upperLeft}${upperRight}${lowerLeft}${lowerRight})`;

}


console.log(compress(0, 0, N))
