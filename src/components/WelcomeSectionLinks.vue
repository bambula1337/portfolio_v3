<template>
  <article class="welcome-section__links">
    <div class="logo-wrapper">
      <p class="logo">AS</p>
    </div>
    <div class="icons-wrapper">
      <div class="icons">
        <a class="link" target="_blank" :href="link.url" v-for="link in social" :key="link.id">
          <img class="link-icon" :src="urlFixer(link.logo)" alt="" />
          <p class="link-name">{{link.name}}</p>
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'WelcomeSectionLinks',
  props: {
    social: Array,
  },
  methods: {
    urlFixer(url:string) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`@/assets/${url}`);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/default_mixins.scss';

.welcome-section__links {
  @apply flex flex-col items-center text-project-principal font-project-default;
  min-height: 100px;
  & .logo-wrapper {
    @apply h-10 mb-5;
    & .logo {
      @apply text-4xl font-semibold uppercase mt-0 mb-7 cursor-pointer transition-all duration-700;
      @include default-gradient(5px);
      &:hover {
        @apply text-project-highlight;
        @include default-gradient(50px);
      }
    }
  }
  & .icons-wrapper {
    @apply flex relative items-center w-10;
    height: 85vh;
    min-height: 300px;
    & .icons {
      @apply w-10 flex flex-col justify-center items-center py-5;
      &::before{
        @apply w-0.5 absolute self-center bottom-0 bg-project-principal;
        $width: 2.5px;
        width: $width;
        height: calc(50% - 100px);
        z-index: -1;
        left: calc(50% - $width);
        content: '';
      }
      &::after {
        @apply w-0.5 absolute self-center top-0 bg-project-principal;
        $width: 2.5px;
        width: $width;
        height: calc(50% - 100px);
        z-index: -1;
        left: calc(50% - $width);
        content: '';
      }
      & .link{
        font-size: 0;
        & .link-icon {
          @apply w-8 h-8 my-4 ring-2 ring-project-background ring-offset-2 rounded-md ring-offset-project-background cursor-pointer transition-all duration-400;

          &:hover {
            @apply ring-project-principal;
          }
        }
      }
    }
  }
}
</style>
