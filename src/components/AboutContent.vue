<template>
    <div id="about-modal">
        <div class="about-section" id="about-section">
            <div id="about-content">
                <h1 id="about-block">About Me</h1>
                <br/>
                <a style="--link-color: red" id="close-contact-modal" @click="closeAboutModal()">close</a>
                <br/>
                <br/>
                <blockquote id="about-text">
                    I am a Computer Science student in my senior year at University of Georgia who
                    is working hard to become a great Full-Stack Programmer. 
                </blockquote>
            </div>
            <TechImages/>
            <div id="studies-section">
                <img id="school-logo" alt="uga-logo" src="../assets/uga_logo.png"/>
                <h4 style="text-decoration: underline;">Fall 2023 Coursework</h4>
                <div id="studies-content">
                    <h5>CSCI 4800 - Human-Computer Interaction</h5>
                    <h5>CSCI 3030 - Computing, Ethics, and Society</h5>
                    <h5>NMIX - New Media Capstone</h5>
                </div>
            </div>
            <div id="interests-section">
                <h1 style="padding: 10px;">Interests</h1>
                <div>
                    <p>
                        <b style="font-size: 28px;">Web Frameworks</b>, Databases, Front-End Development, <b style="font-size: 28px;">Cloud Computing</b>, 
                        Graphics Programming, <b style="font-size: 28px;">Audio Engineering</b>, Video Gaming, Cooking, 
                        <b style="font-size: 28px;">Basketball</b>, Baseball, <b style="font-size: 28px;">Fashion</b>,
                        Music Production, National Parks, Natural Science, Environmental Science, <b style="font-size: 28px;">Forestry</b>.
                    </p>
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
        padding: 0 5vw;
    }

    #about-block {
        margin: 20px auto 0 0;
        grid-column: 1/5;
        font-size: 30px;
    }

    #about-content {
        grid-column: 1/5;
    }

    #about-text {
        font-size: 25px;
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
        font-size: 20px;
    }

    #close-contact-modal {
        cursor: pointer;
        padding: 0 10px;
        border: solid 1px red;
        color: red;
        background-color: white;
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
            background-color: white;
        }
        99% {
            background-color: white;
        }
    }
</style>