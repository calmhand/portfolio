<template>
  <div class="app-grid" id="app-grid">
    <AnimatedHeader/>
    <LinkBar/>
    <AboutContent/>
    <ProjectContent/>
    <AudioContent/>
    <SendEmail/>
  </div>
  <AppFooter/>
</template>

<script>
import AnimatedHeader from './components/AnimatedHeader.vue'
import LinkBar from './components/LinkBar.vue'
import AboutContent from './components/AboutContent.vue'
import ProjectContent from './components/ProjectContent.vue'
import AudioContent from './components/AudioContent.vue'
import SendEmail from './components/SendEmail.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AnimatedHeader,
    LinkBar,
    AboutContent,
    ProjectContent,
    AudioContent,
    SendEmail,
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
    height: calc(100% - 28px);
  }

  * {
    margin: 0;
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
  }

  .app-grid {
    position:relative;
    top: 20%;
  }

</style>
