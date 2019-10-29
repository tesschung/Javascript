# 자바스크립트

- 자바스크립트(JavaScript)는 객체(object) 기반의 스크립트 언어 

-  HTML로는 웹의 내용을 작성하고, CSS로는 웹을 디자인하며, 자바스크립트로는 웹의 동작을 구현 가능

- 브라우저가 없으면 존재할 수 없는 언어이다.
- HTML에 종속되어있다.



### 자바스크립트 언어의 특징

1. 자바스크립트는 객체 기반의 스크립트 언어

2. 자바스크립트는 동적이며, 타입을 명시할 필요가 없는 인터프리터 언어

3. 자바스크립트는 객체 지향형 프로그래밍과 함수형 프로그래밍을 모두 표현

- node.js 를 통해서 python처럼 Javascript를 사용 가능





 http://tcpschool.com/javascript/intro 

### Dom

```js
// 보고있는 브라우저에 대한 innerwidth 정보를 제공
window.innerWidth
526
window.innerWidth
658

// window라는 것을 사용해서 브라우저에게 명령
window.print()
undefined
```



```js
// console 창 reset
ctrl + l 


document.title
"코딩의 시작, TCP School"

// 아래와 같이 조작 가능
document.title = "안녕"
"안녕"

document.title
"안녕"

var y = 10
var x = 10
x = x + y
20

```





## 환경설정

```json
1. 
ctrl+shift+p
settings(JSON)

"[javascript]":{
    "editor.tabSize": 2
}
추가


2.
ctrl+.
Text Editor에서 Detect Indentation off

3. live server extensions 설치


4. live server open후 ctrl+shift+I
js console 
```





```js
let y = 2
undefined // 반환 값, 선언식

```



- 자바스크립트에서 모든 언어 선언은 한번만 가능하고(재선언불가) 재할당만 가능하다.

```js
    // let은 값을 재할당 할 수 있는 변수를 선언하는 키워드
    let x = 1
    
    // 재할당한다 == 다시 할당 할 수 있다.
    // 아래와 같이 let으로 선언을 한 것을 재할당만 가능하다 == 자바스크립트에서 모든언어는 재선언을 할 수 없다.
    x = 3
```



==  Equal Operator

=== Strict Equal Operator

strict는 엄격한 이라는 의미로 좀더 엄격하게 같은지를 보는 연산자



=는 만약 a=b이라고 했을때, b를 a에 대입해서, 지금부터 a가 b이라고 약속

지금부터 너는 졸업생이야는 you = "졸업생"이라고 할 수 있습니다.



==는 먄약 a==b이라고 했을때, 

a가 b과 '값'이 같은지를 판단해서 맞으면 true, 틀리면 false라고 합니다.



===는 만약 a===b이라고 했을때, 

a가 b과 '값'과 '타입/형식?'이 정확하게 같은지를 판단해서 true/false를 표현합니다.

===를 좀더 자세히 설명하면
값이라는 의미는 1이라는 데이터는 역시 1

형식이라는 의미는 javascript가 똑똑하게도 숫자1과 문자"1"을 1이라는 데이터로 인식할 수 있기때문에, 문자와 값의 형식조차 완벽히 같아야만 true라고 판단(리턴)



예를들어
1=="1"은 true이지만,
1==="1"은 false입니다.



또,
null과 undefined는 값이 없다는 의미의 데이터 형

null은 값이 없음을 명시적으로 표시한 것이고, 

undefined는 그냥 값이 없는 상태이기때문에, 

==로는 true가 뜨지만, ===로는 false가 리턴



==보다는 ===를 사용해야 한다고 강하게 추천

이유는 역시 조건문이나, 좀더 복잡한 상황의 프로그래밍에서 차이가 나온다고 하네요. 