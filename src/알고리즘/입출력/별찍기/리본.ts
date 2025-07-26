const n=5

for (let i=1;i<=2*n-1;i++){
let space=''
let star=''
if(i<=n){
star='*'.repeat(i)
space=' '.repeat(2*(n-i))    
} else{
    star='*'.repeat(n-(i-n))
    space=' '.repeat(2*(i-n))
}
console.log(star+space+star)
}