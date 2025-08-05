const input = `5 17`.trim().split(' ').map(Number);
const [N, K] = input;

const MAX = 100001;
const visited = Array(MAX).fill(-1); 

const queue: number[] = [];
visited[N] = 0;
queue.push(N);

while (queue.length > 0) {
    const cur = queue.shift()!;
    const nexts = [cur - 1, cur + 1, cur * 2];

    for (const next of nexts) {
        if (next >= 0 && next < MAX && visited[next] === -1) {
            visited[next] = visited[cur] + 1;
            queue.push(next);
        }
    }
}

console.log(visited[K]);