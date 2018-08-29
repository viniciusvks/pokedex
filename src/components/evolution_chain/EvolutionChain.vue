<template>
    <component :is=layoutComponent :parsedChain=parsedChain></component>
</template>

<script>

    import Linear from './layouts/Linear';
    import Branch from './layouts/Branch';

    export default {

        name: "EvolutionChain",
        props: ['pokemonName', 'chain'],

        created() {

            this.pokemon = this.findPokemonByName(this.pokemonName);
            this.parseChain();
        },

        components: {

            appLinear: Linear,
            appBranch: Branch

        },

        methods: {

            parseChain() {

                let parseConfig = this.getParseConfig(this.pokemon);
                this.layoutComponent = parseConfig.layoutComponent;
                parseConfig.method.call();
            },

            linearParse() {

                let evolutionStage = this.chain.chain;

                while (true){

                    let evolvedPokemon = this.$store.getters.pokemonList.find(function(pokemon){

                        let name = pokemon.hasOwnProperty('alias') ? pokemon.alias : pokemon.name.toLowerCase();
                        return name === evolutionStage.species.name;

                    }.bind(this));

                    this.parsedChain.push({
                        pokemon: evolvedPokemon,
                        image: (typeof evolvedPokemon === 'undefined') ? require('../../assets/images/notknown.png')
                            : require(`../../assets/static/pokemons/${evolvedPokemon.number}.png`)
                    });

                    if(evolutionStage.evolves_to.length === 0) {
                        break;
                    }

                    evolutionStage = evolutionStage.evolves_to[0];
                }
            },

            branchParse() {

                let firstStage = this.chain.chain;

                let evolvedPokemon = this.findPokemonByName(firstStage.species.name);

                this.parsedChain.push({
                    pokemon: evolvedPokemon,
                    image: (typeof evolvedPokemon === 'undefined') ? require('../../assets/images/notknown.png')
                        : require(`../../assets/static/pokemons/${evolvedPokemon.number}.png`)
                });

                let evolutions = [];

                firstStage.evolves_to.forEach(function (pokemon) {

                    let evolvedPokemon = this.findPokemonByName(pokemon.species.name);

                    evolutions.push({
                        pokemon: evolvedPokemon,
                        image: (typeof evolvedPokemon === 'undefined') ? require('../../assets/images/notknown.png')
                            : require(`../../assets/static/pokemons/${evolvedPokemon.number}.png`)
                    });

                }.bind(this));

                this.parsedChain.push(evolutions);

            },

            findPokemonByName(requestedPokemonName) {

                requestedPokemonName = requestedPokemonName.toLowerCase();

                return this.$store.getters.pokemonList.find(function(currentPokemon){

                    let currentPokemonName = currentPokemon.hasOwnProperty('alias') ? currentPokemon.alias
                        : currentPokemon.name.toLowerCase();

                    // console.log(currentPokemonName+' === '+requestedPokemonName);
                    return currentPokemonName === requestedPokemonName;

                }.bind(this));

            },

            getParseConfig(pokemon) {

                let len = this.customParseConfig.length;

                for (let i = 0; i < len; i++) {
                    if(this.customParseConfig[i].pokemonNumber === pokemon.number) {
                        return this.customParseConfig[i];
                    }
                }

                return this.defaultParseConfig;

            }
        },

        data() {

            return {

                pokemon: {},
                parsedChain: [],
                layoutComponent: "",
                defaultParseConfig: {

                    method: this.linearParse,
                    layoutComponent: "appLinear"

                },
                customParseConfig: [

                    {pokemonNumber: 133, method: this.branchParse, layoutComponent: "appBranch"},
                    {pokemonNumber: 134, method: this.branchParse, layoutComponent: "appBranch"},
                    {pokemonNumber: 135, method: this.branchParse, layoutComponent: "appBranch"},
                    {pokemonNumber: 136, method: this.branchParse, layoutComponent: "appBranch"}

                ]

            }
        }
    }
</script>

<style scoped>

    div {
        /*border: solid 1px #babaca;*/
    }

</style>
