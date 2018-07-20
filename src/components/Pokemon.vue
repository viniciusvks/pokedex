<template>
    <div class="col-auto mb-3">
        <div class="card" @click="toggleDetails">
            <img class="card-img-top shadow-sm"  :src="'src/assets/static/pokemons/'+pokemon.number+'.png'" alt="Card image cap">
            <div class="card-footer">
                <small>#{{ pokemon.number }}</small><br>
                <h4>{{ pokemon.name }}</h4>
            </div>
        </div>
        <app-pokemon-detail v-if="showDetails"></app-pokemon-detail>
    </div>
</template>

<script>

    import PokemonDetail from './PokemonDetail';

    export default {

        data() {
            return {
                showDetails: false
            };
        },

        methods: {
            toggleDetails() {
                this.showDetails = !this.showDetails;
            }
        },

        components: {
            appPokemonDetail: PokemonDetail
        },

        props:['pokemon']

    }
</script>

<style scoped>

    .card {
        max-height: 300px;
        max-width: 300px;
        cursor: pointer;
        border-color: #B5E5EC;
    }

    .card-img-top{
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        height: 50%;
    }

    .card-footer {
        padding: 0.15rem 0.75rem;
    }

</style>