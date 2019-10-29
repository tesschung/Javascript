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
