function primeFactorization(N: number) {
    let divisor = 2;    

    while (divisor * divisor <= N) {
        
        while (N % divisor === 0) {
            console.log(divisor); 
            N = N/divisor; 
        }
        divisor++; 
    }

    
    if (N > 1) {
        console.log(N);
    }
}

const N = 18;
if (N !== 1) {
    primeFactorization(N); 
}
