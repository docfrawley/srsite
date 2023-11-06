<template>
    <div class="was-sent">
        <form @submit.prevent="changeName">
            <label for="text">New Display Name:</label>
            <input type="text" name="Display Name" v-model="newName" required>

            <button class="log-button">submit</button>
        </form>
        <p v-if="nameError">please enter a valid display name</p>
    </div>
    <div class="something">
        <button class="log-button" @click="cancel">Cancel</button>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup(props, context) {
        const newName = ref('')
        const nameError = ref(false)

        const cancel = () => {
            context.emit('cancel')
        }

        const changeName = () => {
            if (newName.value.trim() === '') {
                nameError.value = true
                return
            }
            else {
                context.emit('submit', newName.value.trim())
            }
        }
        return { newName, nameError, changeName, cancel }
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