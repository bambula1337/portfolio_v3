import Vue from 'vue';
import { initializeApp } from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyDq-52mBZEv-oGtKtiQWw5RlA5X5J_omKE',

  authDomain: 'portfolio-6f257.firebaseapp.com',

  projectId: 'portfolio-6f257',

  storageBucket: 'portfolio-6f257.appspot.com',

  messagingSenderId: '170200558241',

  appId: '1:170200558241:web:7ee4895300ba6875a39ee0',

  measurementId: 'G-SQJBV8PGFW',
};
initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
