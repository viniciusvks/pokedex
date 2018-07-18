<template>
    <div class="container">
        <app-pokemon-grid></app-pokemon-grid>
    </div>
</template>

<script>

    import PokemonGrid from './PokemonGrid.vue';

    export default {
        components:{
            appPokemonGrid: PokemonGrid
        }
    }
</script>

