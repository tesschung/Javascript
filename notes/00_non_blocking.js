// python의 sleep과 비슷하다.
setTimeout
function sleep_3() {
  setTimeout(function(){
    console.log('wake up!')
  }, 3000) // 밀리세컨드단위
}

// 비동기 함수
// 3초동안 다른곳에서 기다리다가
// 3초가 지나면 다시 돌와서 나 실행됨! 하는 것
// 3초동안 해당 코드가 기다리고 있는 중에
// 다른 코드들은 실행되는 것
console.log('start sleeping')
sleep_3()
console.log('end of program')

function multiply(x, y) {
  return x * y
}
function printSquare(x) {
  var s = multiply(x, x);
  console.log(s)
}
printSquare(5)
