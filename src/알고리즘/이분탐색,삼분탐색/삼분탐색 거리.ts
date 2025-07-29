const input = `5 5 10 10 7 2 20 30`.trim().split(' ').map(Number);
const [ax, ay, bx, by, cx, cy, dx, dy] = input;

const EPS = 1e-9;

function getDist(t: number): number {
  const mx = ax + (bx - ax) * t;
  const my = ay + (by - ay) * t;
  const kx = cx + (dx - cx) * t;
  const ky = cy + (dy - cy) * t;

  return Math.hypot(mx - kx, my - ky);
}

let left = 0;
let right = 1;

while (right - left > EPS) {
  const t1 = (2 * left + right) / 3;
  const t2 = (left + 2 * right) / 3;

  if (getDist(t1) < getDist(t2)) {
    right = t2;
  } else {
    left = t1;
  }
}

const answer = getDist((left + right) / 2);
console.log(answer.toFixed(10))