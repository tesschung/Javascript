// 02_condition (조건문:  if문, switch문)


// if 문
const username = prompt('안녕하세요? 당신은 누구세요?')
// 이렇게 쓰면 console창에서 username에 대답한 정보가 할당된다

let message = '' 
if (username === 'ssafy') {
  message = '<h1>Welcome to SSAFY</h1>'
} else if (username === 'admin') {
  message = '<h1>관리자님 어서오세요</h1>'
} else {
  message = `<h1>Welcome ${username}</h1>`
}

document.write(message)



// switch 문
const name = prompt('who are you?')
let msg = ''
// 조건을 case 별로 나눠서 분리할 것
switch(name) {
  case 'ssafy' : {
    msg = '<h1>Welcome to SSAFY</h1>'
    break
  }
  case 'admin' : {
    msg = '<h1>관리자님 어서오세요</h1>'
    break
  }
  default : {
    msg = `<h1>Welcome ${name}</h1>`
    break
  }
}

document.write(msg)


// 예시
// break를 쓰지 않아서 아래와 같은 표현 가능
/*
switch(사용자) {
  case '관리자' : {
    사용자.권한 += '관리자 페이지 접근'
  }
  case '일반_사용자' : {
    사용자.권한 += '쓰기'
  }
  default : {
    사용자.권한 += '읽기권한'
  }
}
*/