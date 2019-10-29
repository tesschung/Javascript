// 05_datastructure (데이터 구조)

const numbers = [1, 2, 3, 4]
numbers[0] // 1
numbers[-1] // undefined
numbers.length // 4

// 배열뒤집기
// [4, 3, 2, 1]
// 원본 파괴
numbers.reverse() // [4, 3, 2, 1]
numbers // [4, 3, 2, 1]


numbers.reverse() // [1, 2, 3, 4]
numbers // [1, 2, 3, 4]


// 배열에 아이템 추가하기
numbers.push(5) // [1, 2, 3, 4, 5]
numbers.push('abc') // [1, 2, 3, 4, 5, "abc"]
console.log(numbers)

// stack
// 가장 마지막 요소 삭제 후 반환
numbers.pop() // 5
console.log(numbers)

numbers.pop() // 4 
console.log(numbers)

// queue
// 가장 앞에 요소 추가
numbers.unshift('a')
console.log(numbers)

// 가장 앞에 요소 삭제 후 반환
numbers.shift()
console.log(numbers)

// 안에 있는지 없는지 if a in b
numbers.includes(0) // false
numbers.includes(1) // true

// indexOf - 특정 아이템의 index를 찾아서 반환
numbers.push('a')
numbers.push('a')

numbers.indexOf('a') // 4, 일치하는 가장 첫번째 인덱스를 반환 그리고 없으면 -1을 반환

// 배열의 아이ㅏ템을 함수의 인자를 seperator로 이어서 문자열로 반환
console.log(numbers.join('-')) // 1-2-3-4-a-a
console.log(numbers.join()) // 1,2,3,4,a,a
console.log(numbers)
// 원본은 바뀌지 않는다


// Object
const me = {
  'name': 'ssafy',
  'phoneNumber': '010-1234-56789',
  appleProducts : {
    macBook : '2018pro',
    iPhone: '7',
  }
}
console.log(me)
console.log(me.appleProducts)
console.log(me.appleProducts.macBook)
console.log(me['name'])
console.log(me['appleProducts']['macBook'])
console.log(me['phoneNumber'])


const name = 'jason'
const meDetail = {
  name, // name: name0 => 변수명과 key명이 같다면 name 과 같이 처리 가능 (Object literal)
  'phoneNumber': '010-1234-56789',
  appleProducts : {
    macBook : '2018pro',
    iPhone: '7',
  }
}
console.log(meDetail)


// JSON Object
// 문자열로 변환
const jsonData = JSON.stringify(me)   // 직렬화 => JS Object 를 string 값으로
console.log(jsonData)

const parsedData = JSON.parse(jsonData) // 역직렬화 => string 을 JS Object로
console.log(parsedData)

