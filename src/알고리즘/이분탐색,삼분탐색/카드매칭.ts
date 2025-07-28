

const input = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`.trim().split('\n');



const n = Number(input[0]);
const sangCards = input[1].split(' ').map(Number).sort((a, b) => a - b);

const m = Number(input[2]);
const targets = input[3].split(' ').map(Number);

function binarySearch(arr: number[], target: number): boolean {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
}

const result = targets.map(num => binarySearch(sangCards, num) ? 1 : 0);
console.log(result.join(' '));
