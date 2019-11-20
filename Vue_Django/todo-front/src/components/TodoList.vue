<template>
  <div class="todo-list">
    
    <!-- .card 가 todo 하나가 된다. -->
    <div class="card" v-for="todo in todos" :key="todo.id">
      <div class="card-body d-flex justify-content-between">
        <span>{{ todo.title }}</span>
        <span @click="deleteTodo(todo)">삭제</span>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    }
  },
  computed: {
    options() {
      // store의 getters에서 options를 바로 가져와서 사용
      return this.$store.getters.options
    }
  },
  methods: {
    deleteTodo(todo) {
      // 반드시 적을 것
      const SERVER_IP = process.env.VUE_APP_SERVER_IP
      
      // options를 같이 실어서 보내줘야한다.
      axios.delete(`${SERVER_IP}/api/v1/todos/${todo.id}/`, this.options)
      .then(response => {
        console.log(response)
        const targetTodo = this.todos.find(item => {
          return item === todo
        })
        const idx = this.todos.indexOf(targetTodo)
        if (idx > -1) {
          this.todos.splice(idx, 1)
        }
      })
      .catch(error => {
        console.error(error)
      })
    },
  }
}

</script>

<style>

</style>