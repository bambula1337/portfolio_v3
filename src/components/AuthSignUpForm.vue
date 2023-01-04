<template>
  <div class="auth-sign-up-form">
    <h1 class="title">Sign Up</h1>
    <form @submit.prevent="signUp" class="form">
      <fieldset class="inputs-wrapper">
        <base-input type="email" placeholder="Email" v-model="email" />
        <base-input type="password" placeholder="Password" v-model="password" />
      </fieldset>
      <button type="submit" class="auth-button">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default Vue.extend({
  name: 'AuthSignUpForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      try {
        await createUserWithEmailAndPassword(getAuth(), this.email, this.password);
        await this.$router.push({ name: 'home' });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.auth-sign-up-form {
  @apply w-100 text-white;
  & .title {
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
}
</style>
