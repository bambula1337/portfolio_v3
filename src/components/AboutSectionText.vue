<template>
  <article class="about-section-text">
    <div class="top-text">
      <p class="main-text">About Me</p>
      <p class="sub-text">My personal experience</p>
    </div>
    <div class="bottom-text">
      <p class="text">it’s been 2 years since I discovered the world of web developing and then I
        dived into it. I’ve done several courses on Udemy and a lot of courses on Vue mastery, also
        I’ve done several non-commercial projects. Currently I’m learning JWT and Typescript.</p>
    </div>
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutSectionText',
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/default_mixins.scss';

.about-section-text {
  @apply flex flex-col font-project-default -mt-10;

  & .top-text {
    @apply text-left mb-7;
    & .main-text {
      @apply text-2xl font-bold uppercase;
      display: inline-flex;
      @include default-gradient();
    }

    & .sub-text {
      @apply text-5xl font-semibold text-project-title;
    }
  }

  & .bottom-text {
    @apply w-136;
    & .text {
      @apply text-lg text-project-paragraph text-left;
    }
  }
}
</style>
