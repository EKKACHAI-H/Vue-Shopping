import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Main from "../views/mainPage.vue";

Vue.use(VueRouter);

const checkAuth = (to, from, next) => {
  console.log('to :: ',to)
  console.log('from :: ',from)
  console.log('next :: ',next)
  console.log('store :: ',store.state)
  if (!store.state.login) {
    return next('/login');
  }
  next();
}

const routes = [
  { path: "/", name: "Main", component: Main, beforeEnter: checkAuth},
  { path: "/about", name: "About", component: () => import("../views/About.vue")},
  { path: "/login", name: "login", component: () => import("../components/login.vue")},
];

const router = new VueRouter({
  routes,
});

export default router;
