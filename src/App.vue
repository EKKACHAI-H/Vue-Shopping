<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <menuTop />
    <router-view />
    <menuBottom />
  </div>
</template>

<script>
import menuTop from "@/components/menuBar/menuTop.vue";
import menuBottom from "@/components/menuBar/menuBottom.vue";
export default {
  name: "HelloWorld",
  components: {
    // HelloWorld,
    menuTop,
    menuBottom,
  },
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  color: #000000a6;
  
}
</style>
