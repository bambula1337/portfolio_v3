<template>
  <div class="reset-view">
    <form @submit.prevent="resetPassword" class="form">
      <fieldset class="inputs">
        <base-input v-model="password">New Password</base-input>
      </fieldset>
      <button class="apply-button" type="submit">Apply</button>
    </form>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Firebase
import { updatePassword } from 'firebase/auth';
// Vuex
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'ResetView',
  data() {
    return {
      password: '',
    };
  },
  computed: {
    ...mapGetters('auth', ['getUser']),
  },
  methods: {
    async resetPassword() {
      try {
        await updatePassword(this.getUser, this.password);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.reset-view {
  @apply flex justify-center pt-40;
  & .form {
    @apply w-100 text-project-title;

    & .inputs {
      @apply text-left;
    }

    & .apply-button {
      @apply text-white text-lg font-semibold bg-transparent border-project-principal border-3 px-8 py-3 rounded-lg;
      @apply transition-all duration-300;

      &:hover {
        @apply border-project-highlight rounded-2xl;
      }
    }
  }
}
</style>
