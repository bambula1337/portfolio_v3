<template>
  <div class="stage-section-stages">
    <div class="cards-wrapper">
      <div class="card" v-for="card in cards" :key="card.id">
        <div class="top">
          <p class="number"> {{ card.id | numberOfCard }} </p>
          <h1 class="name">dada</h1>
        </div>
        <div class="bottom">
          <p class="text"></p>
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
.stages-section-stages {
  @apply flex justify-center items-center;
  & .cards-wrapper {
    @apply flex gap-20;
  }
}
</style>
