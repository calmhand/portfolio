<template>
    <div class="audio-content-container" id="audio-content-container">
        <h1 id="audio-title">Audio</h1>
        <div id="audio-description">
            <img id="img-cover" src="../assets/live_logo.png" />
            <video autoplay muted id="viddy" loop src="../assets/audio-recordings/ableton_scrolling.mp4" type="video/mp4" ></video>
        </div>
        <div id="audio-text-spotify-container">
            <p id="audio-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas enim vero necessitatibus quo? 
                Quae quia quisquam, quas ipsa dolores harum accusamus earum, atque cumque sint quam fugiat exercitationem, similique itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas enim vero necessitatibus quo? 
                Quae quia quisquam, quas ipsa dolores harum accusamus earum, atque cumque sint quam fugiat exercitationem, similique itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas enim vero necessitatibus quo? 
                Quae quia quisquam, quas ipsa dolores harum accusamus earum, atque cumque sint quam fugiat exercitationem, similique itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas enim vero necessitatibus quo?
                Quae quia quisquam, quas ipsa dolores harum accusamus earum, atque cumque sint quam fugiat exercitationem, similique itaque.
            </p>
            <!-- <iframe
                src="https://open.spotify.com/embed/album/3SoVpg1fEmEokO4qdXmd09?utm_source=generator"
                rel="prefetch"
                width="100%" height="80px" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "AudioContent",
    }
</script>

<style scoped>
    .audio-content-container {
        position: relative;
        display: grid;
        color: black;
        border-bottom: solid 1px black;
        border-top: solid 1px black;
    }

    #audio-title {
        padding: 10px;
        grid-column: 1/5;
    }

    #audio-description {
        grid-column: 1/2;
        width: 300px;
        height: 300px;
        border: solid 5px black;
        background-color: black;
        margin: 5px;
    }

    #viddy {
        width: 300px;
        height: 300px;
    }

    #img-cover {
        position: absolute;
        width: 300px;
        height: 300px;
        left: 0.4%;
        opacity: 0.5;
    }

    #audio-text-spotify-container {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        margin: 5px;
    }

    #audio-text {
        font-size: 18px;
    }

</style>