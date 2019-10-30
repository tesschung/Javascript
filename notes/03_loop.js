// 03_loop (반복문)


// i가 5보다 작을 동안에 반복한다.
// 한번 loop을 돌때마다 i라는 값에 1씩 더한다
for (let i = 0; i < 5; i++) {
  console.log(i)
}

/*
1
2
3
4
*/


for (let i = 0; i < 5; ++i) {
  console.log(i)
}
// for문에서 동일

const numbers = [0, 1, 2, 3, 4, 5]
for (const number of numbers) {
  console.log(number)
}


// 이런식으로 하는게 효율적
Object.keys()

// while 
let i = 0
while (i<5) {
  console.log(i)
  i++
}


