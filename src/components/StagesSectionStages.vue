<template>
  <div class="stages-section-stages">
    <div class="cards-wrapper">
      <div class="card" v-for="card in cards" :key="card.id">
        <div class="top">
          <p class="number"> {{ card.id | numberOfCard }} </p>
          <h1 class="name">{{ card.name }}</h1>
        </div>
        <div class="bottom">
          <p class="text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

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
    @apply w-full flex justify-evenly flex-wrap text-left text-project-title font-project-default;
    & .card {
      @apply w-80 border-2 border-project-title rounded-2xl py-3 px-5;
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
