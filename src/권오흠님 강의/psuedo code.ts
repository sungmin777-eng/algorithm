BFS(G, s)
  for each node u in V:
    d[u] = -1        # 거리 초기화 (-1: unvisited)
    π[u] = null      # 전이 노드 초기화

  d[s] = 0
  π[s] = null
  Q = ∅
  Enqueue(Q, s)

  while Q ≠ ∅:
    u = Dequeue(Q)
    for each v in Adj[u]:
      if d[v] == -1:
        d[v] = d[u] + 1
        π[v] = u
        Enqueue(Q, v)
