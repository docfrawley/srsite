<template>
    <div>
        <form @submit.prevent="changeEmail">
            <label for="Email">New Email:</label>
            <input type="email" name="Email" v-model="newEmail" required>

            <button class="log-button">submit</button>
        </form>
        <p v-if="emailError">please enter a valid email</p>
    </div>
    <div class="something">
        <button class="log-button" @click="cancel">Cancel</button>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup(props, context) {
        const newEmail = ref('')
        const emailError = ref(false)

        const cancel = () => {
            context.emit('cancel')
        }

        const changeEmail = () => {
            if (newEmail.value.trim() === '') {
                emailError.value = true
                return
            }
            else {
                context.emit('submit', newEmail.value.trim())
            }
        }
        return { newEmail, emailError, changeEmail, cancel }
    }
}
</script>

<style scoped>
input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #eee;
    margin-right: 0.75em;
    margin-left: 0.5em;
}

form {
    position: relative;
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    border: 1px solid  var(--secondary);
}

p {
    display: flex;
    margin-top: 0.5em;
    justify-content: space-around;
    color: #da0f41;
}

.something {
    display: flex;
    justify-content: space-around;
    margin-top: 1em;
}
</style>