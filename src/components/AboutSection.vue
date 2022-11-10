<template>
  <section class="about-section">
    <AboutSectionText />
    <AboutSectionImage />
  </section>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Components
import AboutSectionText from '@/components/AboutSectionText.vue';
import AboutSectionImage from '@/components/AboutSectionImage.vue';
// Gsap
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default Vue.extend({
  name: 'AboutSection',
  components: {
    AboutSectionText,
    AboutSectionImage,
  },
  methods: {
    gsapSetup() {
      // Registering plugins
      gsap.registerPlugin(ScrollTrigger);
      // Creating Timeline
      const tl = gsap.timeline();
      // Creating Animations
      tl.from('.about-section-text', {
        scrollTrigger: {
          trigger: '.about-section-text',
          toggleActions: 'restart none none none',
          scrub: 1,
          start: 'top 40%',
          end: '+=150',
          // markers: true,
          pin: '.about-section',
          pinType: 'transform',
          pinSpacing: true,
        },
        scale: 0.8,
        opacity: 0,
      });
      tl.from('.about-section-image', {
        scrollTrigger: {
          trigger: '.about-section-image',
          toggleActions: 'restart none none none',
          scrub: 1,
          start: '5% 40%',
          end: '+=150',
          id: 'image',
          // markers: true,
          pin: '.about-section',
          pinType: 'transform',
          pinSpacing: true,
        },
        y: 200,
        opacity: 0,
      });
    },
  },
  mounted() {
    // Setting Up Gsap Animations
    this.gsapSetup();
  },
});
</script>

<style lang="scss" scoped>
.about-section {
  @apply flex justify-between items-center px-32;
}
</style>
