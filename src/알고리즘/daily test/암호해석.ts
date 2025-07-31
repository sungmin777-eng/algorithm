function countDecodings(code: string): number {
  const MOD = 1_000_000;
  const n = code.length;

  if (n === 0 || code[0] === '0') return 0;

  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;        
  dp[1] = 1;        
  for (let i = 2; i <= n; i++) {
    const one = code[i - 1];           
    const two = code.substring(i - 2, i); 

    // 한 자리 해석: '1'~'9' 모두 유효
    if (one !== '0') {
      dp[i] = (dp[i] + dp[i - 1]) % MOD;
    }

    // 두 자리 해석: "10"~"26" 사이만 유효
    const val = parseInt(two, 10);
    if (val >= 10 && val <= 26) {
      dp[i] = (dp[i] + dp[i - 2]) % MOD;
    }
  }

  return dp[n];
}
console.log(countDecodings('1111111111'))