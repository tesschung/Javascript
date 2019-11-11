
<template>
  <div>
    <!-- input의 값이 바뀔때마다 onInput method를 실행한다. -->
    <button>검색</button>
    <input type="text" v-on:input="onInput"/>
  </div>
</template>


<script>
// methods 를 등록
export default {
  name: 'SearchBar',
  methods: {
    // inputChange 이벤트가 발생했음을 알린다. 그리고 input의 value를 넘겨준다.
    onInput: function (event) { 
      this.$emit('inputChange', event.target.value) 
      // console.log(event.target.value)
    }
  }
}
</script>

<style scoped>
input {
    width: 75%;
  }

div {
  text-align: center;
  margin: 20px;
}
</style>