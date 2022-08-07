<template>
    <div class="about-section" id="about-section">
        <div id="about-block-container"><p id="about-block">About Me</p></div>
        <div id="about-content">
                <p id="about-text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: `AboutContent`,

    }
</script>

<style scoped>
    .about-section {
        position: relative;
        display: grid;
        grid-template-columns: 30% 70%;
    }

    #about-block-container {
        background-color: green;
        height: 300px
    }

    #about-block {
        color: white;
        padding-top: 120px;
        font-size: 30px;

    }

    #about-content {
        background-color: lightgreen;
    }

    #about-text {
        font-size: 25px;
        padding: 15px;
    }
</style>