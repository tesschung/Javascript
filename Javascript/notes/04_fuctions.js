// 03_fuctions (함수)

// 1.
// 함수 선언식
// function 함수명(인자) {}
function add(num1, num2) {
  return num1 + num2
}
x = add(1,2) // 3
console.log(x)


// 이름 없는 함수를 만들어서 변수에 할당하여 사용
// 2.
// 함수 표현식 (보편적)
// 변수에 함수를 선언하여 사용
const sub = function(num1, num2) {
  return num1 - num2
}
a = sub(1,2)
console.log(sub)
console.log(a)


// 3.
// Arrow Function 화살표 함수
let addOne = function(num) {
  return num + 1
}

// function 키워드 생략
// ES6+ 이후에 나온 문법
addOne = (num) => {
  return num + 1
}
an = addOne(4)
console.log(an)

// 중괄호 제거 -> 바로 반환하겠다는 뜻
addOne = (num) => num + 1

// 인자가 하나만 들어오는 경우 괄호 또한 생략 가능
addOne = num => num + 1

// name이라는 인자를 받아서 hello ${name} 을 반환하는 함수를
// 선언식, 표현식, arrow function 으로 만들어 보세요

addname = name => `hello ${name}`
x = addname('hi')
console.log(x)

let addnamee = function(name) {
  return 'hello ' + name
}
xi = addnamee('joy')
console.log(xi)

addnameee = (name) => {
  return 'hello ' + name 
}
xii = addnameee('mike')
console.log(xii)

function addname1(name) {
  return `hello ${name}`
}
xiii = addname1('lucy')
console.log(xiii)


// object를 반환하는 arrow function
const makeObject = (value) => {
  return {'key': value}
}
object = makeObject(5)
console.log(object) // {key: 5}

// 하나의 object임을 선언하여 다음과 같이 소괄호안에 넣어줘야 한다.
const makeObject2 = value => ({'key' : value})
object2 = makeObject2(4)
console.log(object2) // {key: 4}

const noArgs = () => 'No Args'


