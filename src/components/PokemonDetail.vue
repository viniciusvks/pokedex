<template>
    <div class="col-12">
        <div class="row" v-if="loading">
            Loading...
        </div>
        <div class="row" v-if="error">
            Error fetching pokemon
        </div>
        <div class="row" v-if="fetched">
            <div class="col-8">
                <!--<img class="card-img-top shadow-sm"  :src="'src/assets/static/pokemons/'+this.$route.params.id+'.png'" alt="Card image cap">-->
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-12 text-center">  {{ this.data.name }} </div>
                    <div class="col justify-content-center" v-for="type in this.data.types"> {{ type.type.name }}</div>
                    <div class="col-12">Pokémon description</div>
                    <div class="col-12">{{ this.data.description }} </div>
                </div>
            </div>
            <div class="col-12 text-center">Evolution chain</div>
            <app-evolution-chain :data=this.data.evolutionChain></app-evolution-chain>
        </div>
    </div>
</template>

<script>

    import EvolutionChain from './EvolutionChain';

    export default {

        name: "PokemonDetail",

        components: {
            appEvolutionChain: EvolutionChain
        },

        created() {

        	this.fetchData();

        },

        data() {
        	return {

        	    data: {
        	    	number: '',
        	    	name: '',
                    types: [],
                    description: '',
                    evolutionChain: []
                },
        		loading: true,
		        error: false,
		        fetched: false

            }
        },

        watch: {
	        '$route': 'fetchData'
        },

        methods: {

            fetchData() {

                this.loading = true;
                this.$store.dispatch(

                    'fetchPokemonDetails',
                    this.$route.params.id

                ).then(data => {

                    this.fetched = true;
                    this.loading = this.error = false;

                    this.mountData(data);

                }).catch(error => {

                    this.error = true;
                    this.fetched = this.loading = false;
                    console.log(error);

                });
            },

            mountData(data) {

                this.data.number = data.number;
                this.data.name = data.name;
                this.data.types = data.types;
                this.data.description = data.description;
                this.data.evolutionChain = [
                    {id: this.data.number},
                    {id: this.data.number},
                    {id: this.data.number}
                ];

            }

        }

    }
</script>

<style scoped>

  div {
    border: solid 1px #babaca;
  }

</style>
