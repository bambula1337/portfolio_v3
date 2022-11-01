<template>
  <div class="contact-section__section">
    <ContactSectionText />
    <ContactSectionForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactSectionText from '@/components/ContactSectionText.vue';
import ContactSectionForm from '@/components/ContactSectionForm.vue';

export default Vue.extend({
  name: 'ContactSection',
  components: {
    ContactSectionText,
    ContactSectionForm,
  },
});
</script>

<style lang="scss" scoped>
.contact-section__section {
  @apply w-full flex justify-between items-center px-28;
}
</style>
