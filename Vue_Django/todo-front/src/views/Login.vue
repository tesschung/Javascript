<template>
  <!-- 항상 div 태그를 두고 시작할 것 -->
  <div class="login">
    <h1>로그인 페이지입니다.</h1>
    <LoginForm/>
  </div>
</template>

<script>
// 1. component 호출
import LoginForm from '@/components/LoginForm'
export default {
  name: 'Login',
  components: {
    //2. component 등록
    LoginForm,
  }
}
</script>

<style>

</style>