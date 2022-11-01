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
      <button type="submit" class="button">
        <p class="button-text">Send</p>
        <img src="@/assets/icons/send.svg" alt="" class="button-image" />
      </button>
    </form>
  </div>
</template>

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
});
</script>

<style lang="scss" scoped>
.contact-section__form {
  @apply flex flex-col justify-center text-center font-project-default text-project-title rounded-3xl px-14 py-20;
  $background: rgba(43, 43, 50, 1);
  background: $background;
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
      &:focus{
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
      @apply w-full h-13 bg-project-first flex justify-center items-center rounded-full;
      & .button-text {
        @apply text-xl font-semibold mr-3;
      }
      & .button-image {
        @apply w-5;
      }
    }
  }
}
</style>
