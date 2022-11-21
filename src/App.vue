<template>
  <div id="app">
    <div id="content">
      <main id="main">
        <router-view ref="view"/>
      </main>
      <TheFooter />
    </div>
    <div id="glow"></div>
  </div>
</template>

<script lang="ts">
// TS support
import Vue from 'vue';
// Tailwind styles
import '@/assets/styles/tailwind/tailwind.scss';
// Components
import TheFooter from '@/components/TheFooter.vue';
// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// eslint-disable-next-line import/extensions
import { ScrollSmoother } from '@/assets/gsap/ScrollSmoother.js';
// eslint-disable-next-line import/extensions
import { SplitText } from '@/assets/gsap/SplitText.js';

export default Vue.extend({
  name: 'AppComponent',
  components: {
    TheFooter,
  },
  methods: {
    gsapSetup() {
      // Registeting Plugins
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
      // Creating Smooth Scroll
      const smoother = ScrollSmoother.create({
        wrapper: '#app',
        content: '#content',
        smooth: 2,
        effects: true,
      });
      const gsapLagSetup = this.$refs.view?.gsapLagSetup;
      if (gsapLagSetup) {
        gsapLagSetup(smoother);
      }
      // Selecting Targets for Appearing animation
      const targets = {
        textChars: this.$el.querySelectorAll('[data-appearing-text-chars]'),
        textWords: this.$el.querySelectorAll('[data-appearing-text-words]'),
        textScale: this.$el.querySelectorAll('[data-appearing-text-scale]'),
        glow: this.$el.querySelector('#glow'),
      };
      // Creating Appearing Animation
      targets.textChars.forEach((text) => {
        const splitted = new SplitText(text, { type: 'chars' });
        gsap.from(splitted.chars, {
          scrollTrigger: {
            trigger: text,
          },
          opacity: 0.3,
          duration: 0.2,
          stagger: 0.1,
          onComplete() {
            splitted.revert();
          },
        });
      });
      targets.textWords.forEach((text) => {
        const splitted = new SplitText(text, { type: 'words' });
        gsap.from(splitted.words, {
          scrollTrigger: {
            trigger: text,
          },
          opacity: 0,
          y: 50,
          duration: 0.3,
          stagger: 0.2,
          onComplete() {
            splitted.revert();
          },
        });
      });
      targets.textScale.forEach((text) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
          },
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
        });
      });
      // Creating Glow Animation
      gsap.to(targets.glow, {
        scrollTrigger: {
          start: '-5% -5%',
          end: '10%, 0%',
          toggleActions: 'play reverse play none',
        },
        opacity: 1,
        duration: 1,
      });
    },
  },
  mounted() {
    this.gsapSetup();
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  & #glow{
    @apply w-full h-full absolute bottom-0 left-0 bg-gradient-to-b from-project-background to-project-first -z-10 opacity-0;
    background: linear-gradient(180deg, #16161A 55%, #3D2C73 120%);
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
