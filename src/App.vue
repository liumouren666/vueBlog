<template>
  <div id="app">
    <Login v-if="!isLogin" />
    <router-view v-else />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Login from "./components/login/index.vue";
export default {
  name: "App",
  components: {
    Login,
  },
  data() {
    return {
      // isLogin:false
    };
  },
  mounted() {
    // this.isLogin = localStorage.getItem("login");
  },
  computed: {
    ...mapState("login", ["loginStaus"]),
    isLogin(){
      return localStorage.getItem("login");
    }
  },
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
