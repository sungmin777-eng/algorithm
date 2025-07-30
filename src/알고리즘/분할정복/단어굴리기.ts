function extendedGCD(a: bigint, b: bigint): [bigint, bigint, bigint] {
  if (b === 0n) return [a, 1n, 0n];
  const [g, x1, y1] = extendedGCD(b, a % b);
  return [g, y1, x1 - (a / b) * y1];
}

function lcm(a: bigint, b: bigint): bigint {
  const [g] = extendedGCD(a, b);
  return (a * b) / g;
}

function solve(wheels: string[], target: string): bigint {
  let t = 0n; // 초기 시간
  let step = 1n; // 주기 (LCM 누적)

  for (let i = 0; i < wheels.length; i++) {
    const wheel = wheels[i];
    const offset = wheel.indexOf(target[i]);

    if (offset === -1) return -1n;

    const a = t;
    const m1 = step;

    const b = BigInt(offset);
    const m2 = BigInt(wheel.length);

    const [g, s, _] = extendedGCD(m1, m2);

    // 해가 없는 경우: (b - a) % g != 0
    if ((b - a) % g !== 0n) return -1n;

    const mod = lcm(m1, m2);

    // t ≡ a (mod m1), t ≡ b (mod m2)
    // 해는 t = a + m1 * ((b - a)/g * s % (m2/g))
    const temp = ((b - a) / g) * s % (m2 / g);
    t = (a + m1 * temp) % mod;

    // 항상 양수로 정리
    t = (t + mod) % mod;
    step = mod;
  }

  return t;
}
const wheels = [
  "CPKHFQEYXVMODNRTSGUBLJ",
  "TJLSURVHFQPAXGCEI",
  "JXNSGADPEWICKLFMVOQ",
  "UOFVKGQIJRECMWXADTPNL",
  "OREWASJFLY",
  "HBEC",
  "ESDRVXCNQUFWKGTOLH",
  "CPLTAMBHYSQDVJIORNW",
  "CG"
];
const target = "CAIIEHLQC";
const result = solve(wheels, target);
console.log(result)
console.log(result.toString())



