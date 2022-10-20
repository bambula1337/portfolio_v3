<template>
  <div class="stage-section">
    <StagesSectionText/>
    <StagesSectionStages/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StagesSectionText from '@/components/StagesSectionText.vue';
import StagesSectionStages from '@/components/StagesSectionStages.vue';
// gsap importing
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// eslint-disable-next-line import/extensions
import DrawSVGPlugin from '@/assets/gsap/draw-svg.js';

export default Vue.extend({
  name: 'StagesSection',
  components: {
    StagesSectionText,
    StagesSectionStages,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    const tl = gsap.timeline();
    tl.from(
      '.stage-section-text',
      {
        scrollTrigger: {
          trigger: '.stage-section-text',
          toggleActions: 'restart none none none',
          scrub: 1,
          start: 'top 40%',
          end: '+=150',
          markers: true,
          pin: '.stages-section',
          // pinType: 'transform',
          pinSpacing: true,
        },
        scale: 0.8,
        x: -100,
        opacity: 0,
      },
    );
    tl.from(
      '.card',
      {
        scrollTrigger: {
          trigger: '.stages-section-stages',
          toggleActions: 'restart none none none',
          scrub: 1,
          start: '70% 40%',
          end: '+=700',
          markers: true,
          pin: '.stages-section',
          // pinType: 'transform',
          pinSpacing: true,
        },
        stagger: 1,
        y: 50,
        opacity: 0,
      },
    );
  },
});
</script>

<style lang="scss" scoped>
.stage-section {
  @apply flex flex-col;
}
</style>
