const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts/1'


// 아래와 같이 call back 함수 
axios.get(url)
.then(function(response) {
  console.log(response.data)
  // console.log(response)
})