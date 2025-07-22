const input=`7 3`

const input1=input.split(' ').map(Number)
const [n,k]=input1

function yose(n:number,k:number) {
    let result:number[]=[]
    let que:number[]=[]
    for (let i=1;i<=n;i++){
        que.push(i)
    }
        let index=0;

        while (que.length>0){
            index=(index+k-1)%que.length
            result.push(que.splice(index,1)[0])
        }
        return result;
        
}
let result=yose(7,3)
console.log(`<${result.join(', ')}>`)
