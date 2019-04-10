<template>
  <div :style="pageBg" class="login">
    <div class="login-box">
      <header>Welcome back!</header>
      <div class="username">
        <input type="text" placeholder="Username">
      </div>
      <div class="password">
        <input type="text" placeholder="Password">
      </div>

      <button>SIGN IN</button>
      <!-- <input type="text" placeholder="Password"> -->
    </div>
  </div>
</template>

<script>
// import bg from '@/assets/login/images/bgMacbook.jpg'
// import bg from '@/assets/login/images/bgDesk.jpg'

export default {
  data () {
    return {
      pageBg: {
        // opacity: 0.3,
        // background: `#fff url(${bg}) no-repeat`,
        // 'background-size': '100% 100%'
        background: `rgba(238, 238, 242, 0.9)`
      }
    }
  }
}
</script>

<style>
.login {
  width: 100%;
  height: 100%;
}

.login > .login-box {
  width: 50%;
  max-height: 55%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  -webkit-box-shadow: 0 53px 100px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 53px 100px rgba(0, 0, 0, 0.3);
  box-shadow: 0 53px 100px rgba(0, 0, 0, 0.3);
}

.login > .login-box > header {
  font-size: 20px;
  margin-top: 2px;
  margin-bottom: 10px;
  width: 100%;
  height: 20%;
  background: rgb(242, 242, 243);
  line-height: 5.5;
  color: rgb(68, 68, 68);
  padding-left: 60px;
}

.login > .login-box input {
  border: 0;
  width: 100%;
  height: 100%;
  font-size: 12px;
  outline: none;
}

.login > .login-box > .username {
  background: url('../assets/login/images/icon_username.png') no-repeat;
  width: 80%;
  margin: 0 auto;
  padding-left: 35px;
  background-size: 25px;
  background-position: 0 50%;
  position: relative;
  height: 20%;
}

.login > .login-box > .username::before,
.login > .login-box > .password::before {
  content: '';
  position: absolute;
  height: 1px;
  background: #cbcbcb;
  bottom: 10px;
  width: 100%;
  left: 0;
}

.login > .login-box > .password {
  background: url('../assets/login/images/icon_password.png') no-repeat;
  width: 80%;
  margin: 0 auto;
  padding-left: 35px;
  background-size: 25px;
  background-position: 0 50%;
  position: relative;
  height: 20%;
}

.login > .login-box > button {
  -webkit-appearance: none;
  width: 80%;
  margin: 50px auto 0;
  height: 50px;
  border: 0;
  background: rgb(255, 0, 65);
  color: #fff;
  font-size: 18px;
  font-weight: bolder;
}
</style>
