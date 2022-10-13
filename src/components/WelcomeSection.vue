<template>
  <div class="welcome-section">
    <WelcomeSectionLinks/>
    <WelcomeSectionText/>
    <WelcomeSectionNavigation/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeSectionLinks from '@/components/WelcomeSectionLinks.vue';
import WelcomeSectionText from '@/components/WelcomeSectionText.vue';
import WelcomeSectionNavigation from '@/components/WelcomeSectionNavigation.vue';
// gsap importing
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default Vue.extend({
  name: 'WelcomeSection',
  components: {
    WelcomeSectionLinks,
    WelcomeSectionText,
    WelcomeSectionNavigation,

  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(
      '.about-section-text',
      {
        scrollTrigger: {
          trigger: '.about-section-text',
          toggleActions: 'restart none none none',
          scrub: 1,
          start: 'top 40%',
          end: '+=150',
          markers: true,
          pin: '.about-section',
        },
        scale: 0.8,
        opacity: 0,
      },
    );
    tl.from(
      '.about-section-image',
      {
        scrollTrigger: {
          trigger: '.about-section-image',
          toggleActions: 'restart none none none',
          scrub: 1,
          start: '15% 40%',
          end: '+=150',
          id: 'image',
          markers: true,
          pin: '.about-section',
        },
        y: 200,
        opacity: 0,
      },
    );
  },
});
</script>

<style lang="scss" scoped>
.welcome-section {
  @apply w-full h-screen flex justify-between items-center px-5;
}
</style>
