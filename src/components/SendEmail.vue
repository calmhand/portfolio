<template>
    <div class="contact-section-container" id="email-section-container">
        <div class="contact-form-container">
            <a style="--link-color: red" id="close-contact-modal" @click="closeEmailModal()">close</a>
            <br/>
            <h1 id="message-title">Message Me!</h1>
            <form
            id="contact-form"
            action="https://formspree.io/f/maykyywp"
            method="POST"
            >
                <label for="pronoun-select">
                    <select id="pronoun-selector" name="pronoun-select" required>
                        <option>------ Please select your pronouns ------</option>
                        <option value="He/Him">He/Him</option>
                        <option value="He/They">He/They</option>
                        <option value="She/Her">She/Her</option>
                        <option value="She/They">She/They</option>
                        <option value="They/Them">They/Them</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label>
                    full name
                    <br/>
                    <input id="name-input" type="text" for="name" placeholder="first and last" required/>
                </label>
                <br/>
                <label for="email">
                    email
                    <br/>
                    <input id="email-input" type="email" name="email" placeholder="email@domain.com" required>
                </label>
                <br/>
                <label for="message">
                    message
                    <br/>
                    <textarea id="message-input" name="message" placeholder="message goes here..." required></textarea>
                </label>
                <br/>
                <button id="form-button" style="--link-color: green;" type="submit">SEND</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SendEmail",
        methods: {
            closeEmailModal() {
                document.getElementById(`email-section-container`).style.opacity = 0
                document.getElementById(`email-section-container`).style.pointerEvents = `none`
                document.getElementById(`app-footer`).style.opacity = 1
                document.body.style.overflow = `auto`    
            }
        }
    }
</script>

<style scoped>

    .contact-section-container {
        pointer-events: none;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        transition: opacity 0.8s ease-in-out;
    }

    .contact-form-container {
        padding: 15px;
        background-color: white;
        text-align: center;
        padding: 30px 50px;
        box-shadow: 12px 12px 0 1px rgba(0, 0, 0, 1);
        height: 500px;
        width: 350px;
    }

    #name-input, #email-input {
        width: 100%;
        padding: 12px;
        margin: 10px 0 10px 0;
        box-sizing: border-box;
    }

    #message-input {
        width: 100%;
        height: 100px;
        padding: 12px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: none;
    }

    #message-title {
        padding: 10px;
    }

    #form-button {
        text-decoration: none;
        text-align: center;
        padding: 0 10px 0 10px;
        cursor: pointer;
        border: solid 1px green;
        height: 30px;
        width: 100%;
    }

    #form-button:visited {
        color: green;
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 
        .contact-form-container {
        padding: 15px;
        background-color: white;
        text-align: center;
        padding: 30px 50px;
        box-shadow: 12px 12px 0 1px rgba(0, 0, 0, 1);
        height: 500px;
        width: 275px;
        }
    }

    #close-contact-modal {
        cursor: pointer;
        padding: 0 10px;
        border: solid 1px red;
        color: red;
        float: right;
        font-weight: 700;
    }

    @media (hover:hover) {
        #form-button:hover, #close-contact-modal:hover {
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

</style>