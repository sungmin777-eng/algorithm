const input =
`5
1 3 2 -1
2 4 4 -1
3 1 2 4 3 -1
4 2 4 3 3 5 6 -1
5 4 6 -1`.trim().split('\n');

const V = +input[0];
const graph = Array.from({ length: V + 1 }, () => [] as { to: number, dist: number }[]);


for (let i = 1; i <= V; i++) {
    const parts = input[i].split(' ').map(Number);
    const from = parts[0];
    let j = 1;
    while (parts[j] !== -1) {
        const to = parts[j];
        const dist = parts[j + 1];
        graph[from].push({ to, dist });
        j += 2;
    }
}

function dfs(start: number) {
    const visited = Array(V + 1).fill(false);
    const distance = Array(V + 1).fill(0);
    let maxNode = start;

    function go(node: number) {
        visited[node] = true;
        for (const { to, dist } of graph[node]) {
            if (!visited[to]) {
                distance[to] = distance[node] + dist;
                go(to);
                if (distance[to] > distance[maxNode]) {
                    maxNode = to;
                }
            }
        }
    }

    go(start);
    return { maxNode, maxDist: distance[maxNode] };
}

// Step 1: 아무 노드(1번)에서 가장 먼 노드를 찾기
const { maxNode: farthest1 } = dfs(1);
console.log('1번에서 가장 먼 노드:', farthest1);

// Step 2: 가장 먼 노드에서 다시 DFS하여 최대 거리 구하기
const { maxDist } = dfs(farthest1);
console.log('트리의 지름 =', maxDist); // 최종 답: 11
