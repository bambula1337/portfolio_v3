<template>
  <article class="welcome-section-text">
    <div class="text-wrapper">
      <p class="main-text">
        Welcome, I am <span class="gradient">Adm's</span>
      </p>
      <p class="sub-text">
        Junior Front end developer from Ukraine. Experienced in <span class="semi-bold">Vue js and its ecosystem</span>,
        enthusiastic and kind person.
      </p>
    </div>
    <button class="button">Discover me</button>
      <img class="icon" :src="require('@/assets/icons/arrow_down.svg')" alt="">
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'WelcomeSectionText',
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/default_mixins.scss";

.welcome-section-text {
  @apply w-screen flex flex-col items-center text-project-title font-project-default;
  align-self: center;

  & .text-wrapper {
    @apply flex flex-col items-center mt-20;
    & .main-text {
      @apply text-5xl font-semibold mb-5;
      & .gradient {
        @include default-gradient();
      }
    }
    & .sub-text{
      @apply w-116 text-2xl;
      & .semi-bold{
        @apply font-semibold;
      }
    }
  }
  & .button{
    @apply w-60 h-12 bg-project-first text-lg font-semibold mt-40 mb-14 rounded-full ring-4 ring-offset-4;
    @apply ring-offset-project-background ring-project-highlight transition-all duration-300 select-none;

    &:hover{
      @apply ring-project-principal;

    }
  }
  & .icon{
    @apply w-12 -mb-20 cursor-pointer;
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(.56,.13,.81,1);
  }
}
//Arrow Animation
@keyframes bounce {
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(40px);
  }
}

</style>
