<template>
    <div class="card p-3">
        <div class="col-12">
            <app-loading-panel v-if="this.currentStatus === status.LOADING"></app-loading-panel>
            <app-error-panel v-if="this.currentStatus === status.ERROR"></app-error-panel>
            <div class="row" v-if="this.currentStatus === status.FETCHED">
                <div class="col-12">
                    <div class="row">
                        <div class="col-3">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-12 p-4 pokemon-img w-50 rounded" :class=this.data.types[0].type.name>
                                    <img :src="this.data.image">
                                </div>
                                <div class="col-12 text-center"><h5 class="m-0">{{ this.data.name }}</h5></div>
                                <div class="col-12 text-center text-muted card-subtitle"><small>{{ this.data.genera }}</small></div>
                                <div class="col-12 text-center">
                                    <div class="row justify-content-center p-1 border-top">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col-12">{{ this.data.weight | weight}}</div>
                                                <div class="col-12"><small class="text-muted">Weight</small></div>
                                            </div>
                                        </div>
                                        <div class="col border-left border-right">
                                            <div class="row justify-content-center">
                                                <div class="media" v-for="type in this.data.types">
                                                    <img :src="type.image">
                                                </div>
                                                <div class="col-12"><small class="text-muted">Types</small></div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col-12">{{ this.data.height | height}}</div>
                                                <div class="col-12"><small class="text-muted">Height</small></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="col-12 border-top">-->
                                <!--<div class="row justify-content-center">-->
                                <!--<div class="col-1 media">-->
                                <!--<img :src="require('../assets/images/female.png')">-->
                                <!--</div>-->
                                <!--<div class="col">-->

                                <!--</div>-->
                                <!--<div class="col-1 media">-->
                                <!--<img :src="require('../assets/images/male.png')">-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->
                            </div>
                        </div>
                        <div class="col-9 border-left">
                            <div class="row">
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-12">hp</div>
                                        <div class="col-12">speed</div>
                                        <div class="col-12">attack</div>
                                        <div class="col-12">defense</div>
                                        <div class="col-12">special attack</div>
                                        <div class="col-12">special defense</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 border-top">
                            <p class="card-text text-justify ">{{ this.data.description }}</p>
                        </div>
                        <div class="col-12"><hr></div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-center"><h4 class="card-subtitle">Evolution chain</h4></div>
                        <app-evolution-chain :pokemonName=this.data.name :chain=this.data.evolutionChain></app-evolution-chain>
                        <div class="col-12"><hr></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import EvolutionChain from './evolution_chain/EvolutionChain';
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

                    console.log(JSON.stringify(data, null, 4));
                    this.currentStatus = status.FETCHED;
                    this.mountData(data);

                }).catch(error => {

                    this.currentStatus = status.ERROR;
                    console.log(error);

                });
            },

            mountData(data) {

                this.data = data;
                this.data.image = require(`../assets/static/pokemons/${data.number}.png`);
                this.data.types = data.types.map(type => {
                    type.image = require(`../assets/types/${type.type.name}.png`);
                    return type;
                });

            }
        },

        computed: {
            typeClass() {
                // console.log(this.data.types[0].type.name);
                return this.data.types[0].type.name;
            }
        }
    }
</script>

<style scoped>

    div {
        /*border: solid 1px #babaca;*/
    }

    .pokemon-img {
        /*background: #f4f4f4;*/
        /*background: #FAD961 linear-gradient(121deg, #FAD961 0%, #F76B1C 100%);*/
        /*background: #ace0f9;*/
    }

    .pokemon-img img {
        width: 100%;
        /*filter: blur(50px);*/
    }

    .media img{
      height: 24px;
    }

    .fire {
        background: #FAD961 linear-gradient(121deg, #FAD961 0%, #F76B1C 100%);
    }

    .water {
        background: #80D0C7 linear-gradient(121deg, #80D0C7 0%, #0093E9 100%);
    }

    .grass {
        background: #F4D03F linear-gradient(132deg, #F4D03F 0%, #16A085 100%);
    }

    .poison {
        background: #7200de linear-gradient(135deg, #7200de 1%, #FC00FF 99%);
    }

    .electric {
        background: #ff7e52 linear-gradient(327deg, #ff7e52 0%, #fffd2c 65%);

    }

</style>
