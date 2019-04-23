<template>
    <div class="messages">
        <div v-if="messageService.messages.length">

            <h2>Messages</h2>
            <button class="clear"
                    @click="messageService.clear()">clear</button>
            <div v-for="(message, i) of messageService.messages" :key="i">
                {{ message }}
            </div>

        </div>
    </div>
    
</template>

<script>
    import { MessageService } from '../message-service'

    const messageService = new MessageService;

    export default {
        name: "Messages"
        // data() {
        //     return {
        //         messages: []
        //     }
        // },
        // created() {
        //   this.messageService()
        // },
        // methods: {
        //     messageService() {
        //         return this.messages = messageService.messages;
        //     }
        // }
    }
</script>

<style scoped>

    /* MessagesComponent's private CSS styles */
    h2 {
        color: red;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
    }
    body {
        margin: 2em;
    }
    body, input[text], button {
        color: crimson;
        font-family: Cambria, Georgia;
    }

    button.clear {
        font-family: Arial;
        background-color: #eee;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        cursor: hand;
    }
    button:hover {
        background-color: #cfd8dc;
    }
    button:disabled {
        background-color: #eee;
        color: #aaa;
        cursor: auto;
    }
    button.clear {
        color: #888;
        margin-bottom: 12px;
    }

</style>