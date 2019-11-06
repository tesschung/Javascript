// Vue라는 library를 node modules에 설치해서 위와같이 선언가능
import Vue from 'vue' // export default랑 한세트
// 현재 폴더에 있는 App.vue를 가져온다.
import App from './App.vue'

new Vue({
  render: function(createElement) {
    return createElement(App)
  }
  // 아래와 같이 사용가능
  // render: (h) => h(App)
}).$mount('#app') // 새로운 vue instance(project)를 만들겠다는 선언