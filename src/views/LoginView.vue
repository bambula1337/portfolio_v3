<template>
  <div class="login-view">
    <LoginSectionForm />
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Components
import LoginSectionForm from '@/components/LoginSectionForm.vue';

export default Vue.extend({
  name: 'LoginView',
  components: { LoginSectionForm },
});
</script>

<style lang="scss" scoped>
.login-view {
  @apply w-full pt-50;
}
</style>
