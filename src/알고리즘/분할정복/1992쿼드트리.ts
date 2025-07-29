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

console.log(video)