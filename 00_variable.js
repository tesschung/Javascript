//  00_variable (변수)


// 한줄짜리 주석

/*
여러줄에 걸친 주석
*/

// let은 값을 재할당 할 수 있는 변수를 선언하는 키워드
let x = 1
console.log(x) // 1

// 재할당한다 == 다시 할당 할 수 있다.
// 아래와 같이 let으로 선언을 한 것을 재할당만 가능하다 == 자바스크립트에서 모든언어는 재선언을 할 수 없다.
// 재선언 불가
// 블럭 유효 범위(block scope)를 갖는다.
x = 3

// 출력
console.log(x) // 3


// 안쪽에서만 선언되어 존재하기때문에 블럭을 벗어나면 없는 변수가 된다.
// 안쪽에서 바깥을 참조하는 global scope은 가능하지만,
// 바깥에서 안쪽을 참조하는 것은 불가능하다.
if ( x === 3 ){
  let message = '안녕하세요'
  console.log(message) // 안녕하세요
  console.log(x) // 3
}

console.log(x) // 3


// const
// 값이 변하지 않는 (재할당을 할수 없는) 상수를 선언하는 키워드이다.
// let과 동일하게 블록 유효 범위를 가진다.
// 모든 선언에서 가능한 상수를 사용해야 한다.

console.log("==============")

const My_FAV = 20

if (My_FAV === 20) {
  const My_FAV = 30
  console.log(My_FAV) // 30
}

console.log(My_FAV)




// 식별자
// 변수명은 식별자라고 불린다.
// 1. 반드시 문자, 달러($), 밑줄(_)로 시작해야한다.
// 2. 대소문자를 구분하고 class 이름을 제외하고는 대문자로 시작하지 않는다.
// 3. 예약어 사용 불가 (const, let, class, return, case...)


// 카멜케이스(camelCase) - 객체, 함수, 변수

// 이벤트 핸들러 - 'on'으로 시작
const onClick = () => {}

// boolean 값 - 'is'로 시작
let isAvaliable = false

// 함수명
function getUsername () {}


// 파스칼케이스(PascalCase) - 클래스, 생성자 (UpperCamelCase)
class User {}

// 대문자 스네이크 케이스 - 상수
const API_KEY = 'asfsdaf'

// 타입이 바뀐 상태로 재할당 가능하다
let ti = 3
ti = 'xx'
console.log(ti)



// 전역변수, 사용하지 말 것
var box
box = 3
console.log(box)