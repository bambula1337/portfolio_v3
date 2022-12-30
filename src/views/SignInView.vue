<template>
  <div class="sign-in-view">
    <SignInSectionForm />
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
import SignInSectionForm from '@/components/SignInSectionForm.vue';

export default Vue.extend({
  name: 'SignInView',
  components: { SignInSectionForm },
});
</script>

<style lang="scss" scoped>
.sign-in-view {
  @apply w-full pt-50;
}
</style>
