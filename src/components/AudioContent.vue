<template>
    <div class="audio_modal" id="audio-modal">
        <div class="audio-content-container" id="audio-content-container">
            <h1 id="audio-title">Audio</h1>
            <video autoplay defaultMuted playsinline muted id="viddy" loop src="../assets/audio-recordings/ableton_scrolling.mp4" type="video/mp4" ></video>
            <iframe
                id="spotify-embed"
                src="https://open.spotify.com/embed/album/3SoVpg1fEmEokO4qdXmd09?utm_source=generator"
                rel="prefetch"
                height="300px" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
            <p id="audio-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas enim vero necessitatibus quo? 
                Quae quia quisquam, quas ipsa dolores harum accusamus earum, atque cumque sint quam fugiat exercitationem, similique itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas enim vero necessitatibus quo? 
            </p>
            <br/>
            <a style="--link-color: red" id="close-contact-modal" @click="closeAudioModal()">close</a>
            <br/>
            <br/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AudioContent",
        methods: {
            closeAudioModal() {
                document.getElementById(`audio-modal`).style.opacity = 0
                document.getElementById(`audio-modal`).style.pointerEvents = `none`
                document.getElementById(`app-footer`).style.opacity = 1
                document.body.style.overflow = `auto`   
            }
        },
    }
</script>

<style scoped>

    .audio_modal {
        pointer-events: none;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(165, 87, 225);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(100vh - 28px);
        z-index: 999;
        transition: opacity 0.8s ease-in-out;
    }

    .audio-content-container {
        max-height: 100vh;
        height: 100%;
        overflow-y: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        color: black;
    }

    #audio-title {
        padding: 10px;
        grid-column: 1/5;
    }

    #viddy {
        grid-column: 1/2;
        margin: 0 20px;
        width: 300px;
        height: 300px;
        border: solid 5px black;
        background-color: black;
        text-align: left;
    }

    #audio-text-spotify-container {
        margin: 5px;
    }

    #audio-text {
        font-size: 18px;
        grid-column: 1/5;
        
    }

    #spotify-embed {
        grid-column: 2/5;
        width: 100vh;
        border: solid 5px black;
        margin: 0 auto;
    }

    #close-contact-modal {
        grid-column: 1/5;
        cursor: pointer;
        margin: 0 auto;
        padding: 0 10px;
        border: solid 1px red;
        height: 25px;
        color: red;
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
            background-color: transparent;
        }
        99% {
            background-color: transparent;
        }
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

        .audio-content-container {
            max-height: 100vh;
            height: 100%;
            overflow-y: auto;
            display: block;
            color: black;
        }

        #spotify-embed {
            grid-column: 2/5;
            border: solid 5px black;
            width: 300px;
            margin: 0 auto;
        }

        #audio-text {
            width: 300px;
            margin: 0 auto;
            font-size: 18px;
        }
        
    }

</style>