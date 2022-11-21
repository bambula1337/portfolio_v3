<template>
  <div id="home-view">
    <WelcomeSection class="section" id="welcome" ref="welcome" />
    <AboutSection class="section" id="about" ref="about"/>
    <StagesSection class="section" id="stages" ref="stages"/>
    <KnowledgeSection class="section" id="knowledge" ref="knowledge"/>
    <ContactSection class="section" id="contact" ref="contact"/>
  </div>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Sections
import WelcomeSection from '@/components/WelcomeSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import StagesSection from '@/components/StagesSection.vue';
import KnowledgeSection from '@/components/KnowledgeSection.vue';
import ContactSection from '@/components/ContactSection.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    WelcomeSection,
    AboutSection,
    StagesSection,
    KnowledgeSection,
    ContactSection,
  },
  methods: {
    gsapLagSetup(smoother: {effects: any}) {
      // Selecting Targets for Lag Animation
      const targets = [
        {
          name: 'Welcome-Section-Links',
          target: this.$refs.welcome?.$el.querySelector('.welcome-section__links'),
          lag: 0.5,
        },
        {
          name: 'Weclome-Section-Text',
          target: this.$refs.welcome?.$el.querySelector('.welcome-section__text'),
          lag: 0.1,
        },
        {
          name: 'Welcome-Section-Navigation',
          target: this.$refs.welcome?.$el.querySelector('.welcome-section__navigation'),
          lag: 0.5,
        },
        {
          name: 'Knowledge-Section-Knowledge',
          target: this.$refs.knowledge?.$el.querySelector('.knowledge-main'),
          lag: 0.1,
        },
        {
          name: 'Knowledge-Section-Text',
          target: this.$refs.knowledge?.$el.querySelector('.knowledge-section__text'),
          lag: 0.2,
        },
      ];
      // Creating Lag Animation
      targets.forEach((target) => {
        smoother?.effects(target.target, { lag: target.lag });
      });
    },
  },
});
</script>

<style lang="scss">
#home-view {
  @apply flex flex-col overflow-x-hidden pb-100;

  & #welcome {
    @apply mb-72;
  }
  & #about {
    @apply mb-80;
  }

  & #stages{
    @apply mb-100;
  }
  & #knowledge{
    @apply pt-30 mb-100;
  }
}
</style>
