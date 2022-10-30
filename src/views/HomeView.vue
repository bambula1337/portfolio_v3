<template>
  <div class="home">
    <WelcomeSection class="welcome-section" />
    <AboutSection class="about-section" />
    <StagesSection class="stages-section" />
    <KnowledgeSection class="knowledge-section" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// Sections
import WelcomeSection from '@/components/WelcomeSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import StagesSection from '@/components/StagesSection.vue';
import KnowledgeSection from '@/components/KnowledgeSection.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    WelcomeSection,
    AboutSection,
    StagesSection,
    KnowledgeSection,
  },
});
</script>

<style lang="scss">
.home {
  @apply flex flex-col overflow-x-hidden pb-220;

  & .welcome-section {
    @apply mb-72;
  }
  & .about-section {
    @apply mb-80;
  }

  & .stage-section{
    @apply mb-120;
  }
}
</style>
