<template>
    <nav id="linkbar-container">
        <a id="nav-link" style="--link-color: black" @click="openAboutSection()">about</a>
        <a id="nav-link" style="--link-color: black" @click="openProjects()">projects</a>
        <!-- <a id="nav-link" style="--link-color: black" @click="openAudio()">music</a> -->
        <ContactModal/>
        <br/>
        <br/>
        <!-- <a id="nav-link" style="color: blue;--link-color: skyblue" @click="openMessenger()">message me!</a> -->
        <a id="nav-link" style="color: forestgreen;--link-color: black" href="mailto:johnnyg@uga.edu">email</a> 
        <a id="nav-link" :href="resumeLink" style="color: forestgreen; --link-color: black" target="_blank">resume</a>

    </nav>
</template>

<script>
    import ContactModal from './ContactModal.vue'

    export default {
        data() {
            return {
                resumeLink: "https://docs.google.com/document/d/120D98UtC4b21TD2KCgEbL0M0lP9emVBv/edit?usp=sharing&ouid=104633726833746424356&rtpof=true&sd=true"
            }
        },
        components: {
            ContactModal
        },
        methods: {
            scrollToSection(num) {
                window.scrollTo(0, num)
            },
            openAboutSection() {
                document.getElementById(`about-modal`).style.opacity = 1
                document.getElementById(`about-modal`).style.pointerEvents = `auto`
                document.body.style.overflow = `hidden`
            },
            openProjects() {
                document.getElementById(`projects-modal`).style.opacity = 1
                document.getElementById(`projects-modal`).style.pointerEvents = `auto`
                document.body.style.overflow = `hidden`
            },
            openAudio() {
                document.getElementById(`audio-modal`).style.opacity = 1
                document.getElementById(`audio-modal`).style.pointerEvents = `auto`
                document.body.style.overflow = `auto`   
            },
            openMessenger() {
                // FOR MODAL
                // document.getElementById(`email-section-container`).style.opacity = 1
                // document.getElementById(`email-section-container`).style.pointerEvents = `auto`
                // document.body.style.overflow = `hidden`
            }
        },
    }
</script>

<style scoped>

    /* link styles */
    #nav-link {
        text-decoration: none;
        text-align: center;
        padding: 0 10px;
        margin: 0 10px;
        cursor: pointer;
    }

    #nav-link:visited {
        color: black;
    }

    @media screen  {
        
    }

    @media (hover:hover) {
        #nav-link:hover {
            animation: colorFade 0.9s infinite;
        }
    }

    @keyframes colorFade {
        0% {
            background-color: var(--link-color);
        }
        50% {
            background-color: transparent;
        }
        99% {
            background-color: transparent;
        }
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) { 
        #linkbar-container {
            height: 35vh
        }
    }

</style>