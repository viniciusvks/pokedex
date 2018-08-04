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

    	created() {
		    this.fetchPokemonData(1);
        },

        components: {
            appPokemon: Pokemon
        },

        methods: {

    		fetchPokemonData(id){

			    let pokemon = this.pokemons.find(pokemon => {
				    return pokemon.number === id;
			    });

			    console.log(JSON.stringify(pokemon,null,4));
            }

        },

        data() {
            return {
                pokemons: this.$store.getters.pokemonList
            }
        }

    }
</script>
