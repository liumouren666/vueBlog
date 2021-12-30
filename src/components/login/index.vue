<template>
  <div id="login" style="height: 100%">
    <div class="content">
      <div class="account">
        <el-input v-model="account" placeholder="请输入账号"></el-input>
      </div>
      <div class="password">
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <div class="button">
        <el-button type="primary" :loading="loading" @click="loginIN"
          >登入</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      password: "",
      account: "",
    };
  },
  computed: {
    ...mapState("login", ["loginStaus"]),
    loading(){
      return this.loginStaus
    }
  },
  methods: {
    ...mapMutations("login", ["loginCheck"]),
    loginIN() {
       this.loginCheck({
         password:this.password,
         account:this.account
       })
    },
  },
};
</script>

<style lang='scss' scoped>
body,
html {
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

#login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    width: 600px;
    .account {
      margin: 8px;
    }
    .password {
      margin: 8px;
    }
    .button {
      margin: 8px;
    }
  }
}
</style>