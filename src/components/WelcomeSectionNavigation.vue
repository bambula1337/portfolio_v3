<template>
  <article class="welcome-section-navigation">
    <div class="dots">
      <div :class="[{'active': dot.active}, 'dot']" v-for="(dot, index) in dots" :key="index"></div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WelcomeSectionNavigation',
  data() {
    return {
      dots: [
        {
          active: true,
        },
        {
          active: false,
        },
        {
          active: false,
        },
        {
          active: false,
        },
      ],
    };
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
