<template>
    <nav id="linkbar-container">
        <a id="nav-link" @click="openAboutSection()">about</a>
        <a id="nav-link" @click="scrollToSection(2250)">projects</a>
        <a id="nav-link" href="">music</a>
        <ContactModal/>
        <br/>
        <br/>
        <a id="nav-link" @click="openMessenger()">message me!</a>
    </nav>
</template>

<script>
    import ContactModal from './ContactModal.vue'

    export default {
        data() {
            return {
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
            openMessenger() {
                document.getElementById(`email-section-container`).style.opacity = 1
                document.getElementById(`email-section-container`).style.pointerEvents = `auto`
                document.body.style.overflow = `hidden`
            }
        },
    }
</script>

<style scoped>
    #linkbar-container {
        break-before: page;
    }

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