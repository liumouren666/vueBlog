<template>
  <div id="app">
    <Login v-if='true'/>
    <router-view v-else/>
  </div>
</template>

<script>
import Login from './components/login/index.vue'
export default {
  name: "App",
  components:{
    Login
  }
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
</style>
