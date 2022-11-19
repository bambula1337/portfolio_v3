<template>
  <div id="app">
    <main id="main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
// TS support
import Vue from 'vue';
// Tailwind styles
import '@/assets/styles/tailwind/tailwind.scss';
// Components
import TheFooter from '@/components/TheFooter.vue';
// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// eslint-disable-next-line import/extensions
import { ScrollSmoother } from '@/assets/gsap/ScrollSmoother.js';

export default Vue.extend({
  name: 'AppComponent',
  components: {
    TheFooter,
  },
  methods: {
    gsapSetup() {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      const smoother = ScrollSmoother.create({
        wrapper: '#app',
        content: '#main',
        smooth: 2,
        effects: true,
      });
    },
  },
  mounted() {
    this.gsapSetup();
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
