<template>
    <div class="contact-section-container">
        <h1 id="message-title">Send A Message</h1>
        <div class="contact-form-container">
            <form
            id="contact-form"
            action="https://formspree.io/f/maykyywp"
            method="POST"
            >
                <label for="pronoun-select">
                    <select id="pronoun-selector" name="pronoun-select" required>
                        <option>----------------------- Please select your pronouns -----------------------</option>
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
    }
</script>

<style scoped>

    .contact-form-container {
        width: 400px;
        text-align: left;
        margin: 0 auto;
        padding: 15px;
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
        color: green;
        padding: 0 10px 0 10px;
        cursor: pointer;
        border: solid 1px green;
        height: 30px;
        width: 100%;
    }

    #form-button:visited {
        color: green;
    }

    @media (hover:hover) {
        #form-button:hover {
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