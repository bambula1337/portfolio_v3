<template>
  <section class="contact-section__section">
    <ContactSectionText />
    <ContactSectionForm />
  </section>
</template>

<script lang="ts">
// TS Support
import Vue from 'vue';
// Components
import ContactSectionText from '@/components/ContactSectionText.vue';
import ContactSectionForm from '@/components/ContactSectionForm.vue';
// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default Vue.extend({
  name: 'ContactSection',
  components: {
    ContactSectionText,
    ContactSectionForm,
  },
  methods: {
    gsapSetup() {
      // Registering Plugins
      gsap.registerPlugin(ScrollTrigger);
      // Creating Timeline
      const tl = gsap.timeline();
      // Selecting Targets
      const targets = {
        section: this.$el,
        text: this.$el.querySelector('.contact-section__text'),
        form: this.$el.querySelector('.contact-section__form'),
      };
      // Creating Animations
      tl.from(targets.text, {
        scrollTrigger: {
          trigger: targets.section,
          start: 'top 40%',
          end: '+=200',
          scrub: 1,
        },
        y: 200,
        opacity: 0,
      });
      tl.from(targets.form, {
        scrollTrigger: {
          trigger: targets.form,
          start: 'top 35%',
          end: '+=200',
          scrub: 1,
          pin: targets.section,
          pinType: 'transform',
          pinSpacing: true,
        },
        y: 200,
        opacity: 0,
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
.contact-section__section {
  @apply w-full flex justify-between items-center px-28;
}
</style>
