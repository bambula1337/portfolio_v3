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
    <div class="knowledge-opener">
      <transition name="opener-name" mode="out-in">
        <p class="knowledge-opener-text" :key="isOpened">{{ openerText }}</p>
      </transition>
    </div>
  </div>
</template>

<!--TODO: Create flexible data which base on date instead of string-->

<script lang="ts">
import Vue from 'vue';
import { gsap } from 'gsap';

export default Vue.extend({
  name: 'KnowledgeSectionKnowledge',
  data() {
    return {
      isOpened: false,
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
  computed: {
    openerText() {
      if (this.isOpened) {
        return 'Ok, I got it';
      }
      return 'Show more';
    },
  },
  mounted() {
    // Creating Timeline
    const tl = gsap.timeline({ reversed: true, paused: true });
    tl.to('.knowledge-main', { height: 'auto', duration: 0.7, ease: 'slow(0.7, 0.7, false)' });
    // Adding ability to open and close skills
    this.$el.querySelector('.knowledge-opener')?.addEventListener('click', () => {
      if (tl.reversed()) {
        tl.play();
        this.isOpened = true;
      } else {
        tl.reverse();
        this.isOpened = false;
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.knowledge-section__knowledge {
  @apply w-full flex flex-col justify-center font-project-default bg-no-repeat px-26 py-10;
  background-image: url('@/assets/particles/dots-purple.svg'),
    url('@/assets/particles/boxes-blue.svg');
  background-position: 8rem top, 95% bottom;
  background-size: 125px, 50px;

  & .knowledge-main {
    @apply h-70 flex items-center relative flex-wrap border-2 border-project-principal rounded-4xl py-20 overflow-hidden;
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

// opener Transition Group Animation
.opener-name-enter-active,
.opener-name-leave-active {
  @apply transition-all duration-500;
}

.opener-name-enter{
  @apply opacity-100 translate-x-20;
}
.opener-name-leave-to{
  @apply opacity-0 -translate-x-20;
}
</style>
