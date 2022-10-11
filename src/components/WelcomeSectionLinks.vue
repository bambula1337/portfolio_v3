<template>
  <div class="welcome-section-links">
    <div class="logo">
      <p class="logo-text">
        AS
      </p>
    </div>
    <div class="icons-wrapper">
      <div class="icons">
    <img class="icon" v-for="icon in links" :key="icon.id" :src="icon.logo" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WelcomeSectionLinks',
  data() {
    return {
      links: [
        {
          id: 1,
          // eslint-disable-next-line global-require
          logo: require('@/assets/icons/instagram.svg'),
          url: 'someUrl',
        },
        {
          id: 2,
          // eslint-disable-next-line global-require
          logo: require('@/assets/icons/icon_Bem.svg'),
          url: 'someUrl',
        },
        {
          id: 3,
          // eslint-disable-next-line global-require
          logo: require('@/assets/icons/Ball.svg'),
          url: 'someUrl',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/default_mixins.scss";

.welcome-section-links{
  @apply flex flex-col items-center text-project-principal font-project-default;
  min-height: 100px;
  & .logo{
    @apply h-10 mb-5;
    & .logo-text{
      @apply text-4xl font-semibold uppercase mt-0 mb-7 cursor-pointer transition-all duration-700;
      @include default-gradient(5px);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &:hover{
        @apply text-project-highlight;
        @include default-gradient(50px);
      }
    }
  }
  & .icons-wrapper{
    @apply flex relative items-center w-10;
    height: 85vh;
    min-height: 300px;
    & .icons{
      @apply w-10 flex flex-col justify-center items-center bg-project-background py-5;
      &::after{
        @apply w-0.5 h-full absolute self-center top-0 bg-project-principal;
        $width: 2.5px;
        width: $width;
        z-index: -1;
        left: calc(50% - $width);
        content: '';
      }
      & .icon{
        @apply w-7 h-7 my-4 ring-2 ring-project-background ring-offset-4 rounded-md ring-offset-project-background cursor-pointer transition-all duration-400;

        &:hover{
          @apply ring-project-principal;
        }
      }
    }
  }
}
</style>
