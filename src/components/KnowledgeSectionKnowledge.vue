<template>
  <div class="knowledge-section__knowledge">
    <div class="knowledge-main">
      <div class="skill" v-for="skill in skills" :key="skill.id">
        <div class="text-wrapper">
          <p class="name">{{ skill.name }}</p>
          <p class="period" :class="{ odd: skill.id % 2 === 0 }">{{ skill.period }}</p>
        </div>
      </div>
    </div>
    <p class="knowledge-opener">Show more</p>
  </div>
</template>

<!--TODO: Create flexible data which base on date instead of string-->

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'KnowledgeSectionKnowledge',
  data() {
    return {
      isClosed: false,
      clientHeight: 0,
      skills: [
        {
          id: 1,
          name: 'Vue',
          period: 'Year',
        },
        {
          id: 2,
          name: 'HTML',
          period: '2 Years',
        },
        {
          id: 3,
          name: 'CSS',
          period: '2 Years',
        },
        {
          id: 4,
          name: 'JS',
          period: 'Year',
        },
        {
          id: 5,
          name: 'TS',
          period: '3 Months',
        },
        {
          id: 6,
          name: 'GSAP',
          period: '3 Months',
        },
        {
          id: 7,
          name: 'AXIOS',
          period: '5 Months',
        },
        {
          id: 8,
          name: 'VUEX',
          period: '5 Months',
        },
        {
          id: 9,
          name: 'NPM',
          period: 'Year',
        },
        {
          id: 10,
          name: 'GIT',
          period: '2 Years',
        },
        {
          id: 11,
          name: 'Tailwind',
          period: '7 Months',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.knowledge-section__knowledge {
  @apply w-full flex flex-col justify-center font-project-default px-26;

  & .knowledge-main {
    @apply h-70 flex items-center relative flex-wrap border-2 border-project-principal rounded-4xl py-20 overflow-hidden transition-all duration-500;
    &::after {
      $size: 2.5rem;
      width: $size;
      height: $size;
      left: calc(50% - $size);
    }

    & .skill {
      @apply w-%25 mb-32;
      & .name {
        @apply text-5xl font-semibold text-project-title uppercase;
      }

      & .period {
        @apply text-xl font-semibold text-project-second;
      }
      & .odd {
        @apply text-project-first;
      }
    }
  }

  & .knowledge-opener {
    @apply text-project-title -mt-10 cursor-pointer z-10 w-40 self-center;
  }
}
</style>
