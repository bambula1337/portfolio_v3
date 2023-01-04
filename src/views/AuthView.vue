<template>
  <div class="auth-view">
    <div class="auth-controller-wrapper" v-if="!getUser">
      <button
        class="action"
        :class="{ active: this.auth === 'auth-login-form' }"
        data-component="auth-login-form"
        @click="changeComponent"
      >
        Login
      </button>
      <button
        class="action"
        :class="{ active: this.auth === 'auth-sign-up-form' }"
        data-component="auth-sign-up-form"
        @click="changeComponent"
      >
        Sign Up
      </button>
    </div>
    <keep-alive v-if="!getUser">
      <component :is="auth"></component>
    </keep-alive>
    <button v-else class="log-out" @click="logOut">Log Out</button>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Vuex
import { mapGetters } from 'vuex';
// Components
import AuthLoginForm from '@/components/AuthLoginForm.vue';
import AuthSignUpForm from '@/components/AuthSignUpForm.vue';
// Firebase
import { getAuth, signOut } from 'firebase/auth';

export default Vue.extend({
  name: 'LoginView',
  components: {
    AuthLoginForm,
    AuthSignUpForm,
  },
  data() {
    return {
      auth: 'auth-login-form',
    };
  },
  computed: {
    ...mapGetters('auth', ['getUser']),
  },
  methods: {
    changeComponent(e) {
      this.auth = e.target.dataset.component;
    },
    logOut() {
      signOut(getAuth());
    },
  },
});
</script>

<style lang="scss" scoped>
.auth-view {
  @apply w-full flex flex-col items-center pt-20;
  & .auth-controller-wrapper {
    @apply w-100 flex justify-between text-3xl text-white font-semibold mb-20;
    & .active {
      @apply text-project-first underline;
    }
  }
  & .log-out {
    @apply text-white text-xl font-semibold bg-transparent border-project-principal border-3 px-8 py-3 rounded-lg;
    @apply transition-all duration-300;

    &:hover {
      @apply border-project-highlight rounded-2xl;
    }
  }
}
</style>
