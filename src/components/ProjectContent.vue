<template>
    <div class="project-section-container" id="project-section-container">
        <div id="proj-title-container">
            <h1 id="proj-title">Projects</h1>
            <span>(click image for details)</span>
        </div>
        <div id="proj-imgs-container">
            <img id="proj-img" alt="calc-app-img" src="../assets/project-recordings/calc-sc.png" @click="openModal(`calc-modal`)"/>
            <img id="proj-img" alt="weather-app-img" src="../assets/project-recordings/weather-sc.png" @click="openModal(`weather-modal`)"/>
            <img id="proj-img" alt="portfolio-img" src="../assets/project-recordings/portfolio-sc.png" @click="openModal(`portfolio-modal`)"/>
            <ProjectModal id="calc-modal" 
                :proj="`calc-modal`" 
                :name="`Calculator`" 
                :about="`Compute basic mathematical functions.`"
                :description="`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`"
                :link="calc_link"
                :git_link="calc_repo"
            />
            <ProjectModal id="weather-modal" 
                :proj="`weather-modal`" 
                :name="`Weather`"
                :about="`Display real-time forecasts in your area.`"
                :description="`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`"
                :link="weather_link"
                :git_link="weather_repo"
            />
            <ProjectModal id="portfolio-modal" 
                :proj="`portfolio-modal`" 
                :name="`Portfolio`" 
                :about="`This personal portfolio site.`"
                :description="`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`"
                :link="portfolio_link"
                :git_link="portfolio_repo"
            />
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
                portfolio_link: "https://google.com",
                portfolio_repo: "",
            }
        },
        methods: {
            openModal(proj) {
                document.getElementById(proj).style.opacity = 1
                document.getElementById(proj).style.pointerEvents = `auto`
                document.getElementById(`app-footer`).style.opacity = 0
                document.body.style.overflow = `hidden`
            }
        },
    }
</script>

<style scoped>
    .project-section-container {
        position: relative;
        display: grid;
        grid-template-columns: 30% 70%;
        color: black;
        border-bottom: solid 1px black;
        border-top: solid 1px black;
    }

    #proj-title-container {
        grid-column: 1/5;
    }

    #proj-title {
        padding: 10px;
        /* color: white; */
    }

    #proj-imgs-container {
        grid-column: 1/5;
    }

    #proj-img {
        display: inline;
        border: solid 1px black;
        margin: 10px;
        max-width: 100%;
        width: 500px;
        height: 200px;
        transition: opacity 0.2s ease-out;
    }

    #proj-img:hover {
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.1s ease-in;
    }

    #proj-link, #proj-link:visited, #proj-link:not(:visited) {
        text-decoration: none;
        padding: 10px 20px;
        color: black;
        font-size: 20px;
    }

</style>