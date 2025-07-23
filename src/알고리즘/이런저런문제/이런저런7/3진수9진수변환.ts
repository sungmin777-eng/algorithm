function threeToNine(base:string){
    while (base.length%2!==0){
        base='0'+base
    }
    let result=''
    for(let i=0;i<base.length;i+=2){
        let chunk=base.slice(i,i+2)
        result+=parseInt(chunk,3).toString(9)
    }

    result=result.replace(/^0+/,'')
    return result;
}
const input='2212'
console.log(threeToNine(input)))