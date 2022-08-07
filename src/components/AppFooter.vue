<template>
    <div>
        <footer id="app-footer"><p>{{year}} &copy; SOLAR HOME &#9788;</p></footer>
    </div>
</template>

<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                year: ""
            }
        },
        methods: {
            getCurrentYear() {
                this.year = new Date().getFullYear()
            }
        },
        mounted() {
            this.getCurrentYear()
        }
    }
</script>

<style scoped>
    p {
        margin: 0;
        padding-right: 10px;
        font-size: 20px;
    }

    #app-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: right;
        background-color: grey;
        transition: opacity 0.8s ease-in-out;
    }
</style>