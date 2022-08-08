<template>
    <div class="about-section" id="about-section">
        <div id="about-block-container"><p id="about-block">About Me</p></div>
        <div id="about-content">
                <p id="about-text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
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
            INTERESTS
        </div>
    </div>
</template>

<script>
    import TechImages from './TechImages.vue'
    export default {
        name: `AboutContent`,
        components: {TechImages},
    }
</script>

<style scoped>
    .about-section {
        position: relative;
        display: grid;
        grid-template-columns: 30% 70%;
        color: black;
        border-bottom: solid 1px black;
        border-top: solid 1px black;
    }

    #about-block-container {
        /* background-color: green; */
        height: 300px
    }

    #about-block {
        padding-top: 130px;
        font-size: 30px;

    }

    /* #about-content {
        background-color: lightgreen;
    } */

    #about-text {
        padding: 15px;
        font-size: 25.5px;
    }

    #studies-section {
        grid-column: 1/2;
        border-right: solid 1px black;
    }

    #school-logo {
        width: 200px;
        height: 75px;
        padding-top: 27px;
        justify-content: center;
    }

    #studies-content {
        grid-column: 2/5;
        text-align: left;
        padding: 15px;
    }

    h5 {
        font-size: 18px;
    }
</style>