const input=`3
1 45000
6 10
13 17`

const input1=input.split('\n')
const T=Number(input1[0])

function gcd(a,b){
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
    
}
let lcm=0
for (let i=1;i<=T;i++){
    let [a,b]=input1[i].split(' ').map(Number)

    lcm= (a*b)/gcd(a,b)
    console.log(lcm)
}


