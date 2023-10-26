import AppMarkdownEditor from "../components/AppMarkdownEditor.vue";
import AppPortfolio from "@/components/AppPortfolio.vue";
import AppResume from "@/components/AppResume.vue";
import AppMain from "@/components/AppMain.vue";
import AppPost from "@/components/AppPost.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: AppMain,
    },
    {
      name: "mdEditor",
      path: "/editor",
      component: AppMarkdownEditor,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: AppPortfolio,
    },
    {
      name: "resume",
      path: "/resume",
      component: AppResume,
    },
    {
      name: "posts",
      path: "/posts",
      component: AppPost,
    },
  ],
});

export default router;
