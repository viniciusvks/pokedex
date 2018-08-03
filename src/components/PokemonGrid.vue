<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="card-deck">
                <app-pokemon v-for="pokemon in pokemons" :pokemon="pokemon"></app-pokemon>
            </div>
        </div>
    </div>
</template>

<script>

    import Pokemon from './Pokemon.vue';

    export default {

        components: {
            appPokemon: Pokemon
        },

        data() {
            return {
                pokemons: this.$store.getters.pokemonList
            }
        }

    }
</script>
