<template>
  <div class="todo-list">
    
    <!-- .card 가 todo 하나가 된다. -->
    <div class="card" v-for="todo in todos" :key="todo.id">
      <div class="card-body d-flex justify-content-between">
        <span>{{ todo.title }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    }
  }
}

</script>

<style>

</style>