<template>
  <div class="todo-input">
    <!-- prevent로 실제 제출이라는 행위를 막는다. -->
    <!-- SPA이므로! -->
    <form class="input-group mb-3" @submit.prevent="onSubmit">
      <input v-model="title" type="text" class="form-control">
      <button type="submit" class="btn btn-sucess">add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      // createTodo 라는 이벤트 발생
      this.$emit('createTodo', this.title)
      this.title = ''
    }
  }
}
</script>

<style>

</style>