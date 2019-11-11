
<template>
  <div>
    <!-- step 3: 사용 self-closing 반드시 필요-->
    <SearchBar @inputChange="onInputChange"/>
  </div>
</template>

<script>
// step 1: import 호출
import SearchBar from './components/SearchBar'

// Vue
export default {
  name: 'App',  // Component의 이름을 저장
  // step 2: components에 아래와 같이 등록
  components: {
    SearchBar,
  },
  methods: {
    // inputChange라는 이벤트가 발생할때마다 실행
    onInputChange: function(inputValue) {
      console.log(inputValue)
    }
  }
}
</script>

<style>

</style>
