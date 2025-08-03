const input=
`2
7
3 1 3 7 3 4 6
8
1 2 3 4 5 6 7 8`.trim().split('\n')

const T=+input[0];
let line=1;

for(let t=0;t<T;t++){
const N=+input[line++]

const edges=input[line++].split(' ').map(Number)
const graph=Array.from({length:N+1},()=>[])
for(let i=1;i<=N;i++){
    graph[i].push(edges[i-1])
}
console.log(graph)

function solve(edges: number[], N: number): number {
  const visited = Array(N+1).fill(false);   // 전체 탐색 방문 표시
  const done    = Array(N+1).fill(false);   // 해당 노드가 완전 처리됐는지
  let teamCount = 0;

  function dfs(u: number): void {
    visited[u] = true;
    const v = edges[u];                      // u → v (단방향)

    if (!visited[v]) {
      dfs(v);
    } else if (!done[v]) {
      // v를 이미 방문했지만, 아직 '완료(done)' 처리 전 → u→...→v 사이클
      // 사이클에 속한 노드 수를 셉니다.
      let x = v;
      do {
        teamCount++;
        x = edges[x];
      } while (x !== v);
    }
    done[u] = true;  // u에 대한 모든 후속 처리가 끝났음을 표시
  }

  // 각 학생(1~N)에 대해 dfs 실행
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) dfs(i);
  }
  return N - teamCount;  // 팀에 속하지 않은 학생 수
}
console.log(solve(edges,N))
}