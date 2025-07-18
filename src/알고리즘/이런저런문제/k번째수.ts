    const input = [
    '5 2',
    '4 1 2 3 5'
    ];

    const input1=input.split(' ').join('')
    const n=Number(input[0]);
    const k=Number(input[1]);
    const line=input.slice(2).map(Number);

    let res=line.sort((a,b)=>a-b)
    res=line[k-1]
    console.log(res)

    const [N, K] = input[0].split(' ').map(Number);

// 2. 숫자 배열 만들기
const lin = input[1].split(' ').map(Number);

// 3. 정렬
lin.sort((a, b) => a - b);

// 4. k번째로 작은 수 (k는 1-based)
const re = lin[K - 1];

console.log(re);