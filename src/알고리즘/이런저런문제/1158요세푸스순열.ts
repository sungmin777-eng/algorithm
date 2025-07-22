let input = `7 3`; // 쿼카에 입력할 데이터

// 입력값을 분리하여 N과 K 값 설정
const [N, K] = input.split(' ').map(Number);

// 요세푸스 문제 해결 함수
function josephus(N: number, K: number): number[] {
    let queue: number[] = [];
    let result: number[] = [];

    // 1부터 N까지 사람을 큐에 삽입
    for (let i = 1; i <= N; i++) {
        queue.push(i);
    }

    let index = 0;
    // 큐에 사람이 남아있을 때까지
    while (queue.length > 0) {
        // K번째 사람을 찾아내기 위해 (K-1)만큼 이동, queue.length로 나누는 이유는 원형 배열을 나타내기 위해.
        index = (index + K - 1) % queue.length;

        // K번째 사람을 제거하고 결과에 추가
        result.push(queue.splice(index, 1)[0]);

    }
    return result;
}

// 결과 계산
let result = josephus(N, K);

// 결과 출력 (요세푸스 순열)
console.log(`<${result.join(', ')}>`);

let array=[1,2,3,4,5]

array=array.splice(2,3)
console.log(array)