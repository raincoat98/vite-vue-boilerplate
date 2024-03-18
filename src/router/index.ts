import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Counter from "@/views/Counter.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
