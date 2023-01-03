<template>
  <div class="profile-view">
    <img :src="photoURL" class="profile-image" alt="" />
    <form @submit.prevent="applyChanges" class="profile-form">
      <fieldset class="inputs-wrapper">
        <base-input v-model="getUser.displayName">Name:</base-input>
        <base-input v-model="getUser.email">Email:</base-input>
        <base-input v-model="food">Food:</base-input>
      </fieldset>
      <button class="apply-button" type="submit">Apply Changes</button>
    </form>
    <div class="connect" v-if="!linkedWithGoogle">
      <h2 class="connect-title">Connect:</h2>
      <button class="connect-google" @click="connectGoogle">
        <img
          src="@/assets/icons/icon_google.svg"
          alt="Connect Google Account"
          class="icon-google"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Vuex
import { mapGetters } from 'vuex';
// Firebase
import {
  updateProfile, updateEmail, linkWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import {
  getDatabase, ref, update, child, onValue,
} from 'firebase/database';

export default Vue.extend({
  name: 'ProfileView',
  data() {
    return {
      food: '',
    };
  },
  methods: {
    async applyChanges() {
      try {
        const db = getDatabase();
        update(child(ref(db, 'users'), this.getUser.uid), {
          food: this.food,
        });
        await updateProfile(this.getUser, {
          displayName: this.getUser.displayName,
        });
        await updateEmail(this.getUser, this.getUser.email);
      } catch (error) {
        console.log(error);
      }
    },
    async connectGoogle() {
      try {
        const provider = new GoogleAuthProvider();
        await linkWithPopup(this.getUser, provider);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters('auth', ['getUser']),
    linkedWithGoogle() {
      return !!this.getUser.providerData.find(
        (provider: any) => provider.providerId === 'google.com',
      );
    },
    photoURL() {
      return this.getUser.providerData.find((provider: any) => provider.photoURL !== null)?.photoURL || '';
    },
  },
  created() {
    const db = getDatabase();
    onValue(child(ref(db, 'users'), this.getUser.uid), (snapshot) => {
      const value = snapshot.val()?.food;
      if (value) {
        this.food = value;
      }
    });
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
    @apply text-white mr-20;
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
  & .connect {
    @apply h-full;
    & .connect-title {
      @apply text-xl font-semibold text-project-title mb-5;
    }
    & .connect-google {
      @apply inline-flex border-3 border-project-principal rounded-xl;
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
