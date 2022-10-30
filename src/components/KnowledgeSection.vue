<template>
  <div class="knowledge-section">
    <KnowledgeSectionText class="text"/>
    <KnowledgeSectionKnowledge class="knowledge"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// Components
import KnowledgeSectionText from '@/components/KnowledgeSectionText.vue';
import KnowledgeSectionKnowledge from '@/components/KnowledgeSectionKnowledge.vue';

export default Vue.extend({
  name: 'KnowledgeSection',
  components: {
    KnowledgeSectionText,
    KnowledgeSectionKnowledge,
  },
});
</script>

<style lang="scss" scoped>
.knowledge-section {
  & .text{
    @apply mb-20;
  }
}
</style>
