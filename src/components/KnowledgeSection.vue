<template>
  <div class="knowledge-section">
    <KnowledgeSectionText class="text" />
    <KnowledgeSectionKnowledge class="knowledge" />
  </div>
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
    const tl = gsap.timeline();
    tl.from('.knowledge-section__text', {
      scrollTrigger: {
        trigger: '.knowledge-section',
        toggleActions: 'restart none none none',
        start: 'top 40%',
        end: '+=200',
        scrub: 1,
      },
      opacity: 0,
      y: 40,
    });
    tl.from('.knowledge-section__knowledge', {
      scrollTrigger: {
        trigger: '.knowledge-section__knowledge',
        toggleActions: 'restart none none none',
        start: 'top 50%',
        end: '+=50',
        pin: '.knowledge-section',
        pinType: 'transform',
        pinSpacing: true,
        scrub: 1,
      },
      opacity: 0,
      y: 40,
    });
    tl.from('.knowledge-main', {
      scrollTrigger: {
        trigger: '.knowledge-section__knowledge',
        toggleActions: 'restart none none none',
        start: 'top 40%',
        end: '+=200',
        pin: '.knowledge-section',
        pinType: 'transform',
        pinSpacing: true,
        id: 'xx',
        scrub: 1,
      },
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
