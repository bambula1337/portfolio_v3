<template>
  <div class="profile-view">
    <img :src="getUser.photoURL" class="profile-image" alt="" />
    <form @submit.prevent="applyChanges" class="profile-form">
      <fieldset class="inputs-wrapper">
        <base-input v-model="getUser.displayName">Name:</base-input>
        <base-input v-model="getUser.email">Email:</base-input>
      </fieldset>
      <button class="apply-button" type="submit">Apply Changes</button>
    </form>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Vuex
import { mapGetters } from 'vuex';
// Firebase
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';

export default Vue.extend({
  name: 'ProfileView',
  methods: {
    async applyChanges() {
      try {
        await updateProfile(this.getUser, {
          displayName: this.getUser.displayName,
        });
        await updateEmail(this.getUser, this.getUser.email);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters('auth', ['getUser']),
  },
});
</script>

<style lang="scss" scoped>
.profile-view {
  @apply flex justify-center pt-40;
  & .profile-image {
    @apply w-20 h-20 rounded-full mr-20;
  }
  & .profile-form {
    @apply text-white;
    & .inputs-wrapper {
      @apply text-left mb-5;
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
