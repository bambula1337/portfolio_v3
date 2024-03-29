<template>
  <article class="stages-section__stages">
    <div class="stages-cards-wrapper">
      <div
        :class="cardClass"
        v-for="card in cards"
        :key="card.id"
        @mousemove="cardMove"
        @focus="cardMove"
        @mouseleave="cardLeave"
        @focusout="cardLeave"
      >
        <div class="top-text-wrapper">
          <p class="text-number">{{ card.id | numberOfCard }}</p>
          <h1 class="text-name">{{ card.name }}</h1>
        </div>
        <div class="bottom-text-wrapper">
          <p class="text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Gsap
import { gsap } from 'gsap';

export default Vue.extend({
  name: 'StagesSectionStages',
  data() {
    return {
      minimalRotation: 15,
      cardClass: 'stages-card',
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
    cardMove(event: any) {
      let { target } = event;
      if (target.className !== this.cardClass) {
        target = target.closest(`.${this.cardClass}`);
      }
      const width = target.clientWidth;
      const height = target.clientHeight;
      const rect = target.getBoundingClientRect();
      const posX = event.clientX - rect.left;
      const posY = event.clientY - rect.top;
      const rotateX = (height / 2 - posY) / -this.minimalRotation;
      const rotateY = (width / 2 - posX) / this.minimalRotation;
      // Animate
      gsap.to(target, {
        rotateX,
        rotateY,
        scale: 1.1,
        duration: 1,
      });
    },
    cardLeave(event: any) {
      let { target } = event;
      if (event.target.className !== this.cardClass) {
        target = target.closest(`.${this.cardClass}`);
      }
      gsap.to(target, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
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

.stages-section__stages {
  @apply flex justify-center items-center mt-26;
  & .stages-cards-wrapper {
    @apply w-full flex justify-between flex-wrap text-left text-project-title font-project-default px-26;
    & .stages-card {
      @apply bg-project-background border-2 border-project-title rounded-2xl py-3 px-5;
      $width: 20rem;
      width: $width;
      transform: perspective($width);
      &:hover{
        @apply border-project-highlight;
      }
      & .top-text-wrapper {
        & .text-number {
          @apply inline text-2xl;
          @include default-gradient(40px, 0px);
        }

        & .text-name {
          @apply text-2xl font-semibold my-3;
        }
      }

      & .bottom-text-wrapper {
        & .text {
          @apply text-project-paragraph font-medium;
        }
      }
    }
  }
}
</style>
