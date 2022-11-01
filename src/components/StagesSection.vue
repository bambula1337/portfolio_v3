<template>
  <div class="stage-section">
    <StagesSectionText />
    <StagesSectionStages />
    <div class="stage-background">
      <div class="stage-background-image-wrapper">
        <svg
          width="1478"
          height="364"
          viewBox="0 0 1478 364"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="background-image"
            d="M4 211.36C269.5 429.499 437.5 172.5 629.5 172.5C894.689 172.5 935 358.5 1096.5 358.5C1236.22 358.5 1420.5 145.5 1473 2"
            stroke="white"
            stroke-width="10"
          />
        </svg>
      </div>
      <div class="stage-background-plane-wrapper">
        <img class="plane" src="@/assets/images/stages_section/plane.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<!--TODO: Rewrite gsap amimation triggers and targets to query selector correctly to prevent random animations-->

<script lang="ts">
import Vue from 'vue';
import StagesSectionText from '@/components/StagesSectionText.vue';
import StagesSectionStages from '@/components/StagesSectionStages.vue';
// gsap importing
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// eslint-disable-next-line import/extensions
import DrawSVGPlugin from '@/assets/gsap/draw-svg.js';

export default Vue.extend({
  name: 'StagesSection',
  components: {
    StagesSectionText,
    StagesSectionStages,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);
    // Have to refresh because in some browsers ScrollTrigger animation brakes after reloas
    ScrollTrigger.refresh();
    const tl = gsap.timeline();
    tl.from('.stage-section-text', {
      scrollTrigger: {
        trigger: '.stage-section-text',
        toggleActions: 'restart none none none',
        scrub: 1,
        start: 'top 40%',
        end: '+=150',
        // markers: true,
        pin: '.stages-section',
        pinType: 'transform',
        pinSpacing: true,
      },
      scale: 0.8,
      x: -100,
      opacity: 0,
    });
    tl.from('.card', {
      scrollTrigger: {
        trigger: '.stages-section-stages',
        toggleActions: 'restart none none none',
        scrub: 1,
        start: '50% 40%',
        end: '+=700',
        // markers: true,
        pin: '.stages-section',
        pinType: 'transform',
        pinSpacing: true,
      },
      stagger: 1,
      y: 50,
      opacity: 0,
    });
    gsap.from('.background-image', {
      scrollTrigger: {
        trigger: '.stage-section-text',
        start: 'top 0%',
        end: '+=550',
        scrub: 5,
      },
      drawSVG: 0,
    });
    gsap.to('.stage-background-plane-wrapper', {
      scrollTrigger: {
        trigger: '.stage-section-text',
        start: 'top 0%',
        end: '+=500',
        scrub: 5,
      },
      motionPath: {
        path: '.background-image',
        autoRotate: true,
      },
      top: '20',
      left: '-20px',
    });
  },
});
</script>

<style lang="scss" scoped>
.stage-section {
  @apply flex flex-col;

  & .stage-background {
    & .stage-background-image-wrapper {
      @apply absolute top-20 -z-1;
      -webkit-mask-image: url('@/assets/images/stages_section/line.svg');
      mask-image: url('@/assets/images/stages_section/line.svg');
    }

    & .stage-background-plane-wrapper {
      @apply absolute top-10 -left-10 -z-1;
      & .plane {
        transform: rotate(45deg);
      }
    }
  }
}
</style>
