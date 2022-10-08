<template>
  <div class="welcome-section-text">
    <div class="text-wrapper">
      <p class="main-text">
        Welcome, I am <span class="gradient">Adm's</span>
      </p>
      <p class="sub-text">
        Junior Front end developer from Ukraine. Experienced in <span class="bold">Vue js and its ecosystem</span>,
        enthusiastic and kind person.
      </p>
    </div>
    <button class="button">Discover me</button>
      <img class="icon" :src="require('@/assets/icons/arrow_down.svg')" alt="">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WelcomeSectionText',
});
</script>

<style lang="scss" scoped>
.welcome-section-text {
  @apply w-screen flex flex-col items-center text-project-title;
  align-self: center;

  & .text-wrapper {
    @apply flex flex-col items-center mt-20;
    & .main-text {
      @apply text-5xl font-bold mb-5;
      & .gradient {
        background: #62B3EE;
        background: linear-gradient(to right, #62B3EE 0%, #796EEC 50%, #61CDB6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    & .sub-text{
      @apply w-116 text-2xl;
      & .bold{
        @apply font-bold;
      }
    }
  }
  & .button{
    @apply w-60 h-12 bg-project-first text-lg font-bold mt-40 mb-14 rounded-full ring-4 ring-offset-4;
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
