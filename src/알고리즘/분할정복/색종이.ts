const input = `
9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1
`.trim().split("\n");

const N = Number(input[0]);
const paper: number[][] = input.slice(1).map(line => line.split(' ').map(Number));

const count = {
    '-1':0,
    '0':0,
    '1':0,
};

function isSame(x:number,y:number,size:number){
    const first=paper[x][y]
    for (let i=x; i<x+size;i++){
        for(let j=y;j<y+size;j++){
            if(first!==paper[i][j]) return false;
        }
    }
    return true
}

function countPaper(x:number,y:number,size:number){
    if (isSame(x, y, size)) {
     count[String(paper[x][y])]++;
    return; 
  }


const newSize=size/3;

for (let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        countPaper(x+i*newSize,y+j*newSize,newSize)
    }
};
}
countPaper(0,0,N)
console.log(count['-1'])
console.log(count['0'])