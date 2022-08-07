<template>
    <div id="linkbar-container">
        <a id="nav-link" href="#about-section">about</a>
        <a id="nav-link" href="">projects</a>
        <a id="nav-link" href="">audio</a>
        <ContactModal/>
    </div>
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
        padding: 0 10px 0 10px;
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