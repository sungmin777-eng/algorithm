function isprime(n:number):boolean{
    if (n<=1) return false;
    if (n===2) return true;
    if (n%2===0) return false;
    for (let i=3; i*i<=n;i+=2){
        if(n%i === 0) return false;
    }

    return true;
}

function countprime(arr:number){
    let primecount=0;
    arr.forEach(num => {if(isprime(num)){
        primecount++;
    }
        
    });
    return primecount
}
const input = [1, 3, 5, 7]; 
console.log(countprime(input));





}