//10998번 A*B
// 두 정수 A와 B를 입력받은 다음, A*B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(input[0] * input[1]);
