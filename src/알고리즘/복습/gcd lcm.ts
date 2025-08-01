function gcd(a,b){
    while(b!==0){
        let temp=b
        b=a%b
        a=temp
        
    }
    return a;
}
console.log(gcd(24,18))
console.log(24*18/6)

const input=
`3
4 10 20 30 40
3 7 5 12
3 125 15 25`.trim().split('\n')

const T=Number(input[0])


for (let i=1;i<=T;i++){
    let answer=0;
    const data=input[i].split(' ').map(Number)
    console.log(data)

    for( let i=1;i<data.length-1;i++){
        for(let j=i+1;j<data.length;j++){
            answer+=gcd(data[i],data[j])
        }
    }
    console.log(answer)
}