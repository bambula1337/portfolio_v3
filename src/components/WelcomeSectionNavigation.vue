<template>
  <article class="welcome-section__navigation">
    <div class="dots-wrapper">
      <a
        :href="`#${dot.id}`"
        class="dot"
        v-for="(dot, index) in dots"
        :key="index"
        @click.prevent="scrollTo(`#${dot.id}`)"
        >.</a
      >
    </div>
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Gsap
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default Vue.extend({
  name: 'WelcomeSectionNavigation',
  data() {
    return {
      dots: [],
    };
  },
  methods: {
    scrollTo(selector: string) {
      gsap.to(window, { duration: 2, scrollTo: selector, ease: 'circ.out' });
    },
    navigationSetup() {
      // Selecting Sections
      const sections = Array.from(document.querySelectorAll('.section'));
      this.dots = sections;
      // Creating Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const selector = `#${entry.target.id}`;
              const el = this.$el.querySelector(`[href='${selector}']`);
              this.$el.querySelectorAll('.dot')?.forEach((dot) => {
                dot.classList.remove('active');
              });
              el?.classList.add('active');
            }
          });
        },
        { threshold: 0, rootMargin: '0px 0px -60% 0px' },
      );
      sections.forEach((e) => {
        observer.observe(e);
      });
    },
    gsapSetup() {
      gsap.registerPlugin(ScrollToPlugin);
    },
  },
  mounted() {
    this.navigationSetup();
    this.gsapSetup();
  },
});
</script>

<style lang="scss" scoped>
.welcome-section__navigation {
  @apply w-14 text-project-title;
  & .dots-wrapper {
    @apply w-10 flex relative flex-col items-center z-10;
    font-size: 0px;
    &:hover::after {
      @apply opacity-100;
    }

    &::after {
      @apply absolute w-0.5 h-full mt-5 bg-project-secondaire opacity-50 transition-opacity duration-300;
      height: calc(100% - 2.5rem);
      content: '';
    }

    & .dot {
      @apply w-3.5 h-3.5 bg-project-principal m-5 rounded-full transition-all duration-1000 cursor-pointer;
      z-index: 2;
    }

    & .active {
      @apply w-6 h-6 bg-project-highlight border-3 border-project-principal;
    }
  }
}
</style>
