<template>
    <div>
        <!--<div class="row">-->
            <app-header></app-header>
        <!--</div>-->
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <app-home></app-home>
                </div>
            </div>
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
