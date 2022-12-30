<template>
  <div class='secret-view'>
    <p>SECRET PAGE!!!</p>
  </div>
</template>

<script lang='ts'>
// TS Support
import Vue from 'vue';

export default Vue.extend({
  name: 'SecretView',
});
</script>

<style lang='scss' scoped>
.secret-view {
  @apply text-center text-white text-7xl font-project-default pt-52;
}
</style>
