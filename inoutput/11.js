// 2588번 곱셈
/* 문제 : (세 자리 수 ) * (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
     4 7 2 (1)
    * 3 8 5 (2)
-----------------
    2 3 6 0 (3)
  3 7 7 6 (4)
1 4 1 6 (5)
---------------------
1 8 1 7 2 0 (6)

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오. */
const fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

var a = Number(input[0]);
var b = Number(input[1]);

// var a = 472;
// var b = 385;

var sum = 0;

for (let i = 1; i < 4; i++) {
  var value = Number(b.toString().substr(-i, 1)) * a;
  console.log(value);
  sum = sum + value * 10 ** (i - 1);
}

console.log(sum);
