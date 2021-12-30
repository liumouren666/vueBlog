<template>
  <div class="nav" style="height: 100%">
    <el-row class="tac">
      <el-col :span="6">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item> -->
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title"
              ><router-link to="/mybook">我的书架</router-link></span
            >
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-user-solid"></i>
            <span slot="title"
              ><router-link to="/personal">我的博客</router-link></span
            >
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "navBar",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang='scss' scoped>
body,
html {
  padding: 0;
  margin: 0 auto;
  height: 100%;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.nav {
  height: 100%;
}
.tac {
  height: 100%;
  .el-menu {
    border: none;
    .el-submenu .el-menu-item {
      min-width: 0;
    }
    
  }
  .el-col {
    height: 100%;
    width: 100%;
  }
  .el-menu-vertical-demo {
    height: 100%;
  }
}
</style>