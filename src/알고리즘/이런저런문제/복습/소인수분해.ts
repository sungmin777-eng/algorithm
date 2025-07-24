const input=`7108`

let n=Number(input.split(' '));
let divisor=2
while(Math.pow(divisor,2)<=n){
    while(n%divisor===0){
        console.log(divisor)
        n=n/divisor
    }
    divisor++
}
if(n>1) {console.log(n)}