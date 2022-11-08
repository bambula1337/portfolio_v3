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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default Vue.extend({
  name: 'ContactSection',
  components: {
    ContactSectionText,
    ContactSectionForm,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.from('.contact-section__text', {
      scrollTrigger: {
        trigger: '.contact-section__section',
        start: 'top 10%',
        end: '+=150',
        scrub: 1,
        pin: '.contact-section__section',
        pinType: 'transform',
        pinSpacing: true,
        // markers: true,
        id: 'text',
      },
      y: 200,
      opacity: 0,
    });
    tl.from('.contact-section__form', {
      scrollTrigger: {
        trigger: '.contact-section__form',
        start: 'top 10%',
        end: '+=150',
        scrub: 1,
        // markers: true,
        id: 'form',
        pin: '.contact-section__section',
        pinType: 'transform',
        pinSpacing: true,
      },
      y: 200,
      opacity: 0,
    });
  },
});
</script>

<style lang="scss" scoped>
.contact-section__section {
  @apply w-full flex justify-between items-center px-28;
}
</style>
