const input =
`12
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90`.trim().split('\n');

const T = Number(input[0]);

const data = input.slice(1).map(line => {
  const [name, kor, eng, math] = line.split(' ');
  return [name, Number(kor), Number(eng), Number(math)];
});

data.sort((a, b) => {
  const [nameA, korA, engA, mathA] = a;
  const [nameB, korB, engB, mathB] = b;

  if (korA !== korB) return korB - korA;
  if (engA !== engB) return engA - engB;
  if (mathA !== mathB) return mathB - mathA;
  return nameA.localeCompare(nameB);
});

for (const [name] of data) {
  console.log(name);
}
