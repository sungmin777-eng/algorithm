const input=`4 1`

const day:number[]=[0,31,28,31,30,31,30,31,31,30,31,30,31]
const month:number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12]
const monTosun = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
console.log(monTosun)

const [x,y]=input.split(' ').map(Number)

let result=0;
for (let i=0;i<x;i++){
    result+=day[i]
}
console.log(result)
console.log(monTosun[(result+y-1)%7])

