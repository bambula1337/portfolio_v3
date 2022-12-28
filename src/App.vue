<template>
  <div id="app">
    <component :is="layout"> </component>
  </div>
</template>

<!--TODO: Get data from json server using vuex and axios
          Add downloadable CV
          Error Layout
          DATA BASE from firebase contact informations
          -->

<script lang="ts">
// TS support
import Vue from 'vue';
// Tailwind styles
import '@/assets/styles/tailwind/tailwind.scss';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default Vue.extend({
  name: 'AppComponent',
  components: {
    DefaultLayout,
  },
  computed: {
    layout() {
      if (this.$route.meta?.layout) {
        return `${this.$route.meta.layout}-layout`;
      }
      return 'default-layout';
    },
  },
  mounted() {
    createUserWithEmailAndPassword(getAuth(), 'oleg133766@gmail.com', 'Oleg133744');
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
