<template>

    <div class="card-deck">
        <app-pokemon v-for="pokemon in pokemons" :pokemon="pokemon"></app-pokemon>
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
                pokemons: [
                    {
                        number: 1,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    },
                    {
                        number: 2,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    },
                    {
                        number: 3,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    },
                    {
                        number: 4,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    },
                    {
                        number: 5,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    },
                    {
                        number: 6,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    },
                    {
                        number: 7,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    },
                    {
                        number: 8,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    },
                    {
                        number: 9,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih',
                    },
                    {
                        number: 10,
                        name: 'Bulbasaur',
                        type: 'grass/poison',
                        description: 'dsijadsiohdasoih'
                    }
                ]
            }
        }

    }
</script>