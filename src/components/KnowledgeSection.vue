<template>
  <section class="knowledge-section">
    <KnowledgeSectionText class="text" />
    <KnowledgeSectionKnowledge class="knowledge" />
  </section>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Components
import KnowledgeSectionText from '@/components/KnowledgeSectionText.vue';
import KnowledgeSectionKnowledge from '@/components/KnowledgeSectionKnowledge.vue';
// Gsap
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default Vue.extend({
  name: 'KnowledgeSection',
  components: {
    KnowledgeSectionText,
    KnowledgeSectionKnowledge,
  },
  methods: {
    gsapSetup() {
      // Registering Plugins
      gsap.registerPlugin(ScrollTrigger);
      // Selecting Targets
      const targets = {
        text: this.$el.querySelector('.knowledge-section__text'),
        knowledge: this.$el.querySelector('.knowledge-section__knowledge'),
      };
      // Creating Animations
      gsap.from(targets.text, {
        scrollTrigger: {
          trigger: targets.text,
          toggleActions: 'restart none none none',
          start: 'top 110%',
        },
        duration: 1,
        opacity: 0,
        y: 40,
      });
      gsap.from(targets.knowledge, {
        scrollTrigger: {
          trigger: targets.knowledge,
          toggleActions: 'play none none none',
          start: 'top 110%',
        },
        duration: 1.5,
        opacity: 0,
        y: 40,
      });
    },
  },
  mounted() {
    // Setting Up Gsap Animations
    this.gsapSetup();
  },
});
</script>

<style lang="scss" scoped>
.knowledge-section {
  & .text {
    @apply mb-20;
  }
}
</style>
