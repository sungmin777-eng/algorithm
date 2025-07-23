function negativeBinary(n: number): string {
    let result = "";
  
    if (n === 0) {
        console.log(0);
        return;
    }

    while (n !== 0) {
        if (n < 0) {
            let temp = Math.abs(n);
            if (temp % 2 !== 0) {
                n = Math.floor(Math.abs(temp) / 2) + 1;
                result += ((n * 2) - temp).toString();
            } else {
                n = Math.floor(Math.abs(temp) / 2);
                result += ((n * 2) - temp).toString();
            }
        } else {
            let temp = n;
            n = -(Math.floor(temp / 2));
            result += (temp % 2).toString();
        }
    }

    console.log(result.split('').reverse().join('')); // Reverse the result before printing
}

// Test with a number
negativeBinary(-7); 
