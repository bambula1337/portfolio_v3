<template>
  <div class="contact-section__form">
    <div class="text-wrapper">
      <h2 class="main-text">Quick contact</h2>
      <h3 class="sub-text">In order to contact me as fast as possible, just fill these fields.</h3>
    </div>
    <form class="form">
      <div class="main-inputs-wrapper">
        <label for=".main-input" v-for="input in inputs.main" :key="input.id">
          <input
            :type="input.type"
            v-model="input.value"
            :placeholder="input.placeholder"
            class="main-input input"
          />
        </label>
      </div>
      <div class="sub-inputs-wrapper">
        <label for=".sub-input" v-for="input in inputs.sub" :key="input.id">
          <input
            :type="input.type"
            v-model="input.value"
            :placeholder="input.placeholder"
            class="sub-input input"
          />
        </label>
      </div>
      <button type="submit" class="button" @mouseenter="animateButton" @focus="animateButton">
        <p class="button-text">Send</p>
        <img src="@/assets/icons/send.svg" alt="" class="button-image" />
      </button>
    </form>
  </div>
</template>

<!--TODO: Rewrite animation for button icon using gsap-->

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactSectionForm',
  data() {
    return {
      inputs: {
        main: [
          {
            id: 1,
            value: '',
            placeholder: 'Email',
            type: 'email',
          },
          {
            id: 2,
            value: '',
            placeholder: 'Name',
            type: 'text',
          },
        ],
        sub: [
          {
            id: 1,
            value: '',
            placeholder: 'Tell me about your project',
            type: 'text',
          },
        ],
      },
    };
  },
  methods: {
    animateButton(event: any) {
      event.target.classList.add('animated');
    },
  },
});
</script>

<style lang="scss" scoped>
.contact-section__form {
  @apply flex flex-col relative justify-center text-center font-project-default text-project-title rounded-3xl px-14 py-20;
  $background: rgba(43, 43, 50, 1);
  background: $background;
  &::after {
    @apply absolute bg-no-repeat top-0 -z-1;
    content: '';
    $particles-width: 25px;
    left: calc($particles-width/-2);
    width: calc(110% + $particles-width);
    height: calc(100% + $particles-width);
    background-image: url('@/assets/particles/dots-purple.svg'),
      url('@/assets/particles/boxes-green.svg');
    background-position: right 20%, left bottom;
  }
  & .text-wrapper {
    @apply flex flex-col items-center mb-16;
    & .main-text {
      @apply text-4xl font-semibold mb-3;
    }
    & .sub-text {
      @apply w-70 text-project-paragraph;
    }
  }
  & .form {
    @apply flex items-center flex-col;
    & .input {
      @apply w-full outline-none border-b-2 border-project-principal text-xl mb-5 pb-2 transition-all duration-200;
      background: $background;
      &:focus {
        @apply border-project-highlight;
      }
    }
    & .main-inputs-wrapper {
      @apply flex flex-col mb-16;
      & .main-inout {
      }
    }
    & .sub-inputs-wrapper {
      @apply flex flex-col mb-10;
      & .sub-input {
      }
    }
    & .button {
      @apply w-full h-12 bg-project-first flex justify-center items-center ring-4 ring-project-highlight ring-offset-4 ring-offset-project-background rounded-full;
      @apply transition-all duration-300;

      &:hover {
        @apply ring-project-principal overflow-hidden;
      }
      & .button-text {
        @apply text-xl font-semibold mr-3;
      }
      & .button-image {
        @apply w-5 transition-all duration-300;
        animation-name: plane-to-top, plane-from-botton;
        animation-duration: 0.4s, 0.5s;
        animation-delay: 0s, 0.4s;
        animation-play-state: paused;
      }
    }
    & .animated {
      & .button-image {
        animation-play-state: running !important;
      }
    }
  }
}

// Button Hover Plane Animation

@keyframes plane-to-top {
  from {
    transform: translateX(0) translateY(0);
  }
  to {
    transform: translateX(3rem) translateY(-3rem);
  }
}

@keyframes plane-from-botton {
  0% {
    transform: translateX(-3rem) translateY(3rem);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
</style>
