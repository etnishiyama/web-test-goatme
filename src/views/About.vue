<template>
    <div class="about">
        <h1>Goat me software development test</h1>
        <br>
        <h4>Author: Everton Takashi Nishiyama</h4>
        <h4>LinkedIn: <a href="https://linkedin.com/in/etnishiyama">https://linkedin.com/in/etnishiyama</a></h4>
        <h4>Github: <a href="https://github.com/etnishiyama">https://github.com/etnishiyama</a></h4>
        <br>
        <button @click="returnToMainPage" class="btn btn-secondary" type="button">Back</button>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            returnToMainPage() {
                this.$router.push('main');
            }
        }
    }
</script>