<template>
  <section class="knowledge-section">
    <KnowledgeSectionText class="text" />
    <KnowledgeSectionKnowledge class="knowledge" />
  </section>
</template>

<script lang="ts">
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
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.knowledge-section__text', {
      scrollTrigger: {
        trigger: '.knowledge-section__text',
        toggleActions: 'restart none none none',
        start: 'top 110%',
      },
      duration: 1,
      opacity: 0,
      y: 40,
    });
    gsap.from('.knowledge-section__knowledge', {
      scrollTrigger: {
        trigger: '.knowledge-section__knowledge',
        toggleActions: 'restart none none none',
        start: 'top 110%',
      },
      duration: 1.5,
      opacity: 0,
      y: 40,
    });
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
