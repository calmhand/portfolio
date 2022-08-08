<template>
  <div class="app-grid" id="app-grid">
    <AnimatedHeader/>
    <LinkBar/>
    <!-- <span class="whitespace" id="whitespace1"></span> -->
    <AboutContent/>
    <!-- <span class="whitespace" id="whitespace2"></span> -->
    <ProjectContent/>
    <!-- <span class="whitespace" id="whitespace3"></span> -->
    <AudioContent/>
  </div>
  <AppFooter/>
</template>

<script>
import AnimatedHeader from './components/AnimatedHeader.vue'
import LinkBar from './components/LinkBar.vue'
import AboutContent from './components/AboutContent.vue'
import ProjectContent from './components/ProjectContent.vue'
import AudioContent from './components/AudioContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AnimatedHeader,
    LinkBar,
    AboutContent,
    ProjectContent,
    AudioContent,
    AppFooter
  },
  beforeUnmount() {
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

  #app {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* background: linear-gradient(180deg,
      #fff 0%,
      #fff 30%,
      rgb(186, 12, 47) 35%,
      rgb(186, 12, 47) 60%,
      rgb(50, 77, 211) 90%,
      rgb(50, 77, 211) 99%); */
    /* rgb(255, 87, 51) - cool orange/red */
    /* rgb(0, 163, 108) - jade green */
  }

  * {
    margin: 0;
    scroll-behavior: smooth;
  }

  .app-grid {
    display: grid;
  }

  .whitespace {
    margin: 30% 0 200px 0;
  }
</style>
