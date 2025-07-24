const rawInput = `
2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2
`;

const input = rawInput.trim().split('\n');

const K = Number(input[0]);
let idx = 1;

for (let test = 0; test < K; test++) {
    const [V, E] = input[idx++].split(' ').map(Number);
    const graph: number[][] = Array.from({ length: V + 1 }, () => []);
    const visited: number[] = Array(V + 1).fill(-1); 
    
    for (let i = 0; i < E; i++) {
        const [u, v] = input[idx++].split(' ').map(Number);
        graph[u].push(v);
        graph[v].push(u);
    }

    let isBipartite = true;

    const dfs = (node: number, color: number): boolean => {
        visited[node] = color;
        for (const next of graph[node]) {
            if (visited[next] === -1) {
                if (!dfs(next, 1 - color)) return false;
            } else if (visited[next] === color) {
                return false;
            }
        }
        return true;
    };

    for (let i = 1; i <= V; i++) {
        if (visited[i] === -1) {
            if (!dfs(i, 0)) {
                isBipartite = false;
                break;
            }
        }
    }

    console.log(isBipartite ? 'YES' : 'NO');
}
