<template>
  <article class="knowledge-section__text">
    <div class="text-wrapper" data-lag="0.2">
      <p class="main-text">Experiece</p>
      <p class="sub-text">My knowledge</p>
    </div>
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'KnowledgeSectionText',
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/default_mixins.scss';
.knowledge-section__text {
  @apply w-full justify-center text-center font-project-default text-project-title;
  & .text-wrapper {
    & .main-text {
      @apply inline-flex text-2xl font-bold;
      @include default-gradient();
    }
    & .sub-text {
      @apply text-5xl font-semibold;
    }
  }
}
</style>
