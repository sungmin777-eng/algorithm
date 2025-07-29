    const arr = [1, 3, 5, 5, 5, 7, 9];
    const target = 5;


    function lowerBound(arr:number[],target:number){
        let left=0;
        let right=arr.length

        

        while(left<right) {
            const mid=Math.floor((left+right)/2)
            if(arr[mid]<target) left=mid+1
            else right=mid
        }
        return left;
    }
    console.log(lowerBound(arr,5))

    function upperBound(arr:number[],target:number){
        let left=0
        let right=arr.length
        while(left<right){
            const mid=Math.floor((left+right)/2)

            if(arr[mid]<=target) left=mid+1
            else right=mid
        }
        return left;
    }

    console.log(upperBound(arr,5))
    console.log(arr)