import Vue from "vue";
import VueRouter from "vue-router";
import website from "../views/website.vue";
import signin from "../views/signin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "website",
    component: website
  },
  {
    path: "/signin",
    name: "signin",
    component: signin
  },
  {
    path: "/form",
    name: "form",
    component: () => import(/* webpackChunkName: "form" */ "../views/form.vue")
  },
  {
    path: "/communication",
    name: "communication",
    component: () =>
      import(
        /* webpackChunkName: "communication" */ "../views/communication.vue"
      )
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () =>
      import(/* webpackChunkName: "contacts" */ "../views/contacts.vue")
  },
  {
    path: "/eventlaunched",
    name: "eventlaunched",
    component: () =>
      import(
        /* webpackChunkName: "eventlaunched" */ "../views/eventlaunched.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
