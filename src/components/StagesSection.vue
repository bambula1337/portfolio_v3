<template>
  <div class="stage-section">
    <StagesSectionText/>
    <StagesSectionStages/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StagesSectionText from '@/components/StagesSectionText.vue';
import StagesSectionStages from '@/components/StagesSectionStages.vue';

export default Vue.extend({
  name: 'StagesSection',
  components: {
    StagesSectionText,
    StagesSectionStages,
  },
});
</script>

<style lang="scss" scoped>
.stage-section{
  @apply flex flex-col;
}
</style>
