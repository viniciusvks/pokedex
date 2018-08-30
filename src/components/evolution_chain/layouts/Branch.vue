<template>
    <div class="col-12">
        <div class="row justify-content-center align-items-center">
            <div class="col-2 text-center p-3" >
                <router-link :to="{ name: 'pokemon-detail', params: { id: parsedChain[0].pokemon.number } }">
                    <img class="evolution-stage" :src="parsedChain[0].image">
                </router-link>
                <div class="col-12 pt-1"> {{ parsedChain[0].pokemon.name }} </div>
            </div>
            <div class="col-4 text-center p-3">
                <div class="row">
                    <template v-for="evolvedPokemon in parsedChain[1]">
                        <div class="col-12">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-3">
                                    <img class="evolution-details" :src="require('../../../assets/images/right-chevron.png')">
                                </div>
                                <div class="col-6">
                                    <router-link :to="{ name: 'pokemon-detail', params: { id: getPokemonProperty(evolvedPokemon.pokemon, 'number') }}">
                                        <img class="evolution-stage" :src="evolvedPokemon.image">
                                    </router-link>
                                    <div class="col-12"> {{ getPokemonProperty(evolvedPokemon.pokemon, 'name')  }} </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Branch",
        props: ['chain'],

        created() {
            this.parse();
        },

        data() {

        	return {
        		parsedChain: []
            }
        },

        methods: {

        	parse() {

		        let firstStage = this.chain.chain;

		        let evolvedPokemon = this.findPokemonByName(firstStage.species.name);

		        this.parsedChain.push({
			        pokemon: evolvedPokemon,
			        image: (typeof evolvedPokemon === 'undefined') ? require('../../../assets/images/notknown.png')
				        : require(`../../../assets/static/pokemons/${evolvedPokemon.number}.png`)
		        });

		        let evolutions = [];

		        firstStage.evolves_to.forEach(function (pokemon) {

			        let evolvedPokemon = this.findPokemonByName(pokemon.species.name);

			        evolutions.push({
				        pokemon: evolvedPokemon,
				        image: (typeof evolvedPokemon === 'undefined') ? require('../../../assets/images/notknown.png')
					        : require(`../../../assets/static/pokemons/${evolvedPokemon.number}.png`)
			        });

		        }.bind(this));

		        this.parsedChain.push(evolutions);

            },

	        getPokemonProperty(pokemon, property) {
		        for (let prop in pokemon) {
			        if (pokemon.hasOwnProperty(prop) && prop === property) {
				        return pokemon[prop];
			        }
		        }
	        },

	        findPokemonByName(requestedPokemonName) {

		        requestedPokemonName = requestedPokemonName.toLowerCase();

		        return this.$store.getters.pokemonList.find(function(currentPokemon){

			        let currentPokemonName = currentPokemon.hasOwnProperty('alias') ? currentPokemon.alias
				        : currentPokemon.name.toLowerCase();

			        return currentPokemonName === requestedPokemonName;

		        }.bind(this));

	        }
        }

    }
</script>

<style scoped>

    div {
        /*border: solid 1px #babaca;*/
    }

    .evolution-stage {
        height: 100px;
        cursor: pointer;
    }

    .evolution-details {
        height: 50px;
    }

</style>