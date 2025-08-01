const input=`60466175 36`.trim().split(' ')

const[data,B]=input

const demical= parseInt(data,10)
const thirySix=demical.toString(36)

console.log(thirySix.toUpperCase())

const line=`ZZZZZ 36`.split(' ')

const [x,y]=line


console.log(parseInt(x,36))