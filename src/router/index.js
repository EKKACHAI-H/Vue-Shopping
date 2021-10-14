import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const checkAuth = (to, from, next) => {
  console.log('to :: ',to)
  console.log('from :: ',from)
  console.log('next :: ',next)
  console.log('store :: ',store.state)
  if (!store.state.login) {
    return next('/nonLogin');
  }
  next();
}

const routes = [
  { path: "/", name: "Main", component: () => import("../views/mainPage.vue"), beforeEnter: checkAuth},
  { path: "/about", name: "About", component: () => import("../views/About.vue")},
  { path: "/nonLogin/:path?", name: "nonLogin", component: () => import("../components/nonLogin/mainNonLogin.vue")},
  // { path: "/login", name: "login", component: () => import("../components/nonLogin/loginPage.vue")},
  // { path: "/register", name: "register", component: () => import("../components/nonLogin/registerPage.vue")},
  // { path: "tableServiceMain/:serviceID?", name: "tableServiceMain", component: () => import('@tableServiceMain.vue'), beforeEnter: checkAuth},
      
];

const router = new VueRouter({
  routes,
});

export default router;
