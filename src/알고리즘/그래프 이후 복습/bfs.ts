function mergeSort(a, l, r){
  if(l >= r) return;
  const m = (l + r) >> 1;
  mergeSort(a, l, m);
  mergeSort(a, m+1, r);
  merge(a, l, m, r);
}
DFS
ts
복사
편집
function dfs(u){
  visited[u] = true;
  for(const v of adj[u]){
    if(!visited[v]) dfs(v);
  }
}
BFS
ts
복사
편집
function bfs(s){
  const q = [s];
  visited[s] = true;
  while(q.length){
    const u = q.shift();
    for(const v of adj[u]){
      if(!visited[v]){
        visited[v] = true;
        q.push(v);
      }
    }
  }
}