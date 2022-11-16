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
      // Selecting Targets
      const targets = {
        section: this.$el,
        text: this.$el.querySelector('.about-section-text'),
        image: this.$el.querySelector('.about-section-image'),
      };
      // Creating Animations
      tl.from(targets.text, {
        scrollTrigger: {
          scrub: 1,
          start: 'top 40%',
          end: '+=150',
          pin: targets.section,
          pinType: 'transform',
          pinSpacing: true,
        },
        scale: 0.8,
        opacity: 0,
      });
      tl.from(targets.image, {
        scrollTrigger: {
          scrub: 1,
          start: '5% 40%',
          end: '+=150',
          pin: targets.section,
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
    const x = 3;
  },
});
</script>

<style lang="scss" scoped>
.about-section {
  @apply flex justify-between items-center px-32;
}
</style>
