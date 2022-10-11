<template>
  <div class="home">
    <WelcomeSection/>
    <AboutSection/>
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
  @apply flex flex-col;
}
</style>
