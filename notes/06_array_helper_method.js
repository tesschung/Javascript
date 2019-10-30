// 06_array_helper_method (배열 핸들링 method)

const colors = ['red', 'green', 'blue', 'salmon']

// loop
for (const color of colors) {
  console.log(color)
}

console.log('---------------')

// 함수를 넘겨줄 수 있다
// forEach - Loop를 대신 돈다.
colors.forEach(function(color) {
  console.log(color)
})

console.log('---------------')
colors.forEach(color => {
  console.log(color)
})

console.log('---------------')
colors.forEach(color => console.log(color))


// map - 배열내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 return
// 일정한 형식의 새로운 배열을 만들때 사용한다.
const numbers = [1, 2, 3, 4]
const doubleNumbers = numbers.map(number => {
  return number * 2
})
console.log(doubleNumbers)

const doubleNumbers1 = numbers.map(number => number * 5)
console.log(doubleNumbers1)

// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어보자

const numbers2 = [4, 9, 16]
const doubleNumbers2 = numbers2.map(number => Math.sqrt(number))
console.log(doubleNumbers2)
const doubleNumbers3 = numbers2.map(number => number ** 0.5)
console.log(doubleNumbers3)


// filter - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열을 반환
// number의 나머지가 0인 경우
const numbers3 = [4, 5, 6, 7, 54, 4, 5]
numbers3.filter(number => {
  return number % 2 === 0
})
console.log(numbers3)


const products = [
  // {} 앞뒤 띄어쓰기 
  { name: 'cucumber', type: 'vege' },
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vege'},
  { name: 'strawberry', type: 'fruit' },
]
const fruits = products.filter(product => product.type === 'fruit')
console.log(fruits)

for (const fruit of fruits) {
  console.log(fruit.name)
}


// map - distance/time (속도) 를 저장하는 배열 speeds를 만들기

const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
]

const speeds = trips.map( trip => trip.distance / trip.time )

for (const speed of speeds) {
  console.log(speed)
}


// filter - 나이가 50 이상인 아이템만 가지고 있는 새로운 배열을 만드세요
const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const oldAges = ages.filter(age => age >= 50)

for (const oldAge of oldAges) {
  console.log(oldAge)
}

const oldAges1 = ages.filter((age, index, self) => {
console.log(age, index, self)
return age >= 50
})

// find -  주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환, 없다면 undefined를 반환
const users = [
  { name: 'Tony Stark', age: 45 },
  { name: 'Steve Rogers', age: 32 },
  { name: 'Thor', age: 40 },
]

const tony = users.find( user => {
  return user.name === 'Tony Stark'
})
console.log(tony)

// filter은 find와 다르게 배열안에 담아서 준다.
const tony1 = users.filter( user => {
  return user.name === 'Tony Stark'
})
console.log(tony1)


// some & every 
// some - 배열안의 어떤 요소라도 (=== 가 하나라도!) 주어진 판별함수를 
// 통과하는지 테스트하고 결과에 따라 boolean 값을 반환한다.

const arr = [1, 2, 3, 4, 5, 6]
// 각각의 number가 검사를 모두 검사를 했을때 
// 하나라도 2로 나눴을때 0이 나오면 짝수를 포함한다 === result는 true가 된다.
const result = arr.some(number => {
  return number % 2 === 0
})
console.log(result) // true

// 모든 요소가 짝수를 포함하고 있다면 true
const result2 = arr.every(number => {
  return number % 2 === 0
})
console.log(result2) // false


// requests 배열에서 각 요청들 중 status가 pending인 요청이 있는지 확인
const requests =[
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failedd' },
]
const isInProgress = requests.some(request => {
  return request.status === 'pending'
})
console.log(isInProgress) // pending이 존재한다면 true를 반환

const isInProgress1 = requests.every(request => {
  return request.status === 'pending'
})
console.log(isInProgress1) // pending이 존재하지만 다른 것들이 있어서 false를 반환

// 때문에 한 요소의 존재 여부를 확인하기 위해선 some을 사용



// reduce - 배열의 각 요소에 대해 주어진  `reducer`함수를 실행하고 하나의 값을 반환한다.
// reduce는 배열 내의 숫자 총합, 배열 냉 평균 계산 등 별의 값을 하나로 줄이는 동작을 한다.
// 첫 번째 매개변수는 `누적 기본값 (전 단계의 결과)`, 두 번째 매개변수부터 하나의 아이템이 들어간다.
// 앞의 값으로 계속 누적

const ssafyTest = [90, 99, 78, 80]
// const sum = ssafyTest.reduce((누적 기본값, 누적될 값)) => {}, 0)
const sum = ssafyTest.reduce((total, score) => {
  total += score
  return total // 다음 loop으로 누적 값을 넘김
}, 0)
console.log(sum)

// ssafyTest 배열을 doubleSsafyTest로 만들기
// => [180, 198, 156, 160]
const double = ssafyTest.reduce((total, score) => {
  total.push({key:score*2}) 
  return total
}, [])
console.log(double)

const double1 = ssafyTest.reduce((total, score) => {
  total.push(score*2)
  return total
}, [])
console.log(double1)

const double2 = ssafyTest.reduce((doubleScores, score) => {
  doubleScores.push(score*2)
  console.log(doubleScores, score)
  return doubleScores // 이처럼 계속 return 해주어야 새로운 누적값을 준다. (파이썬의 recursion과 비슷함)
}, [])


len = ssafyTest.length
const double3 = ssafyTest.reduce((doubleScores1, score) => {
  doubleScores1 += score 
  return doubleScores1 
}, 0)
console.log(double3/len)
