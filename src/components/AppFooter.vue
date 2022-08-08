<template>
    <div>
        <footer id="app-footer">
            <a @click="toTop()" href="#app-grid" id="return-to-top">TOP &uarr;</a>
            <p id="copyright-text">{{year}} &copy; SOLAR HOME &#9788;</p>
        </footer>
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
    div {
        height: 27.5px;
    }

    #app-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: solid 1px black;
        z-index: 999;
        background-color: white;
        color: black;
        transition: opacity 0.8s ease-in-out;
    }

    #return-to-top {
        text-decoration: none;
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