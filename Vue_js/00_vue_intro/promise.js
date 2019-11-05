// 1. 데이터를 가져온다.
// 2. 가져온 데이터를 출력한다.

// function getData() {
//   let data = null

//   // 데이터를 가지고 오는데 0.1 초가 걸림
//   setTimeout(() => {
//     console.log('INFO: 요청 보냄')
//     data = {'data': 'somedata'}
//   }, 100);

//   return data
// }

// function printData() {
//   const data = getData()
  
//   console.log(data)
// }


// printData()


function getDataCallback(callback) {
  setTimeout(() => {
    console.log('INFO: 요청보냄')
    const data = {data: 'somedata'}
    callback(data)
  }, 100);
}

getDataCallback(function(data) {
    console.log(data)
})
// // 데이터를 꺼내온 뒤 작업하는 함수를 전달
// getDataCallback(function(data) {
//   console.log(data)
//   getDataCallback(function(login) {
//     console.log(login)
//     if (login) {
//       getDataCallback(function(userinfo) {
//         console.log(userinfo)
//       })
//     }
//   })
// })

// function getDataPromise() {
//   return new Promise(resolve => {

//     setTimeout(() => {
//       console.log('INFO: 요청 보냄')
//       const data = { data: 'somedata' }
//       resolve(data)
//     }, 100);

//   })
// }

// getDataPromise()
//   .then(data => {
//     console.log(data)
//   })

// async function printData() {
//   const data = await getDataPromise()
//   console.log(data)
// }

// printData()