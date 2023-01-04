<template>
  <div class="knowledge-section__knowledge">
    <div class="knowledge-main">
      <div class="skill" v-for="skill in skills" :key="skill.id">
        <div class="text-wrapper">
          <p class="text-name">{{ skill.name }}</p>
          <p class="text-period" :class="{ odd: skill.id % 2 === 0 }">{{ skill.date | dateFilter }}</p>
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
          date: '2020-10-04',
        },
        {
          id: 2,
          name: 'HTML',
          date: '2020-01-04',
        },
        {
          id: 3,
          name: 'CSS',
          date: '2020-01-04',
        },
        {
          id: 4,
          name: 'JS',
          date: '2021-08-04',
        },
        {
          id: 5,
          name: 'TS',
          date: '2022-07-04',
        },
        {
          id: 6,
          name: 'GSAP',
          date: '2022-07-04',
        },
        {
          id: 7,
          name: 'AXIOS',
          date: '2022-03-04',
        },
        {
          id: 8,
          name: 'VUEX',
          date: '2021-03-04',
        },
        {
          id: 9,
          name: 'NPM',
          date: '2022-02-04',
        },
        {
          id: 10,
          name: 'GIT',
          date: '2020-07-04',
        },
        {
          id: 11,
          name: 'Tailwind',
          date: '2022-03-04',
        },
      ],
    };
  },
  methods: {
    gsapSetup() {
      // Creating Timeline
      const tl = gsap.timeline({ reversed: true, paused: true });
      // Selecting Targets
      const targets = {
        knowledgeMain: this.$el.querySelector('.knowledge-main'),
      };
      // Creating Animations
      tl.to(targets.knowledgeMain, { height: 'auto', duration: 0.7, ease: 'slow(0.7, 0.7, false)' });

      return tl;
    },
    openerSetup(tl: any): void {
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
  },
  computed: {
    openerText() {
      if (this.isOpened) {
        return 'Ok, I got it';
      }
      return 'Show more';
    },
  },
  filters: {
    dateFilter(dateText: string) {
      // Calculating total Months
      const date = new Date(dateText);
      const current = new Date();
      const months = current.getMonth() - date.getMonth() + 12 * (current.getFullYear() - date.getFullYear());
      // Calculating Years
      const years = Math.floor(months / 12);
      let result = '';
      // Choosing correct text
      if (months === 1) {
        result = `${months} Month`;
      } else if (months < 12 && months > 1) {
        result = `${months} Months`;
      } else if (years === 1) {
        result = `${years} Year`;
      } else if (years > 1) {
        result = `${years} Years`;
      } else {
        result = 'Very short time';
      }

      return result;
    },
  },
  mounted() {
    const tl: any = this.gsapSetup();
    this.openerSetup(tl);
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
      & .text-name {
        @apply text-5xl font-semibold text-project-title uppercase;
      }

      & .text-period {
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

// Opener Text Transition Group Animation
.opener-name-enter-active,
.opener-name-leave-active {
  @apply transition-all duration-500;
}

.opener-name-enter {
  @apply opacity-100 translate-x-20;
}
.opener-name-leave-to {
  @apply opacity-0 -translate-x-20;
}
</style>
