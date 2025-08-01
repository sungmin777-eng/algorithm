// const input=`3
// 4
// 7
// 10`.split(/\s+/)

// const T=+input[0]

// let line=1
// for(let t=0;t<T;t++){
//     const N=+input[line++]
//     const dp=Array(N+1).fill(0)
//     dp[1]=1
//     dp[2]=2
//     dp[3]=4
//     for(let i=4;i<=N;i++){
//         dp[i]=dp[i-3]+dp[i-2]+dp[i-1]
//     }
//     console.log(dp[N])
// }

function countWays(n) {
  let ans = 0;
  function dfs(sum) {
    if (sum === n) {
      ans++;
      return;
    }
    if (sum > n) return;
    // 1, 2, 3을 하나씩 시도
    dfs(sum + 1);
    dfs(sum + 2);
    dfs(sum + 3);
  }
  dfs(0);
  return ans;
}

// 예시 실행
console.log(countWays(4)); 