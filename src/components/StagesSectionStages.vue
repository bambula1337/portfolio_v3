<template>
  <article class="stages-section-stages">
    <div class="cards-wrapper">
      <div
        class="card"
        v-for="card in cards"
        :key="card.id"
        @mousemove="rotateEnter"
        @focus="rotateEnter"
        @mouseleave="rotateLeave"
        @focusout="rotateLeave"
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
      minimalRotation: 15,
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
    rotateEnter(event: MouseEvent) {
      if (event.target.className === 'card') {
        const width = event.target.clientWidth;
        const posX = event.clientX - event.originalTarget.offsetLeft;
        const posY = event.layerY - event.originalTarget.offsetTop;
        const rotateX = (posY + 66) / -this.minimalRotation;
        const rotateY = (width / 2 - posX) / this.minimalRotation;
        gsap.to(event.target, {
          rotateX,
          rotateY,
          scale: 1.1,
          duration: 1,
        });
      } else {
        const target = event.target.closest('.card');
        const width = target.offsetWidth;
        const posX = event.clientX - target.offsetLeft;
        const posY = event.layerY - target.offsetTop;
        const rotateX = (posY + 66) / -this.minimalRotation;
        const rotateY = (width / 2 - posX) / this.minimalRotation;
        console.log(posY);
        gsap.to(target, {
          rotateX,
          rotateY,
          duration: 1,
        });
      }
    },
    rotateLeave(event: MouseEvent) {
      if (event.target.className === 'card') {
        gsap.to(event.target, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 1,
        });
      }
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
      @apply bg-project-background border-2 border-project-title rounded-2xl py-3 px-5;
      $width: 20rem;
      width: $width;
      transform: perspective($width);
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
