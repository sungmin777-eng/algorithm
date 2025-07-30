const lines=[1, 100, 2, 50, 60, 3, 5, 6, 7, 8]

const tails = [];  
for (const x of lines) {
 
  let low = 0, high = tails.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (tails[mid] < x) low = mid + 1;
    else            high = mid;
  }
  
  if (low === tails.length) tails.push(x);
  else                     tails[low] = x;
}

console.log(tails.length);