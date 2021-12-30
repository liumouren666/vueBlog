<template>
  <div class="layout">
    <!-- 头部 -->
    <div class="header">
      <Header />
    </div>
    <div class="main">
      <!-- 侧边栏 -->
      <div class="navBar">
        <NavBar></NavBar>
      </div>
      <!-- 内容区域 -->
      <div class="content">
        <Content></Content>
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../header/index.vue";
import NavBar from "../navBar/index.vue";
import Content from "../content/home.vue";
export default {
  name: "Layout",
  components: {
    Header,
    NavBar,
    Content,
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

.layout {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  .header {
    width: 100%;
    height: 80px;
    position: absolute;
  }
  .main {
    height: 100%!important;
    position: absolute;
    top: 80px;
    display: flex;
    width:100%;
    .navBar {
      // background: chartreuse;
      height: 100%;
      width: 150px;
    }
    .content {
      height: 100%;
      width: calc(100% - 150px);
    }
  }
}
</style>