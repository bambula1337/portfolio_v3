<template>
  <div class="home">
    <WelcomeSection/>
    <WelcomeSectionText/>
    <WelcomeSectionNavigation/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeSection from '@/components/WelcomeSection.vue';
import WelcomeSectionText from '@/components/WelcomeSectionText.vue';
import WelcomeSectionNavigation from '@/components/WelcomeSectionNavigation.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    WelcomeSection,
    WelcomeSectionText,
    WelcomeSectionNavigation,
  },
});
</script>

<style lang="scss">
.home{
  @apply h-screen flex justify-between items-center px-5;
}
</style>
