import { createRouter, createWebHistory } from 'vue-router';
import QuizzesView from '../views/QuizzesView.vue';
import QuizzView from '../views/QuizzView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Quizzes',
      component: QuizzesView,
    },
    {
      path: '/quizz/:id',
      name: 'Quizz',
      component: QuizzView,
    },
  ],
});

export default router;
