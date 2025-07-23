function binToOcto(binary:string){
    while (binary.length%3!==0){
        binary='0'+binary
    }
    let result=''
    for (let i=0;i<binary.length;i+=3){
        let bin=binary.slice(i,i+3)
        result+=parseInt(bin,2).toString(8)
    }

    result= result.replace(/^0+/,'')
    return result;
}

// 입력 받기
const input = '1001100';  // 예시 입력

// 8진수로 변환
console.log(binToOcto(input))



