import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AuthView from '@/views/AuthView.vue';
import ProfileView from '@/views/ProfileView.vue';
import ResetView from '@/views/ResetView.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      layout: 'default',
      requiresAuth: true,
    },
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetView,
    meta: {
      layout: 'default',
      requiresAuth: true,
    },
  },
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// eslint-disable-next-line func-names
const getCurrentUser = function () {
  return new Promise((resolve) => {
    const removeListener = onAuthStateChanged(getAuth(), (user) => {
      removeListener();
      resolve(user);
    });
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert('You dont have access!');
      next('/auth');
    }
  } else {
    next();
  }
});

export default router;
