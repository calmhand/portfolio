<template>
    <div id="about-modal">
        <div class="about-section" id="about-section">
            <div id="about-content">
                <h1 id="about-block">About Me</h1>
                <blockquote id="about-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ratione harum minus! Cum unde est, nulla similique eveniet veritatis minus animi ea aperiam, facilis nemo pariatur accusamus ex fugit explicabo!
                </blockquote>
            </div>
            <TechImages/>
            <div id="studies-section">
                <img id="school-logo" alt="uga-logo" src="../assets/uga_logo.png"/>
                <h4 style="text-decoration: underline;">Fall 2022 Coursework</h4>
                <div id="studies-content">
                    <h5>CSCI 4050 - Software Engineering</h5>
                    <h5>SPAN 2001 - Spanish III</h5>
                    <h5>NMIX 4020 - Advanced Web Development</h5>
                    <h5>STAT 2000 - Intro to Statistics</h5>
                </div>
            </div>
            <div id="interests-section">
                <h1 style="padding: 10px;">Interests</h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate eaque similique ex harum tempore, molestias optio minus nam nesciunt. Asperiores sequi vel consequatur rem aspernatur iusto ex aperiam dolore?
                    </p>
                    <br/>
                    <a style="--link-color: red" id="close-contact-modal" @click="closeAboutModal()">close</a>
                    <br/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TechImages from './TechImages.vue'
    export default {
        name: `AboutContent`,
        components: {TechImages},
        methods: {
            closeAboutModal() {
                document.getElementById(`about-modal`).style.opacity = 0
                document.getElementById(`about-modal`).style.pointerEvents = `none`
                document.getElementById(`app-footer`).style.opacity = 1
                document.body.style.overflow = `auto`    
            }
        }
    }
</script>

<style scoped>

    #about-modal {
        pointer-events: none;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(80, 80, 255);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(100vh - 28px);
        z-index: 999;
        transition: opacity 0.8s ease-in-out;
    }

    .about-section {
        max-height: 100vh;
        height: 100%;
        overflow-y: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        color: white;
        background-color: rgb(80, 80, 255);
    }

    #about-block {
        margin: 20px auto;
        grid-column: 1/5;
        font-size: 30px;
    }

    #about-content {
        grid-column: 1/5;
    }

    #about-text {
        font-size: 15px;
        padding: 0 5px;
    }

    #studies-section {
        grid-column: 1/5;
    }

    #school-logo {
        width: 200px;
        height: 75px;
        padding-top: 20px;
        justify-content: center;
    }

    #studies-content {
        grid-column: 1/5;
        padding: 15px;
        margin: 0 auto;
        
    }

    h5 {
        font-size: 15px;
    }

    #interests-section {
        grid-column: 1/5;
        margin: 20px auto;
    }

    p {
        font-size: 15px;
        padding: 0 5px;
    }

    #close-contact-modal {
        /* grid-column: 1/5; */
        cursor: pointer;
        padding: 0 10px;
        border: solid 1px red;
        color: red;
        font-weight: 700;
    }

    @media (hover:hover) {
        #close-contact-modal:hover {
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
</style>