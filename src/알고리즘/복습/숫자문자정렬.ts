const input =
`21 Junkyu
21 Dohyun
20 Sunyoung`.trim().split('\n');

const records = input.map(line => {
  const [num, name] = line.split(' ');
  return [ Number(num), name ];
});
console.log(records)


records.sort(([numa, namea], [numb, nameb]) => {
  if (numa !== numb) {
    return numa - numb;               // 숫자로 비교
  }
  return namea.localeCompare(nameb);     // 숫자 같으면 문자열 비교
});
console.log(records)