<template>
  <article class="stages-section-stages">
    <div class="cards-wrapper">
      <div
        class="card"
        v-for="card in cards"
        :key="card.id"
        @mousemove="skew"
        @focus="skew"
      >
        <div class="top">
          <p class="number">{{ card.id | numberOfCard }}</p>
          <h1 class="name">{{ card.name }}</h1>
        </div>
        <div class="bottom">
          <p class="text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<!--TODO: Create hover animation on card and card Component-->

<script lang="ts">
// TS Support
import Vue from 'vue';
// Gsap
import { gsap } from 'gsap';

export default Vue.extend({
  name: 'StagesSectionStages',
  data() {
    return {
      cards: [
        {
          id: 1,
          name: 'Discuss',
          text: 'I start my work by discussing what client want and getting a design that he has, then agree a price.',
        },
        {
          id: 2,
          name: 'Developing/Creating',
          text: 'Then I start developing the project with utilities that project need. I usually work with Vuejs + its ecosystem and other things which work with Vue.',
        },
        {
          id: 3,
          name: 'Getting the project',
          text: 'Finally you can see what I did and take the project. If you want to change something, I will do it.',
        },
      ],
    };
  },
  methods: {
    skew(event: MouseEvent) {
      console.log(event.target);
      const width = event.target.clientWidth;
      const height = event.target.clientHeight;
      const posX = event.clientX - event.originalTarget.offsetLeft;
      const posY = event.clientY - event.originalTarget.offsetTop;
      const skewX = (width - posX) / 50;
      // event.target.style.skewX = `${posX}deg`;
      console.log(`x = ${posX}, y = ${posY}`);
      console.log(event);
      gsap.to(event.target, {
        skewX,
        duration: 1,
      });
    },
  },
  filters: {
    numberOfCard(number: number): string | number {
      if (number <= 9 && number >= 0) {
        return `0${number}`;
      }
      return number;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/default_mixins.scss';

.stages-section-stages {
  @apply flex justify-center items-center mt-26;
  & .cards-wrapper {
    @apply w-full flex justify-between flex-wrap text-left text-project-title font-project-default px-26;
    & .card {
      @apply w-80 bg-project-background border-2 border-project-title rounded-2xl py-3 px-5;
      //transform: skewX(5deg) skewY(5deg);
      & .top {
        & .number {
          @apply inline text-2xl;
          @include default-gradient(40px, 0px);
        }

        & .name {
          @apply text-2xl font-semibold my-3;
        }
      }

      & .bottom {
        & .text {
          @apply text-project-paragraph font-medium;
        }
      }
    }
  }
}
</style>
