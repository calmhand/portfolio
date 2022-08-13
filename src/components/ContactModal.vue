<template>
    <a style="--link-color: black" id="contact-modal" @click="modalControl(`open`)">socials</a>
    <div class="contact-modal-container" id="contact_modal_container">
        <div class="contact-modal-content">
            <h1>socials</h1>
            <br/>
            <p>
                <a id="social-link" href="https://www.github.com/calmhand">Github</a> 
            </p>
            <br/>
            <p>
                <a id="social-link" href="https://linktr.ee/calmhand">Music</a>
            </p>
            <br/>
            <p>
                <a id="social-link" href="https://www.linkedin.com/in/johnny-goulbourne-052667225/">LinkedIn</a>
            </p>
            <br/>
            <a style="--link-color: red" id="close-contact-modal" @click="modalControl(`close`)">close</a>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            }
        },
        components: {
        },
        methods: {
            modalControl(option) {
                if (option === `open`) {
                    document.getElementById(`contact_modal_container`).style.opacity = 1
                    document.getElementById(`contact_modal_container`).style.pointerEvents = `auto`
                    document.getElementById(`app-footer`).style.opacity = 1
                    document.body.style.overflow = `hidden`
                } else if (option === `close`) {
                    document.getElementById(`contact_modal_container`).style.opacity = 0
                    document.getElementById(`contact_modal_container`).style.pointerEvents = `none`
                    document.getElementById(`app-footer`).style.opacity = 1
                    document.body.style.overflow = `auto`
                }
            }
        },
    }
</script>

<style scoped>
    /* contact modal styles */
    .contact-modal-container {
        pointer-events: none;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        transition: opacity 0.8s ease-in-out;
    }

    .contact-modal-content {
        background-color: white;
        width: 250px;
        max-width: 100%;
        text-align: center;
        padding: 30px 50px;
        box-shadow: 12px 12px 0 1px rgba(0, 0, 0, 1);
    }

    .contact-modal-content h1 {
        margin: 0;
    }

    .contact-modal-content p {
        opacity: 0.8;
    }

    #social-link {
        text-decoration: none;
        font-size: large;
        opacity: 1.0;
        transition: opacity 1s ease-in-out;
    }

    #social-link:hover {
        opacity: 0.5;
    }

    #social-link:visited, #social-link:link {
        color:rgb(43, 50, 235);
    }

    #animated-links {
        font-size: 18px;
    }

    #close-contact-modal {
        cursor: pointer;
        padding: 0 10px 0 10px;
        border: solid 1px red;
        color: red;
        font-weight: 700;
    }

    /* link styles */
    #contact-modal {
        text-decoration: none;
        text-align: center;
        padding: 0 10px;
        margin: 0 10px;
        cursor: pointer;
    }

    #contact-modal:visited, #close-contact-modal:visited {
        color: black;
    }

    @media (hover:hover) {
        #contact-modal:hover, #close-contact-modal:hover {
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
    and (-webkit-min-device-pixel-ratio: 3) { 

        #animated-links {
            font-size: 14px;
        }
    }

</style>