<template>
    <div class="jumbotron jumbotron-fluid sticky-top p-3">
        <h6 class=" display-4">
            <router-link :to="{ name: 'home' }"> Pokedex </router-link>
        </h6>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    .jumbotron {
        background-color: #EF2835;
        color: #ebebeb;

    }

    a {
        text-decoration: none;
        color: inherit;
    }

</style>