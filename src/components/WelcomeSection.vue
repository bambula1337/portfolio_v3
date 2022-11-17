<template>
  <section class="welcome-section">
    <WelcomeSectionLinks/>
    <WelcomeSectionText/>
    <WelcomeSectionNavigation/>
    <div class="background"></div>
  </section>
</template>

<!-- TODO: Create Appearing Animations with gsap -->

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
        background: this.$el.querySelector('.background'),
      };
      // Creating Animation
      gsap.to(targets.background, {
        scrollTrigger: {
          start: '-5% -5%',
          end: '10% 0%',
          toggleActions: 'play reverse play none',
        },
        opacity: 1,
        duration: 1,
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
  & .background{
    @apply w-full h-full fixed bottom-0 left-0 bg-gradient-to-b from-project-background to-project-first -z-10 opacity-0;
    background: linear-gradient(180deg, #16161A 55%, #3D2C73 120%);
  }
}
</style>
