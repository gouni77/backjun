//1008번 A / B
/* 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
첫째 줄에 A와 B가 주어진다. (0<A , B< 10) 
예제 입력 13 ,예제 출력 0.33333 
예제 입력  4 5 출력 0.8  */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const input = line.split(" ");

  const result = Number(input[0]) / Number(input[1]);
  console.log(result);

  rl.close();
}).on("close", function () {
  process.exit();
});
