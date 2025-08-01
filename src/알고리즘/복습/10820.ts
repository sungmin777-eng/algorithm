const input=
`This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`.trim().split('\n')

for (const line of input) {
  if (line === undefined) continue;
  let lower = 0;
  let upper = 0;
  let digit = 0;
  let space = 0;

  for (const ch of line) {
    if (ch >= 'a' && ch <= 'z') {
      lower++;
    } else if (ch >= 'A' && ch <= 'Z') {
      upper++;
    } else if (ch >= '0' && ch <= '9') {
      digit++;
    } else if (ch === ' ') {
      space++;
    }
  }

  if (line.length > 0) {
    console.log(`${lower} ${upper} ${digit} ${space}`);
  }
}
