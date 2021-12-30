<template>
  <div class="header">
    <img src="@/assets/logo.png" />
    <el-button type="danger" @click="outLog">退出登入</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  components: {},
  methods: {
    ...mapMutations("login", ["outLogin"]),
    outLog() {
      this.outLogin();
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ccc;
  // padding:0 24px 0 24px;
  img {
    width: 40px;
    height: 40px;
  }
  .el-button{
    // padding-right: 24px;
  }
}
</style>