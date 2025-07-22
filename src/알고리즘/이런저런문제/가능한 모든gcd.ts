const input=`3
4 10 20 30 40
3 7 5 12
3 125 15 25`

const line=input.split('\n')

const T=Number(input[0])

function gcd(a,b){
    while (b!==0){
        let temp=b
        b=a%b
        a=temp
    }
    return a;
}
for (let i= 1;i<=T;i++){
    let numbers=line[i].split(' ').map(Number)
    let n=numbers[0]

    let gcdsum=0;

    for (let j=1;j<=n;j++){
        for(let k=j+1;k<=n;k++){
            gcdsum+=gcd(numbers[j],numbers[k])
        }
    }
    console.log(gcdsum)
}
