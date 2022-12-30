import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import SignInView from '@/views/SignInView.vue';
import SecretView from '@/views/SecretView.vue';
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
    path: '/adms',
    name: 'login',
    component: LoginView,
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView,
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/secret',
    name: 'secret',
    component: SecretView,
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
      next('/');
    }
  } else {
    next();
  }
});

export default router;
