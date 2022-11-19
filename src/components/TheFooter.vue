<template>
  <footer class="footer__main">
    <p class="footer-text">Copyright © 2023 adms_dev</p>
  </footer>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'TheFooter',
});
</script>

<style lang="scss" scoped>
.footer__main {
  @apply mb-2;
  & .footer-text {
    @apply font-project-default text-project-title;
  }
}
</style>
