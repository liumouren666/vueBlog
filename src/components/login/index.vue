<template>
  <div class="login">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      password: "",
      account: "",
    };
  },
};
</script>

<style >
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  width: 600px;
}
</style>