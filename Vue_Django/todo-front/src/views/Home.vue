<template>
  <div class="Home">
  <h1>Todo</h1>
  <TodoInput @createTodo="createTodo" />
  <TodoList :todos="todos" />
  </div>
</template>

<script>
// third party가 항상 가장 위에서 import 된다.
import axios from 'axios'
import jwtDecode from 'jwt-decode' // JWT의 payload 값을 해석해서 보여주는 라이브러리

// 그다음엔 만든것들
import TodoList from '@/components/TodoList'
import TodoInput from '@/components/TodoInput'
import router from '@/router'
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      todos: [],
    }
  },

  components: {
    TodoList,
    TodoInput,
  },

  methods: {
    // 사용자 로그인 유무를 확인하여 로그인되어있지 않을 시 로그인 페이지로 보낸다.
    checkLoginIn(){
      // 1. session을 시작
      this.$session.start()
      // 2. 'jwt'가  있는지 확인하고,
        if (!this.$session.has('jwt')){
        // 없으면, 로그인 페이지로 보내겠다.
        router.push('/login')
      }
    },
    // 우리가 만든 django API 서버로 todos를 달라는 요청을 보낸 뒤
    // todos data 에 할당하는 함수
    getTodo() {
      this.$session.start()
      const token = this.$session.get('jwt')
      const userId = jwtDecode(token).user_id

      const SERVER_IP = process.env.VUE_APP_SERVER_IP
      
      const options = {
        headers: {
          Authorization: 'JWT' + token
        }
      }
      
      axios.get(`${SERVER_IP}/api/v1/users/${userId}/`, options)
      .then(response => {
        this.todos = response.data.todo_set
      })

      .catch(error => {
        console.log(error)
      }) 
    }

  },
  // vue가 화면에 그려지면 실행하는 함수
  mounted(){
    this.checkLoginIn()
    this.getTodo()
  },
  
  createTodo(title){
    this.$session.start()
    const token = this.$session.get('jwt')
    const userId = jwtDecode(token).user_id
    const SERVER_IP = process.env.VUE_APP_SERVER_IP
    const options = {
      headers: {
        Authorization: 'JWT' + token
      }
    }
    // 요청을 보낼 data를 작성
    const data = {
      title,
      user: userId
    }

    axios.post(`${SERVER_IP}/api/v1/todos/`, data, options)
    .then(response => {
      this.todos.push(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },
}
</script>