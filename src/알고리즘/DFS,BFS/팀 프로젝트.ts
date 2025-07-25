const input=
`2
7
3 1 3 7 3 4 6
8
1 2 3 4 5 6 7 8`
const input1=input.split('\n');
const T=Number(input1[0]);
const cycle:number[]=[];
const allCycle:number[][]=[];
let line=1
for (let t=0;t<T;t++){
    const n=Number(input1[line++])
    const arr=[0,...input1[line++].split(' ').map(Number)]
    console.log(n)
    console.log(arr)
    const visited:boolean[]=Array(n+1).fill(false)
    const finished = Array(n + 1).fill(false);
    let count=0;

    function dfs(v:number){
        visited[v]=true;
        const next=arr[v]
        

        if(!visited[next]){
            dfs(next);
        } else if (!finished[next]){
            let node=next
            count++
            cycle.push(node)
            while(node!==v){
                node=arr[node]
                count++
                console.log(count)
                console.log(node)
            }
            
        }
        finished[v]=true

        



        
        }
        for( let i=1;i<=n;i++){
            if(!visited[i] )dfs(i)
        
    }
    allCycle.push(cycle)
    console.log(n-count)
    console.log(allCycle)
}

