<template>
  <div class="about-section">
    <AboutSectionText ref="text"/>
    <AboutSectionImage ref="image"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AboutSectionText from '@/components/AboutSectionText.vue';
import AboutSectionImage from '@/components/AboutSectionImage.vue';

export default Vue.extend({
  name: 'AboutSection',
  components: {
    AboutSectionText,
    AboutSectionImage,
  },
});
</script>

<style lang="scss" scoped>
.about-section {
  @apply flex items-center px-32;
}
</style>
