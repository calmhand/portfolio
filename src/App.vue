<template>
  <div class="app-grid" id="app-grid">
    <AnimatedHeader/>
    <LinkBar/>
    <AboutContent/>
    <ProjectContent/>
    <!-- <AudioContent /> -->
    <!-- <SendEmail/> -->
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
    // eslint-disable-next-line
    AudioContent,
    // eslint-disable-next-line
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
  }

  * {
    margin: 0;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
  }

  .app-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
  }

  /* laptop/desktop */
  @media only screen and (min-width: 992px) {
    .app-grid {
      overflow: hidden;
      position: relative;
      top: 20%; 
    }
  }


  /* mobile portrait */
  @media only screen and (max-width: 600px) {
    .app-grid {
      overflow: hidden;
      position: relative;
      top: 20%; 
    }
  }
  
  /* mobile landscape */
  @media only screen and (max-width: 844px) and (orientation: landscape) {
    .app-grid {
      position: relative;
      bottom: 8%; 
    }
  }

</style>
