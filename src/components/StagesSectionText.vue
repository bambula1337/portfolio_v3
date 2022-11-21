<template>
  <article class="stages-section__text">
    <div class="text-wrapper">
      <h1 class="main">Stages</h1>
      <p class="sub" data-appearing-text-chars>That's how I roll</p>
    </div>
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'StagesSectionText',
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/default_mixins.scss';

.stages-section__text{
  @apply flex flex-col items-start text-left font-project-default px-26;
  & .text-wrapper{
    & .main{
      @apply inline-flex text-2xl font-bold;
      @include default-gradient();
    }
    & .sub{
      @apply text-5xl font-semibold text-project-title;
    }
  }
}
</style>
