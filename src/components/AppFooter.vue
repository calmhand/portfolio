<template>
        <footer id="app-footer">
            <!-- <a @click="toTop()" id="return-to-top">TOP &uarr;</a> -->
            <img src="../assets/gem.webp" style="width:20px; height: 27px; float:right; padding-right: 10px;"/>
            <p id="copyright-text">{{year}} &copy; SOLAR HOME </p>
        </footer>
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
            },
            scrollFunction() {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    document.getElementById(`return-to-top`).style.opacity = `1`
                } else {
                    document.getElementById(`return-to-top`).style.opacity = `0`
                }
            },
            toTop() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            },
        },
        mounted() {
            this.getCurrentYear()
            window.onscroll = (() =>  this.scrollFunction())
        }
    }
</script>

<style scoped>

    #app-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: solid 1px black;
        pointer-events: none;
        /* z-index: 999; */
        background-color: white;
        color: black;
        transition: opacity 0.8s ease-in-out;
    }

    #return-to-top {
        text-decoration: none;
        cursor: pointer;
        opacity: 0;
        margin: 0;
        padding-left: 10px;
        float:left;
        font-size: 20px;
        transition: opacity 1s ease-in-out;
    }

    #return-to-top:visited {
        color: black;
    }

    #copyright-text {
        margin: 0;
        padding-right: 10px;
        font-size: 20px;
        float:right;
    }

</style>