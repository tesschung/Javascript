<template>
<!-- 최상위 컴포넌트에는 반드시 한개의 tag(element)만 존재해야 한다. -->
<div>
  <TodoList category="취업특강"/>
  <TodoList category="SSAFY"/>
  <TodoList category="기타"/>
</div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    // components라는 option에 TodoList 등록
    TodoList
  }
}
</script>

<style>

</style>