const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // module.exports랑 한세트

// nodejs에서는 module에서 특정 값을 exports하기 위해서
// 아래와 같이 module.exports에 export 할 값들을 정의한다.
module.exports = {
  mode: 'development', // 상업용은 production
  // entry: 모든 파일들의 시작점
  entry: {
    // __dirname => 현재 폴더의 이름을 가지고 있다. (최상위 위치:Django의 BASE_DIR과 유사)
    app: path.join(__dirname, 'src', 'main.js'),
  },
  // module: webpack은 기본적으로 js만 변환가능, 따라서 css나 html등은
  // 모듈을 통해서 webpack이 이해할 수 있도록 변환이 필요하다.
  // 변환 내용을 작성하는 곳
  module: {
    rules: [

      {
        test: /\.vue$/,
        use: 'vue-loader',
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      }

    ]
  },
  // plugins: webpack을 통해서 번들된 결과를 추가 처리하는 부분
  plugins: [
    new VueLoaderPlugin(),
  ],
  // output: webpack을 통해서 번들된 결과물이 정의되는 부분
  // 어떻게 output이 될 것인가?
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
}