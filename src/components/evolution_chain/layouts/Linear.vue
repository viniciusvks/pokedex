<template>
    <div class="col-12">
        <div class="row justify-content-center align-items-center">
            <template v-for="(evolvedPokemon, index) in parsedChain">
                <div class="col-2 text-center p-3" >
                    <router-link :to="{ name: 'pokemon-detail', params: { id: evolvedPokemon.pokemon.number } }">
                        <img class="evolution-stage" :src="evolvedPokemon.image">
                    </router-link>
                    <div class="col-12 pt-1"> {{ evolvedPokemon.pokemon.name }} </div>
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
        props: ['parsedChain']

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