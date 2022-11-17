<template>
  <section class="welcome-section">
    <WelcomeSectionLinks/>
    <WelcomeSectionText/>
    <WelcomeSectionNavigation/>
  </section>
</template>

<!-- TODO: Change Icons and add href with a tag on them linkedin instagram github
           Create Appearing Animations with gsap
           Create Bottom Glow-->

<script lang="ts">
// TS Support
import Vue from 'vue';
// Components
import WelcomeSectionLinks from '@/components/WelcomeSectionLinks.vue';
import WelcomeSectionText from '@/components/WelcomeSectionText.vue';
import WelcomeSectionNavigation from '@/components/WelcomeSectionNavigation.vue';

export default Vue.extend({
  name: 'WelcomeSection',
  components: {
    WelcomeSectionLinks,
    WelcomeSectionText,
    WelcomeSectionNavigation,
  },
});
</script>

<style lang="scss" scoped>
.welcome-section {
  @apply w-full h-screen flex justify-between items-center px-5;
}
</style>
