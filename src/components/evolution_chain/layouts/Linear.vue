<template>
    <div class="col-12">
        <div class="row justify-content-center align-items-center">
            <template v-for="(evolvedPokemon, index) in parsedChain">
                <div class="col-2 text-center p-3" >

                    <template v-if="typeof evolvedPokemon.pokemon !== 'undefined'">
                        <router-link :to="{ name: 'pokemon-detail', params: { id:  evolvedPokemon.pokemon.number } }">
                            <img class="evolution-stage" :src="evolvedPokemon.image">
                        </router-link>
                        <div class="col-12 pt-1"> {{ evolvedPokemon.pokemon.name }} </div>
                    </template>

                    <template v-else>
                        <img class="evolution-stage" :src="evolvedPokemon.image">
                    </template>

                </div>
                <div class="col-1 text-center p-3" v-if="index < parsedChain.length - 1" >
                    <img class="evolution-details" :src="require('../../../assets/images/right-chevron.png')">
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {

        name: "Linear",
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

		        let evolutionStage = this.chain.chain;

		        while (true){

			        let evolvedPokemon = this.$store.getters.pokemonList.find(function(pokemon){

				        let name = pokemon.hasOwnProperty('alias') ? pokemon.alias : pokemon.name.toLowerCase();
				        return name === evolutionStage.species.name;

			        }.bind(this));

			        this.parsedChain.push({
				        pokemon: evolvedPokemon,
				        image: (typeof evolvedPokemon === 'undefined') ? require('../../../assets/images/notknown.png')
					        : require(`../../../assets/static/pokemons/${evolvedPokemon.number}.png`)
			        });

			        if(evolutionStage.evolves_to.length === 0) {
				        break;
			        }

			        evolutionStage = evolutionStage.evolves_to[0];
		        }
            }

        }

    }
</script>

<style scoped>

    .evolution-stage {
        height: 100px;
        cursor: pointer;
    }

    .evolution-details {
        height: 50px;
    }

</style>