function bfs(x: number, y: number): number {
  const queue: number[][] = [[x,y]];
  visited[x][y] = true;
  console.log(queue)

  while (queue.length) {
    const [x, y] = queue.shift()!;
    
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (!isMovable(nx, ny)) continue;

      visited[nx][ny] = true;
      edges[nx][ny] = edges[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  return edges[N - 1][M - 1];
}