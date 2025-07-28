const n=4

for (let i=1;i<=n;i++){    
    let space=''
    let star=''

    space=' '.repeat(n-i)
    star='* '.repeat(i).trimEnd()
    
    console.log(space+star)
}


