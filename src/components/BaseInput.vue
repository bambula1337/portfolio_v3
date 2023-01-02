<template>
  <div class="base-input-wrapper">
    <label>
      <slot></slot>
      <input
        class="base-input"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseInput',
  props: {
    value: {
      type: String,
    },
  },
  inheritAttrs: false,
});
</script>

<style lang="scss" scoped>
.base-input-wrapper {
  @apply text-xl font-semibold;
  & .base-input {
    @apply w-full outline-none border-b-2 border-project-principal text-xl font-normal mt-5 mb-10 pb-2 transition-all duration-200;
    background: transparent;
    &:focus {
      @apply border-project-highlight;
    }
  }
}
</style>
