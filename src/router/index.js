import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  mode: 'history', // to use with GH Pages

  history: createWebHistory(import.meta.env.BASE_URL),

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
