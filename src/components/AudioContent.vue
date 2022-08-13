<template>
    <div class="audio_modal" id="audio-modal">
        <div class="audio-content-container" id="audio-content-container">
            <div style="grid-column: 1/5; margin: 20px auto;">
                <h1 id="audio-title">Music</h1>
                <br/>
                <a style="--link-color: red" id="close-contact-modal" @click="closeAudioModal()">close</a>
                <br/>
                <br/>
                <p id="audio-text">
                    I produce/mix all of my own music with Ableton Live 10.
                    <br/>
                    <br/>
                    My setup consists of Yamaha HS8 Monitors, a Kontakt Komplete Kontrol Midi Keyboard, an Ableton Push 1,
                    and a Shure SM58 Microphone.
                    <br/>
                    <br/>
                    My favorite styles of music is Electionic/Dance, Experimental Hip-Hop, and Drum & Bass.
                </p>
                <div style="grid-column: 1/5; margin: 10px auto;">
                    <video autoplay defaultMuted playsinline muted id="viddy" loop src="../assets/audio-recordings/ableton_scrolling.mp4" type="video/mp4" ></video>
                    <iframe
                        id="spotify-embed"
                        src="https://open.spotify.com/embed/album/3SoVpg1fEmEokO4qdXmd09?utm_source=generator"
                        rel="prefetch"
                        height="300px" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                    </iframe>
                </div>
                <p>
                    I have some music live on streaming services as seen above.
                    <br/>
                    <b>I primarily make Experimental Electronic/Hip-Hop beats.</b>
                    <br/>
                    <b>
                        Follow my <a id="social-link" href="https://open.spotify.com/artist/2ret4fK3Igy4SnBQYLEmup?si=16W6Z2qLRzmkDrSUquCX0g">Spotify</a>, 
                        <a id="social-link" href="https://calmhand.bandcamp.com/releases">Bandcamp</a>, 
                        and <a id="social-link" href="https://soundcloud.com/calmhand">Soundcloud</a>
                    </b>
                    <br/>
                    <br/>
                    <b>
                        If you have any questions or wish to collab, either email me from the home page of this site
                        or DM me on my <a id="social-link" href="https://www.instagram.com/calmhand_______/">Instagram!</a>
                    </b>
                </p>
            </div>
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
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(100vh - 28px);
        z-index: 999;
        transition: opacity 0.8s ease-in-out;
    }

    .audio-content-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr); 
        max-height: 100vh;
        height: 100%;
        overflow-y: auto;
        color: beige;
    }

    #audio-title {
        grid-column: 1/5;
    }

    #viddy {
        grid-column: 1/2;
        margin: 0 5px;
        width: 300px;
        height: 300px;
        border: solid 5px black;
        background-color: black;
        text-align: left;
    }


    #audio-text, p {
        font-size: 15px;
        grid-column: 1/5;
        padding: 25px;
        
    }

    #spotify-embed {
        grid-column: 2/5;
        width: 100vh;
        border: solid 5px black;
        margin: 0 auto;
    }

    #social-link, #social-link:hover, #social-link:visited {
        text-decoration: none;
        color: forestgreen;
    }

    #close-contact-modal {
        grid-column: 1/5;
        cursor: pointer;
        margin: 0 auto;
        padding: 0 10px;
        border: solid 1px red;
        height: 25px;
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

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

        .audio-content-container {
            max-height: 100vh;
            height: 100%;
            overflow-y: auto;
            display: block;
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