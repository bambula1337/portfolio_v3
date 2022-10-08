<template>
  <div class="welcome-section">
    <WelcomeSectionLinks/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeSectionLinks from '@/components/WelcomeSectionLinks.vue';

export default Vue.extend({
  name: 'WelcomeSection',
  components: {
    WelcomeSectionLinks,
  },
});
</script>

<style lang="scss" scoped>

</style>
