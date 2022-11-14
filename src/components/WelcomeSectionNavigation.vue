<template>
  <article class="welcome-section-navigation">
    <div class="dots">
      <a :href="`#${dot.id}`" class="dot" v-for="(dot, index) in dots" :key="index">x</a>
    </div>
  </article>
</template>

<!--TODO: Create real navigation-->

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'WelcomeSectionNavigation',
  data() {
    return {
      dots: [],
    };
  },
  mounted() {
    const sections = Array.from(document.querySelectorAll('.section'));
    this.dots = sections;
    // console.log(Array.from(sections));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const selector = `#${entry.target.id}`;
            const el = this.$el.querySelector(`[href='${selector}']`);
            this.$el.querySelectorAll('.dot').forEach((dot) => {
              dot.classList.remove('active');
            });
            el?.classList.add('active');
          }
        });
      },
      { threshold: 0 },
    );
    sections.forEach((e) => {
      observer.observe(e);
    });
  },
});
</script>

<style lang="scss" scoped>
.welcome-section-navigation {
  @apply w-14 text-project-title;
  & .dots {
    @apply flex relative flex-col items-center;
    &:hover::after {
      @apply opacity-100;
    }

    &::after {
      @apply absolute w-0.5 h-full mt-5 bg-project-secondaire opacity-50 transition-opacity duration-300;
      height: calc(100% - 2.5rem);
      content: '';
    }

    & .dot {
      @apply w-3.5 h-3.5 bg-project-principal m-5 rounded-full cursor-pointer;
      z-index: 2;
    }

    & .active {
      @apply w-6 h-6 bg-project-highlight border-3 border-project-principal;
    }
  }
}
</style>
