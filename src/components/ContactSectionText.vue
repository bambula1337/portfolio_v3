<template>
  <article class="contact-section__text">
    <h2 class="section-name">Contact me</h2>
    <div class="text-wrapper">
      <h3 class="main-text">A project or Idea?</h3>
      <h4 class="sub-text">
        You can find me on some social medies or networks where I post my creations.you can also
        contact me there to ask your questions about prices and my availability
      </h4>
    </div>
    <div class="icons-wrapper">
      <div class="icons">
        <img class="icon" v-for="icon in links" :key="icon.id" :src="icon.logo" alt="" />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactSectionText',
  data() {
    return {
      links: [
        {
          id: 1,
          logo: require('@/assets/icons/icon_linkedin.svg'),
          url: 'https://www.linkedin.com/in/oleg-golevitch-2a04b4250/',
        },
        {
          id: 2,
          logo: require('@/assets/icons/icon_github.svg'),
          url: 'https://github.com/bambula1337',
        },
        {
          id: 3,
          logo: require('@/assets/icons/icon_instagram.svg'),
          url: 'https://www.instagram.com/adms_dev/',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/default_mixins.scss';

.contact-section__text {
  @apply w-144 relative font-project-default text-project-title text-left;
  & .section-name {
    @apply inline-flex text-2xl font-bold mb-2;
    @include default-gradient();
  }
  & .text-wrapper {
    @apply flex flex-col text-start mb-5;
    & .main-text {
      @apply text-5xl font-semibold text-project-title mb-5;
    }
    & .sub-text {
      @apply text-lg text-project-paragraph;
    }
  }
  & .icons-wrapper {
    @apply w-full flex justify-center items-center py-5;
    &::after {
      @apply w-full h-0.5 absolute self-center bottom-8 bg-project-principal;
      z-index: -1;
      content: '';
    }
    & .icons {
      @apply flex bg-project-background;
      & .icon {
        @apply w-8 h-8 mx-4 ring-2 ring-project-background ring-offset-2 rounded-md ring-offset-project-background cursor-pointer transition-all duration-400;

        &:hover {
          @apply ring-project-principal;
        }
      }
    }
  }
}
</style>
