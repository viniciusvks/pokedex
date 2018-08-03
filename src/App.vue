<template>
    <div>
        <app-header></app-header>
        <div class="container">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>

    import Header from './components/Header.vue';
    import Home from './components/Home';

    export default {

        components: {
            appHeader: Header,
            appHome: Home,
        },

        data () {
            return {
            }
        }
    }
</script>

<style>

    body {
        background-color: #EDF9FE;
    }

</style>
