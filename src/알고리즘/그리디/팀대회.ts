
const input = `6 3 2`.trim().split('\n');


const [NMK] = input;
const [N, M, K] = NMK.split(' ').map(Number);


const byFemales = Math.floor(N / 2);
const byMales   = M;
const byPeople  = Math.floor((N + M - K) / 3);


const answer = Math.min(byFemales, byMales, byPeople);

console.log(answer);
