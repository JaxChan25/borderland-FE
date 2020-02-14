<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Login
  }
};
</script>

<style>

</style>
