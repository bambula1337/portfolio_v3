<template>
  <div class="welcome-section">
    <WelcomeSectionLinks/>
    <WelcomeSectionText/>
    <WelcomeSectionNavigation/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeSectionLinks from '@/components/WelcomeSectionLinks.vue';
import WelcomeSectionText from '@/components/WelcomeSectionText.vue';
import WelcomeSectionNavigation from '@/components/WelcomeSectionNavigation.vue';

export default Vue.extend({
  name: 'WelcomeSection',
  components: {
    WelcomeSectionLinks,
    WelcomeSectionText,
    WelcomeSectionNavigation,

  },
});
</script>

<style lang="scss" scoped>
.welcome-section{
  @apply w-full h-screen flex justify-between items-center px-5;
}
</style>
