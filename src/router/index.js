import Vue from "vue";
import VueRouter from "vue-router";
import layout1 from "../views/layout1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout1",
    component: layout1
  },
  {
    path: "/layout2",
    name: "layout2",
    component: () =>
      import(/* webpackChunkName: "layout2" */ "../views/layout2.vue")
  },
  {
    path: "/layout3",
    name: "layout3",
    component: () =>
      import(/* webpackChunkName: "layout3" */ "../views/layout3.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
