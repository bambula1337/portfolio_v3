<template>
  <section class="stages-section">
    <StagesSectionText />
    <StagesSectionStages />
    <div class="stages-background">
      <div class="stages-background-image-wrapper">
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
      <div class="stages-background-plane-wrapper">
        <img class="plane" src="@/assets/images/stages_section/plane.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Components
import StagesSectionText from '@/components/StagesSectionText.vue';
import StagesSectionStages from '@/components/StagesSectionStages.vue';
// Gsap
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
  methods: {
    gsapSetup() {
      // Registering Plugins
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);
      // Have to refresh because in some browsers ScrollTrigger animation brakes after window resize or refresh the page
      ScrollTrigger.refresh();
      // Creating Timeline
      const tl = gsap.timeline();
      // Selecting Targets
      const targets = {
        section: this.$el,
        text: this.$el.querySelector('.stages-section__text'),
        stages: this.$el.querySelector('.stages-section__stages'),
        cards: this.$el.querySelectorAll('.stages-card'),
        background: this.$el.querySelector('.background-image'),
        plane: this.$el.querySelector('.stages-background-plane-wrapper'),
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
        x: -100,
        opacity: 0,
      });
      tl.from(targets.cards, {
        scrollTrigger: {
          trigger: targets.stages,
          scrub: 1,
          start: '50% 40%',
          end: '+=700',
          pin: targets.section,
          pinType: 'transform',
          pinSpacing: true,
        },
        stagger: 1,
        y: 50,
        opacity: 0,
      });
      gsap.from(targets.background, {
        scrollTrigger: {
          trigger: targets.text,
          start: 'top 0%',
          end: '+=550',
          scrub: 5,
        },
        drawSVG: 0,
      });
      gsap.to(targets.plane, {
        scrollTrigger: {
          trigger: targets.text,
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
  },
  mounted() {
    this.gsapSetup();
  },
});
</script>

<style lang="scss" scoped>
.stages-section {
  @apply flex flex-col;

  & .stages-background {
    & .stages-background-image-wrapper {
      @apply absolute top-20 -z-1;
      -webkit-mask-image: url('@/assets/images/stages_section/line.svg');
      mask-image: url('@/assets/images/stages_section/line.svg');
    }

    & .stages-background-plane-wrapper {
      @apply absolute top-10 -left-10 -z-1;
      & .plane {
        transform: rotate(45deg);
      }
    }
  }
}
</style>
