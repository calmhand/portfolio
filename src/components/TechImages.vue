<template>
    <div id="img-container">
        <h3>Technologies I've Worked With</h3>
        <img id="tech-imgs" alt="vue logo" src="../assets/vue_logo.png"/>
        <img id="tech-imgs" alt="javascript-logo" src="../assets/js_logo.png"/>
        <img id="tech-imgs" alt="php-logo" src="../assets/php_logo.png"/>
        <img id="tech-imgs" alt="mysql-logo" src="../assets/mysql_logo.png"/>
        <img id="tech-imgs" alt="cpp-logo" src="../assets/cpp_logo.png"/>
        <img id="tech-imgs" alt="java-logo" src="../assets/java_logo.png"/>
    </div>
</template>

<script>
    export default {
        name: `TechImages`,
    }
</script>

<style scoped>
    #img-container {
        grid-column: 1/5;
        text-align: center;
        border-top: solid 1px black;
        border-bottom: solid 1px black;
    }

    #tech-imgs {
        width: 50px;
        height: 50px;
        padding: 0 18px;
    }
</style>