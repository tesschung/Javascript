<template>
  <div id="app">
    <div id="nav">

      <!-- isLoggedIn 값에 따라 조건부 랜더링을 한다. -->
      <div v-if="isLoggedIn">
      <router-link to="/">Home</router-link> |
      <!-- 어딘가로 가는 것을 막는 prevent 속성 -->
      <!-- 즉, href로 redirect를 방지해준다. -->
      <a @click.prevent="logout" href="/logout">Logout</a>
      </div>

      <!--  -->
      <div v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> 
      </div>

    </div>
    <div class="container col-6">
      <router-view/>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'App',
  // data() {
  //   return {
  //     // jtw가 있으면 true 없으면 false
  //     isLoggedIn: this.$session.has('jwt')
  //   }  
  // },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  mounted() {
    if (this.$session.has('jwt')) {
      const token = this.$session.get('jwt')
      this.$store.dispatch('login', token)
    }
  },
  methods: {
    logout() {
      this.$session.destroy()
      this.$store.dispatch('logout')
      router.push('/login')
    }
  },
  // data의 변화가 일어나는 시점에 실행하는 함수
  updated() {
    this.isLoggedIn = this.$session.has('jwt')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
