<template>
    <div class="main-wrapper">
        <img src="../assets/goatme.png" alt="Italian Trulli">
        <br>
        <br>
        <div class="container">
            <h2>Software development test</h2>
            <br>
            <div class="list-group">
                <button @click="redirectToAboutPage" type="button"
                        class="list-group-item list-group-item-action list-group-item-dark">About
                </button>
                <button @click="redirectToPeoplePage" type="button"
                        class="list-group-item list-group-item-dark list-group-item-action">Star Wars Characters List
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            redirectToAboutPage() {
                this.$router.push('about');
            },
            redirectToPeoplePage() {
                this.$router.push('characters');
            }
        }
    }
</script>