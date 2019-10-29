// 01_types_and_operators (타입과 연산자)
// Primitive Type

// Numbers
const a = 13
const b = -5
const float = -5.54
const d = 2.998e8 // 2.998 * 10^8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number 숫자형이 아닌 경우

console.log(a, b, float, d, e, f, g)

console.log(5/'hi') // NaN

// String (문자열을 표현하는 방법 세가지)
// 1.
const sentence1 = 'Ask and go to the blue'
// 2.
const sentence2 = "Ask and go to the blue"
// 3.
const sentence3 = `Ask and go to the blue`

console.log(sentence1, sentence2, sentence3)


// 따옴표를 사용하면 줄바꿈이 안됨
// 대신 escape sequence 사용 가능
// const word = 'hi
// hey'

const word = '안\n녕'
console.log(word)



// 백틱을 쓰면 줄바꿈이 됨, escape sequence 사용 안됨
// Template literal 사용 할 수 있음

const word2 = `안
녕`
console.log(word2)


// Template literal 
// 백틱을 쓸때만 아래와 같이 ${변수}으로 변수 할당 가능하다
const age = 10
const message = `홍길동의 나이는 ${age}살` // 중괄호 사이에 변수 할당 가능
console.log(message)

console.log('Happy'+'Hacking')

// Boolean (소문자로 표현)
true
false

// Empty Value
// 값이 존재하지 않음을 표현하는 값
undefined
null

let firstName // 선언하고 할당하지 않음 => undefined
let students = {}
students.jason // undefined
let lastName = null // 우리가 의도적으로 값이 없음을 선언할 때

typeof null // "object"

typeof undefined // "undefined"


// Operators (연산자)
// 할당 연산자 (연산하면서 그자리에 할당까지 하겠다는 의미)
let x = 0
x += 10 
console.log(x) // x = x + 10

x -= 3
console.log(x) // 7

x++ // x에 1을 더하겠다는 의미
console.log(x) // 8 

x-- // x에 1을 빼겠다는 의미
console.log(x) // 6 

3 > 2 // true
3 < 2 // false

// 문자열 비교
// 영어 소문자가 대문자 보다 크다, 알파벳은 오름차순
'A' < 'B' // true
'A' < 'a' // true
'가' < '나' //true
'가' > '나' // false


// 동등 연산자 (==) 
// 서로 같은 값을 갖도록 변환 할 수 있으면 같다고 판단한다.
// (JS 엔진이 자동으로 형변환) => 동긍 연산자의 사용은 지양한다.
const a1 = 1
const b1 = '1'
console.log(a1 == b1) // true

// 자동으로 형변환을 해서 비교하므로 아래는 모두 true
1 == '1'
1 == 1
1 == Number('1')
1 == true


8 * null // 0
'5' - 1 // 4


// 일치 연산자 (===) (!==)

// 논리 연산자
// and, or, not


// and && 둘 다 참일 경우에만 true
true && true // true
true && false // false

1 // true
0 // false

1 && 1 // 1
1 && 0 // 0

// or || 하나라도 참이라면 true
true || true // true
true || false // true
false || false // false


// not ! 값의 성격을 뒤집는다.
!true // false
!false // true

// 삼항 연산자 ?
// 가장 앞의 boolean 값이 참이면 : 을 기준으로 앞의 값이 반환되고, 그렇지 않다면 : 뒤의 값이 반환된다.
let flag = true
flag ? '참이니' : '거짓이니' // 참이니

let flag2 = false
flag2 ? '참이니' : '거짓이니' // 거짓이니

let flag3 = true
const result = flag3 ? '참이니' : '거짓이니' // 참이니
console.log(result)



