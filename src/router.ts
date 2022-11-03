import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("./views/home/index.vue"),
    redirect:"/console/chart"
  },
  {
    path: "/console",
    name: "console",
    component: () => import("./layout/console/index.vue"),
    children: [
      {
        path: "chart",
        component: () => import("./views/chart/index.vue"),
        meta: {
          title: "我的可视化",
        },
      },
      {
        path: "data",
        component: () => import("./views/data/index.vue"),
        meta: {
          title: "数据管理",
        },
      },
      {
        path: "data/edit",
        component: () => import("./views/data/edit.vue"),
        meta: {
          title: "数据管理",
        },
      },
      {
        path: "dict",
        component: () => import("./views/dict/index.vue"),
        meta: {
          title: "字典管理",
        },
      },
    ],
  },
  {
    path: "/editor/:id",
    name: "editor",
    component: () => import("./views/editor/index.vue"),
  },
  {
    path: "/view/:id",
    name: "view",
    component: () => import("./views/editor/index.vue"),
  },
];

const router = new VueRouter({
  routes
});

export default router