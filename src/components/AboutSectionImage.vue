<template>
  <article class="about-section-image">
    <img class="image" src="@/assets/images/about_section/main.png" alt="">
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutSectionImage',
});
</script>

<style lang="scss" scoped>
.about-section-image{
  @apply w-76 relative;
  &::before{
    @apply w-68 h-full absolute left-0 top-0 border-4 -ml-5 -mt-5 -z-1;
    content: '';
  }
  &::after{
    @apply w-full h-full absolute top-0 left-0 -z-1 mt-7;
    background: url("@/assets/particles/dots-blue.svg") no-repeat right bottom;
    content: '';
  }
  & .image{
    @apply relative w-68;
  }
}
</style>
