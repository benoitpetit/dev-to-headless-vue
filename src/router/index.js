import { createRouter, createWebHistory } from "vue-router";

// import views
import HomeView from "@/views/HomeView.vue";
import BlogView from "@/views/BlogView.vue";
import PostView from "@/views/PostView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // list of articles
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    // :id is a dynamic parameter that will be available in the component as $route.params.id
    path: "/post/:id",
    name: "postView",
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
