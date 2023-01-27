<template>
    <div class="projects_modal" id="projects-modal">
        <div class="project-section-container" id="project-section-container">
            <div id="proj-title-container">
                <h1 id="proj-title">Projects</h1>
                <br/>
                <a style="--link-color: red" id="close-contact-modal" @click="closeProjectModal()">close</a>
                <br/>
                <br/>
                <span>(click image for details)</span>
            </div>
            <div id="proj-imgs-container">
                <img id="proj-img" alt="calc-app-img" src="../assets/project-recordings/calc-sc.png" @click="openModal(`calc-modal`)"/>
                <img id="proj-img" alt="weather-app-img" src="../assets/project-recordings/weather-sc.png" @click="openModal(`weather-modal`)"/>
                <img id="proj-img" alt="portfolio-img" src="../assets/project-recordings/portfolio-sc.png" @click="openModal(`portfolio-modal`)"/>
                <img id="proj-img" alt="theatre-img" src="../assets/project-recordings/theatre-sc.png" @click="openModal(`theatre-modal`)"/>
                <ProjectModal id="calc-modal" 
                    :proj="`calc-modal`" 
                    :name="`Calculator`" 
                    :about="`Compute basic mathematical functions.`"
                    :description="`Created in the summer of 2022, this app was made to assist in a personal goal of mine to practice Javascript and learn a new framework, VueJs. `"
                    :techs="`[Vue, Js, HTML, CSS]`"
                    :link="calc_link"
                    :git_link="calc_repo"
                />
                <ProjectModal id="weather-modal" 
                    :proj="`weather-modal`" 
                    :name="`Weather`"
                    :about="`Display real-time forecasts in your area.`"
                    :description="`Created in the summer of 2022, I started this project with 3 goals in mind. Learn Javascript's Fetch/Async functions, learn what JSON is and how to access/modify it with an external API, and to continue to practice Javascript and VueJs.`"
                    :techs="`[Vue, Js, HTML, CSS, WeatherApi.com]`"
                    :link="weather_link"
                    :git_link="weather_repo"
                />
                <ProjectModal id="portfolio-modal" 
                    :proj="`portfolio-modal`" 
                    :name="`Portfolio`" 
                    :about="`My personal portfolio site.`"
                    :description="`Created in the summer of 2022, this site contains my completed/open projects and information about my programming career. This was the last of the 3 websites I planned to make for Summer 2022.`"
                    :techs="`[VueJS, WebGL, HTML, CSS]`"
                    :link="portfolio_link"
                    :git_link="portfolio_repo"
                />
                
                <ProjectModal id="theatre-modal"
                    :proj="`theatre-modal`"
                    :name="`Cinema e-Booking System`"
                    :about="`A mock theatre website created for my software development class.`"
                    :description="`Creating during the Fall 2022 Semester at UGA for my Software Development class, this website simulates common theatre/movie booking websites. It features user registration, an admin console, authentification, and more.`"
                    :techs="`[VueJS, Bootstrap, mySQL, Spring Boot, MovieDB API]`"
                    :link="theatre_link"
                    :git_link="theatre_repo"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import ProjectModal from './ProjectModal.vue';
    export default {
        name: `ProjectContent`,
        components: {ProjectModal},
        data() {
            return {
                calc_link: "https://calmhand.github.io/calc-app/",
                calc_repo: "https://github.com/calmhand/calc-app",
                weather_link: "https://calmhand.github.io/weather-app/",
                weather_repo: "https://github.com/calmhand/weather-app",
                portfolio_link: "https://calmhand.github.io/portfolio/",
                portfolio_repo: "https://github.com/calmhand/portfolio",
                theatre_link: "https://imgur.com/a/aQOmACz",
                theatre_repo: "https://github.com/calmhand/SE4050-project"
            }
        },
        methods: {
            openModal(proj) {
                document.getElementById(proj).style.opacity = 1
                document.getElementById(proj).style.pointerEvents = `auto`
                document.body.style.overflow = `hidden`
            },
            closeProjectModal() {
                document.getElementById(`projects-modal`).style.opacity = 0
                document.getElementById(`projects-modal`).style.pointerEvents = `none`
                document.getElementById(`app-footer`).style.opacity = 1
                document.body.style.overflow = `auto`
            }
        },
    }
</script>

<style scoped>

    .projects_modal {
        pointer-events: none;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(117, 194, 105);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(100vh - 28px);
        z-index: 999;
        transition: opacity 0.8s ease-in-out;
    }

    .project-section-container {
        max-height: 100vh;
        height: 100%;
        overflow-y: auto;
        color: black;
    }

    #proj-title {
        margin: 20px auto 0 0;
    }

    #proj-img {
        display: inline;
        border: solid 1px black;
        margin: 10px;
        max-width: 100%;
        width: 300px;
        height: 150px;
        transition: opacity 0.3s ease-out;
    }

    #proj-img:hover {
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.2s ease-in;
    }

    #proj-link, #proj-link:visited, #proj-link:not(:visited) {
        text-decoration: none;
        padding: 10px 20px;
        color: black;
        font-size: 20px;
    }

    #close-contact-modal {
        cursor: pointer;
        padding: 0 10px;
        margin: 20px auto;
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