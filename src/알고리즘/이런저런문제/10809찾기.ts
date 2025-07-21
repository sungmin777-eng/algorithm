const input='baekjoon'

const frequency=new Array(26).fill(-1)

for (let i=0;i<input.length;i++){
    const index=input.charCodeAt(i)-'a'.charCodeAt(0);
    frequency[index]=i
}
console.log(frequency.join(' '))
