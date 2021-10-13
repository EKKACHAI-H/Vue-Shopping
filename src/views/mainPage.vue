<template>
  <div class="home">
    <div id="components-layout-demo-basic">
      <a-layout>
        <a-layout-header>
          <!-- <menuTop /> -->
        </a-layout-header>
        <a-layout>
          <a-layout-sider v-if="$route.name !== 'login'">
            <menuLeft />
          </a-layout-sider>
          <a-layout-content>
            <login v-if="$route.name === 'login'"/>
            <contentPage />
          </a-layout-content>
        </a-layout>
        <a-layout-footer>
          <!-- <menuBottom /> -->
        </a-layout-footer>
      </a-layout>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import menuLeft from "@/components/menuLeft.vue";
import login from "@/components/login.vue";
import contentPage from "@/components/contentPage.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    // menuTop,
    // menuBottom,
    menuLeft,
    login,
    contentPage,
  },
  data() {
    return {

    }
  }
};
</script>

<style>
 #components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5 !important;
  padding: 0px !important;
  height: auto !important;
} 
#components-layout-demo-basic .ant-layout-sider {
  background: #ffffff;
}
 /* #components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}  */
</style>