<template>
  <div class="app-grid">
    <AnimatedHeader/>
    <LinkBar/>
    <span id="whitespace"></span>
    <AboutContent/>
  </div>
  <AppFooter/>
</template>

<script>
import AnimatedHeader from './components/AnimatedHeader.vue'
import LinkBar from './components/LinkBar.vue'
import AboutContent from './components/AboutContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AnimatedHeader,
    LinkBar,
    AboutContent,
    AppFooter
  },
  beforeUnmount() {
    location.assign(`localhost:8080`)
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

  .app-grid {
    display: grid;
  }

  #whitespace {
    margin: 50% 0 200px 0;
  }
</style>
