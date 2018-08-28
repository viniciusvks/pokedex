<template>
    <div class="col-12">
        <!--<div class="col-12">Evolution chain</div>-->
        <div class="row" v-if="this.pokemon.evolutionChainType === evolutionChainType.LINEAR">
            <div class="col text-center p-3" v-for="evolvedPokemon in this.parsedChain">
                <img :src="evolvedPokemon.image">
            </div>
        </div>
    </div>
</template>

<script>

    import { evolutionChainType } from "../config";

    export default {

        name: "EvolutionChain",
        props: ['pokemonName', 'chain'],

        created() {

            this.parseMethods[evolutionChainType.LINEAR] = this.parseLinearChain;

            this.pokemon = this.$store.getters.pokemonList.find(function(pokemon){
                return pokemon.name === this.pokemonName;
            }.bind(this));

            this.parseChain();
        },

        methods: {

            parseChain() {

                this.parseMethods[this.pokemon.evolutionChainType].call();
                console.log(this.parsedChain);
            },

            parseLinearChain() {

                let evolutionStage = this.chain.chain;

                while (true){

                    let evolvedPokemon = this.$store.getters.pokemonList.find(function(pokemon){

                        let name = pokemon.hasOwnProperty('alias') ? pokemon.alias : pokemon.name.toLowerCase();

                        console.log(name + ' === ' + evolutionStage.species.name);
                        return name === evolutionStage.species.name;
                    }.bind(this));

                    this.parsedChain.push({
                        pokemon: evolvedPokemon,
                        image: (typeof evolvedPokemon === 'undefined') ? require('../assets/images/notknown.png')
                            : require(`../assets/static/pokemons/${evolvedPokemon.number}.png`)
                    });

                    if(evolutionStage.evolves_to.length === 0) {
                        break;
                    }

                    evolutionStage = evolutionStage.evolves_to[0];
                }
            },
        },

        data() {
            return {
                pokemon: {},
                parsedChain: [],
                evolutionChainType: evolutionChainType,
                parseMethods: []
            }
        },

        computed: {
	        typeColClass() {
		        return `col-${ 12/this.data.length }`;
            }
        }
    }
</script>

<style scoped>

    div {
        border: solid 1px #babaca;
    }

    img{
        height: 100px;
    }

</style>
