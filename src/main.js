import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from 'ant-design-vue';
import store from "./store"
import 'ant-design-vue/dist/antd.css';
import '@/assets/CSS/antStyle.scss';
import '@/assets/CSS/mainStyle.css';
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;
Vue.use(Antd);
// Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");