<template>
  <div class="knowledge-section__text">
    <div class="text-wrapper">
      <p class="main-text">Experiece</p>
      <p class="sub-text">My knowledge</p>
    </div>
  </div>
</template>

<script lang="ts">
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
