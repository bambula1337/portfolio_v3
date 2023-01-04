<template>
  <div class="auth-login-form">
    <h1 class="title">Login</h1>
    <form @submit.prevent="emailLogin" class="form">
      <fieldset class="inputs-wrapper">
        <base-input type="email" placeholder="Email" v-model="email" />
        <base-input type="password" placeholder="Password" v-model="password" />
      </fieldset>
      <button type="submit" class="auth-button">Login</button>
    </form>
    <div class="auth-pop-wrapper">
      <button class="auth-google" @click="googleLogin">
        <img src="@/assets/icons/icon_google.svg" alt="login with Google" class="icon-google" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Firebase
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

export default Vue.extend({
  name: 'AuthLoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async emailLogin() {
      try {
        await signInWithEmailAndPassword(getAuth(), this.email, this.password);
        await this.$router.push({ name: 'home' });
      } catch (error) {
        console.log(error);
      }
    },
    async googleLogin() {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
        await this.$router.push({ name: 'home' });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.auth-login-form {
  @apply w-100 text-white;
  & .title{
    @apply text-3xl font-bold mb-20;
  }
  & .form {
    @apply mb-10;
    & .inputs-wrapper {
      @apply h-34 flex flex-col justify-between mb-10;
    }
    & .auth-button {
      @apply text-xl font-semibold bg-transparent border-project-principal border-3 px-8 py-3 rounded-lg;
      @apply transition-all duration-300;

      &:hover {
        @apply border-project-highlight rounded-2xl;
      }
    }
  }
  & .auth-pop-wrapper {
    @apply flex justify-center py-3;
    & .auth-google {
      @apply border-3 border-project-principal rounded-xl;
      @apply transition-all duration-300;

      &:hover {
        @apply border-project-highlight rounded-3xl;
      }

      & .icon-google {
        @apply w-10 p-2;
      }
    }
  }
}
</style>
