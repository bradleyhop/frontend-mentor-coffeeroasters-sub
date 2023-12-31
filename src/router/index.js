/*
 * NB: using HASH for history mode because GitHub Wegpages does not support dynamic
 * routing on their servers. Using `createWebHistory` allows for view navigation to
 * work within the app, but it won't work for direct navigation using the browser.
 */
import { createRouter, createWebHashHistory } from 'vue-router';
// load home by default
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // native-like behavior with forward/back buttons
      return savedPosition;
    } else {
      // jump to top of page view on navigation
      return { top: 0 };
    }
  },

  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/createplan',
      name: 'CreatePlan',
      component: () => import('@/views/CreatePlan.vue'),
    },
    // catch-all
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
