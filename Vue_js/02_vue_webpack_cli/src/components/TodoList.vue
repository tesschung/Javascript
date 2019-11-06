<template>
  <div class="todo-list">
    <h2>{{ category }}</h2>
    <input type="text" v-model="newTodo">
    <button v-on:click="addTodo">+</button>
    <li v-for="todo in todos" v-bind:key="todo.id">
    <span>{{ todo.content }}</span>
    <button v-on:click="removeTodo(todo.id)">x</button>
    </li>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todos: [],
      newTodo: '',
    }
  },

  props: {
      category: {
        type: String,
        required: true,
        validator: function (value) {
          if (value.length < 5) {
            return true
          } else {
            return false
          }
        },
      }
    },

  methods: {
    addTodo: function () {
      if (this.newTodo.length != 0) {
        this.todos.push({
          id: Date.now(),
          content: this.newTodo,
          completed: false,
        })
        this.newTodo = ''
      }
    },
    removeTodo: function (todoId) {
      this.todos = this.todos.filter( todo => {
        return todo.id !== todoId
      })
    },
  },
}
</script>

<style>
  .todo-list {
    display: inline-block;
    width: 33%;
  }
</style>