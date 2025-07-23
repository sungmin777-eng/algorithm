const input=
`34 17
2
2 16`

const input1=input.split('\n');
const [A,B]=input1[0].split(' ').map(Number);
const m=Number(input1[1]);
const digit=input1[2].split(' ').map(Number);

function AtoB(A:number,B:number,m:number,digit:number[]):number[]{


let demical=0
for (let i=0;i<m;i++){
    demical+=digit[i]*Math.pow(A,m-i-1)

    }    
    let Binvert:number[]=[]
    while (demical>0){
        
        Binvert.push(demical%B);
        demical=Math.floor(demical/B)

    }

    return Binvert.reverse().join('')
}
console.log(AtoB(A,B,m,digit))