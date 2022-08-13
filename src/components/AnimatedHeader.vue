<template>

  <div id="gl-container">
  <!-- canvas here via javascript mounted hook-->
  </div>
  <div id="typeWriter">
    <VueWriter caret="cursor" :array="txt" :typeSpeed="100" :eraseSpeed="50">
      I am
    </VueWriter>
  </div>
  <br/>

</template>

<script>
import {setup} from "../render.js"
import VueWriter from 'vue-writer'

export default {
  name: 'AnimatedHeader',
  components: {VueWriter},
  data() {
    return {
      cnv: document.createElement('canvas'),
      txt: ["johnny.", "calmhand.", "a cs student.", "a programmer.", "a designer.", "a audio engineer."]
    }
  },
  methods: {
    setupGL() {
        var canvas = document.getElementById("gl-canvas") // selects element in DOM
        var gl = canvas.getContext("webgl") // initializes Webgl

        if (!gl) {
            throw new Error(`gl not init`)
        }

        window.onload = setup(gl, this.canvas)
    }, 
  },
  beforeMount() {
    this.cnv.id = "gl-canvas"
    this.cnv.height = 250
    this.cnv.width = 250
  },
  mounted() {
    document.getElementById('gl-container').appendChild(this.cnv)
    this.setupGL()
  },
}
</script>

<style>

  #gl-container {
    margin: auto 0;
  }

  #typeWriter {
    margin: 0 auto;
    text-align: center;
    width: 250px;
  }

  .is-typed span.cursor {
    display: inline-block;
    width: 3px;
    background-color: black;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    49% {
      background-color: black;
    }
    50% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
  }

</style>
