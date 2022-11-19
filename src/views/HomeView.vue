<template>
  <div class="home">
    <WelcomeSection class="welcome-section section" id="welcome" ref="welcome" />
    <AboutSection class="about-section section" id="about" ref="about"/>
    <StagesSection class="stages-section section" id="stages" ref="stages"/>
    <KnowledgeSection class="knowledge-section section" id="knowledge" ref="knowledge"/>
    <ContactSection class="contact-section section" id="contact" ref="contact"/>
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
          target: this.$refs.welcome?.$el.querySelector('.welcome-section-links'),
          lag: 0.5,
        },
        {
          name: 'Weclome-Section-Text',
          target: this.$refs.welcome?.$el.querySelector('.welcome-section-text'),
          lag: 0.1,
        },
        {
          name: 'Welcome-Section-Navigation',
          target: this.$refs.welcome?.$el.querySelector('.welcome-section-navigation'),
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
.home {
  @apply flex flex-col overflow-x-hidden pb-100;

  & .welcome-section {
    @apply mb-72;
  }
  & .about-section {
    @apply mb-80;
  }

  & .stage-section{
    @apply mb-100;
  }
  & .knowledge-section{
    @apply pt-30 mb-100;
  }
}
</style>
