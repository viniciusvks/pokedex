<template>
    <div class="col-12">
        <app-loading-panel v-if="this.currentStatus === status.LOADING"></app-loading-panel>
        <app-error-panel v-if="this.currentStatus === status.ERROR"></app-error-panel>
        <div class="row" v-if="this.currentStatus === status.FETCHED">
            <div class="col-8">
                <div class="col-12">{{ this.data.description }} </div>
            </div>
            <div class="col-4">
                <div class="row justify-content-center">
                    <img class="pokemon-img" :src="this.data.image">
                    <div class="col-12 text-center">  {{ this.data.name }} </div>
                    <div class="media" v-for="type in this.data.types">
                        <img :src="type">
                    </div>
                </div>
            </div>
            <div class="col-12 text-center">Evolution chain</div>
            <app-evolution-chain :pokemonName=this.data.name :chain=this.data.evolutionChain></app-evolution-chain>
        </div>
    </div>
</template>

<script>

    import EvolutionChain from './EvolutionChain';
    import LoadingPanel from './LoadingPanel';
    import ErrorPanel from './ErrorPanel';
    import { status } from '../config';

    export default {

        name: "PokemonDetail",

        components: {
            appEvolutionChain: EvolutionChain,
            appLoadingPanel: LoadingPanel,
            appErrorPanel: ErrorPanel
        },

        created() {

        	this.fetchData();

        },

        data() {

        	return {

        	    data: {

        	    	number: '',
        	    	name: '',
                    image: '',
                    types: [],
                    description: '',
                    evolutionChain: []

                },

                status: status,
                currentStatus: status.LOADING
            }
        },

        watch: {
	        '$route': 'fetchData'
        },

        methods: {

            fetchData() {

                this.currentStatus = status.LOADING;

                this.$store.dispatch( 'fetchPokemonDetails', this.$route.params.id).then(data => {

                    this.currentStatus = status.FETCHED;
                    this.mountData(data);

                }).catch(error => {

                    this.currentStatus = status.ERROR;
                    console.log(error);

                });
            },

            mountData(data) {

                this.data.number = data.number;
                this.data.name = data.name;
                this.data.image = require(`../assets/static/pokemons/${data.number}.png`);
                this.data.types = data.types.map(type => {
                    return require(`../assets/types/${type.type.name}.png`);
                });

                this.data.description = data.description;
                this.data.evolutionChain = data.evolutionChain;

            }
        }
    }
</script>

<style scoped>

  div {
    border: solid 1px #babaca;
  }

  .pokemon-img{
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

  .media img{
      height: 50px;
  }

</style>
