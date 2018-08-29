<template>
    <div class="col-12">
        <div class="row justify-content-center align-items-center">
            <div class="col-2 text-center p-3" >
                <router-link :to="{ name: 'pokemon-detail', params: { id: parsedChain[0].pokemon.number } }">
                    <img class="evolution-stage" :src="parsedChain[0].image">
                    <div class="col-12 pt-1"> {{ parsedChain[0].pokemon.name }} </div>
                </router-link>
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
                                    <router-link :to="{ name: 'pokemon-detail', params: { id: getPokemonNumber(evolvedPokemon.pokemon) } }">
                                        <img class="evolution-stage" :src="evolvedPokemon.image">
                                    </router-link>
                                    <div class="col-12"> {{ getPokemonName(evolvedPokemon.pokemon)  }} </div>
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
        name: "Linear",
        props: ['parsedChain'],

        created() {
            console.log(this.parsedChain);
        },

        methods: {
            getPokemonName(pokemon) {
                for(let prop in pokemon) {
                    if(pokemon.hasOwnProperty(prop) && prop === 'name') {
                        return pokemon[prop];
                    }
                }
            },
            getPokemonNumber(pokemon) {
                for(let prop in pokemon) {
                    if(pokemon.hasOwnProperty(prop) && prop === 'number') {
                        return pokemon[prop];
                    }
                }
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