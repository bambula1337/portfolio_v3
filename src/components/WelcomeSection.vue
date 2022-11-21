<template>
  <section class="welcome-section">
    <WelcomeSectionLinks />
    <WelcomeSectionText />
    <WelcomeSectionNavigation />
  </section>
</template>

<!-- TODO: Fix Glow -->

<script lang="ts">
// TS Support
import Vue from 'vue';
// Components
import WelcomeSectionLinks from '@/components/WelcomeSectionLinks.vue';
import WelcomeSectionText from '@/components/WelcomeSectionText.vue';
import WelcomeSectionNavigation from '@/components/WelcomeSectionNavigation.vue';
// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default Vue.extend({
  name: 'WelcomeSection',
  components: {
    WelcomeSectionLinks,
    WelcomeSectionText,
    WelcomeSectionNavigation,
  },
  methods: {
    gsapSetup() {
      // Registering Plugins
      gsap.registerPlugin(ScrollTrigger);
      // Selecting Targets
      const targets = {
        links: this.$el.querySelector('.welcome-section-links'),
        navigation: this.$el.querySelector('.welcome-section-navigation'),
        background: this.$el.querySelector('.background'),
      };
      // Creating Animation
      gsap.from(targets.links, {
        x: -100,
        duration: 1.3,
      });
      gsap.from(targets.navigation, {
        x: 140,
        duration: 1.4,
      });
    },
  },
  mounted() {
    this.gsapSetup();
  },
});
</script>

<style lang="scss" scoped>
.welcome-section {
  @apply w-full h-screen flex justify-between items-center px-5;
}
</style>
