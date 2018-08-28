<template>
    <div class="col-auto p-1" @click="showDetails">
        <div class="card m-1">
            <img class="card-img-top shadow-sm"  :src="'src/assets/static/pokemons/'+pokemon.number+'.png'" alt="Card image cap">
            <div class="card-footer">
                <small>#{{ pokemon.number }}</small><br>
                <h5>{{ pokemon.name }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props:['pokemon'],

        methods: {

            showDetails() {
                this.$router.push({
                    name: 'pokemon-detail',
                    params: { id: this.pokemon.number }
                });
            }
        }
    }
</script>

<style scoped>

    .card {
        max-height: 200px;
        max-width: 200px;
        cursor: pointer;
        /*border-color: #B5E5EC;*/
    }

    .card-img-top{
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        height: 50%;
        -webkit-filter: blur(50px);
        -moz-filter: blur(50px);
        -o-filter: blur(50px);
        -ms-filter: blur(50px);
        filter: blur(50px);
    }

    .card-footer {
        padding: 0.15rem 0.75rem;
    }

</style>
