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
// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue';
// Firebase
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// Vuex
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'AppComponent',
  components: {
    DefaultLayout,
  },
  methods: {
    ...mapActions('auth', ['setUser']),
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
    onAuthStateChanged(getAuth(), (user) => {
      this.setUser(user);
    });
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
