const input = `0 0 1 1 1 0 0 1`.trim().split(' ').map(Number);

const [Ax, Ay, Bx, By, Cx, Cy, Dx, Dy] = input;

function getDistance(t: number): number {
  const mx = Ax + (Bx - Ax) * t;
  const my = Ay + (By - Ay) * t;
  const gx = Cx + (Dx - Cx) * t;
  const gy = Cy + (Dy - Cy) * t;

  return Math.hypot(mx - gx, my - gy); // √((x2 - x1)^2 + (y2 - y1)^2)
}

function ternarySearch(): number {
  let left = 0;
  let right = 1;
  const EPS = 1e-9;

  while (right - left > EPS) {
    const t1 = (2 * left + right) / 3;
    const t2 = (left + 2 * right) / 3;

    const d1 = getDistance(t1);
    const d2 = getDistance(t2);

    if (d1 < d2) right = t2;
    else left = t1;
  }

  return getDistance((left + right) / 2);
}

console.log(ternarySearch().toFixed(10));
