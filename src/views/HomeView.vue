<template>
  <div class="home">
    <WelcomeSection class="welcome-section"/>
    <AboutSection class="about-section"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeSection from '@/components/WelcomeSection.vue';
import AboutSection from '@/components/AboutSection.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    WelcomeSection,
    AboutSection,
  },
});
</script>

<style lang="scss">
.home {
  @apply flex flex-col overflow-x-hidden pb-220;

  & .welcome-section{
    @apply mb-72;
  }
}
</style>
