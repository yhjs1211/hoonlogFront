import MarkdownEditor from "../components/MarkdownEditor.vue";
import AppPortfolio from "@/components/AppPortfolio.vue";
import AppResume from "@/components/AppResume.vue";
import AppMain from "@/components/AppMain.vue";
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
      component: MarkdownEditor,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: AppPortfolio,
      beforeEnter: () => {},
    },
    {
      name: "resume",
      path: "/resume",
      component: AppResume,
      beforeEnter: () => {},
    },
  ],
});

export default router;
