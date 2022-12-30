<template>
  <div class="sign-in-section-form">
    <form class="form" @submit.prevent="loginFunc">
      <div class="main-inputs-wrapper">
        <label for=".main-input">
          <input type="email" placeholder="Email" v-model="login" class="main-input input" />
        </label>
      </div>
      <div class="sub-inputs-wrapper">
        <label for=".sub-input">
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="sub-input input"
          />
        </label>
      </div>
      <button type="submit" class="button">
        <p class="button-text">Sign In</p>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default Vue.extend({
  name: 'SignInSectionForm',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    async loginFunc() {
      try {
        await createUserWithEmailAndPassword(getAuth(), this.login, this.password);
        this.login = '';
        this.password = '';
      } catch (error: any) {
        alert(error.message);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.sign-in-section-form {
  @apply w-full flex justify-center;
  & .form {
    @apply w-100 flex items-center flex-col z-20;
    & .input {
      @apply w-full outline-none border-b-2 border-project-principal text-xl mb-5 pb-2 transition-all duration-200 bg-project-background text-white;
      &:focus {
        @apply border-project-highlight;
      }
    }
    & .main-inputs-wrapper {
      @apply w-full flex flex-col mb-16;
      & .main-inout {
      }
    }
    & .sub-inputs-wrapper {
      @apply w-full flex flex-col mb-10;
      & .sub-input {
      }
    }
    & .button {
      @apply w-40 h-12 bg-project-first flex justify-center items-center ring-4 ring-project-highlight ring-offset-4 ring-offset-project-background rounded-full;
      @apply overflow-hidden transition-all duration-300;

      &:hover {
        @apply ring-project-principal text-white;
      }

      & .button-text {
        @apply text-xl font-semibold;
      }
      & .button-image {
        @apply w-5;
      }
    }
  }
}
</style>
