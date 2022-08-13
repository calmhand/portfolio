<template>
    <div class="project-modal-container" id="project_modal_container">
        <div class="project-modal-content">
            <h2>{{name}}</h2>
            <h4>{{about}}</h4>
            <span id="tech-styles">{{techs}}</span>
            <p>{{description}}</p>
            <a style="--link-color: green" id="proj-site-link" v-bind:href="link">enter</a>
            <a style="--link-color: black" id="proj-site-repo" v-bind:href="git_link">repo</a>
            <a style="--link-color: red" id="close-proj-modal" @click="modalControl(proj)">close</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectModal",
        props: {
            proj: String,
            name: String,
            about: String,
            description: String,
            techs: String,
            link: String,
            git_link: String
        },
        methods: {
            modalControl(str) {
                document.getElementById(str).style.opacity = 0
                document.getElementById(str).style.pointerEvents = `none`
                document.body.style.overflow = `auto`
            }
        },
    }
</script>

<style>

    .project-modal-container {
        pointer-events: none;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        transition: opacity 0.5s ease-in-out;
    }

    .project-modal-content {
        background-color: white;
        height: auto;
        width: 450px;
        max-width: 100%;
        text-align: center;
        padding: 25px 45px;
        box-shadow: 12px 12px 0 1px rgba(0, 0, 0, 1);
    }

    .project-modal-content h1 {
        margin: 0;
    }

    .project-modal-content p {
        opacity: 0.8;
        padding: 10px;
    }

    #proj-site-link, #proj-site-repo {
        text-decoration: none;
        cursor: pointer;
        padding: 0 10px 0 10px;
        color: rgb(104, 173, 104);
        font-weight: 700;
    }

    #proj-site-repo {
        color: black;
    }

    #tech-styles {
        opacity: 0.4;
        font-size: 14px;
    }

    #close-proj-modal {
        cursor: pointer;
        padding: 0 10px 0 10px;
        color: red;
        font-weight: 700;
    }

    #close-proj-modal:visited {
        color: black;
    }

    @media (hover:hover) {
        #close-proj-modal:hover, #proj-site-link:hover, #proj-site-repo:hover {
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
        .project-modal-content {
            height: 250px;
            width: 475px;
        }

    }

</style>