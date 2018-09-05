<template>
    <div class="card p-3">
        <div class="col-12">
            <app-loading-panel v-if="this.currentStatus === status.LOADING"></app-loading-panel>
            <app-error-panel v-if="this.currentStatus === status.ERROR"></app-error-panel>
            <div class="row" v-if="this.currentStatus === status.FETCHED">
                <div class="col-12">
                    <div class="row">
                        <div class="col-3 border-right">
                            <div class="row justify-content-center align-items-center p-2">
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
                                <div class="col-12 border-top pt-1">
                                    <app-gender-rate :value="this.data.gender_rate"></app-gender-rate>
                                </div>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-12 text-center mb-2"> Stats </div>
                                        <div class="col-12 border-bottom mb-2">
                                            <app-stats :data="this.data.stats"></app-stats>
                                        </div>
                                        <div class="col-6">
                                            <div class="row">
                                                <div class="col-12 text-center mb-2"> <small>Base Happiness</small> </div>
                                                <div class="col-12 text-center">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger" role="progressbar" :style="{width: happinessProgress(this.data.base_happiness)+'%'}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="255">
                                                            {{ this.data.base_happiness }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row">
                                                <div class="col-12 text-center mt-2"> <small>Growth Rate</small> </div>
                                                <div class="col-12 text-center"> {{ this.data.growth_rate.name }} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3 pb-5">
                                    <div class="row">
                                        <div class="col-12 text-center mb-2"> Capture Rate </div>
                                        <div class="col-12 border-right border-left mb-2">
                                            <app-capture-rate :value = this.data.capture_rate></app-capture-rate>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="row text-center p-1">
                                        <div class="col-12  mb-2"> Habitat </div>
                                        <div class="col-12">
                                            <img :src="require(`../assets/habitats/${this.data.habitat.name}.png`)">
                                        </div>
                                        <div class="col-12 text-muted">
                                            <small>{{ this.data.habitat.name }}</small>
                                        </div>
                                        <div class="col-12 border-top pt-1"> Egg Groups </div>
                                        <div class="col-12 border-bottom">
                                            <app-egg-group :groups=data.egg_groups></app-egg-group>
                                        </div>
                                        <div class="col-12 mt-2"> Hatch steps </div>
                                        <div class="col-12"> {{ this.data.hatch_steps }} </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row border-top">

                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12 border-top pt-2">
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
    import Stats from './Stats';
    import CaptureRate from './CaptureRate';
    import GenderRate from './GenderRate';
    import EggGroup from './EggGroup';
    import { status } from '../config';

    export default {

        name: "PokemonDetail",

        components: {
            appStats: Stats,
            appCaptureRate: CaptureRate,
            appGenderRate: GenderRate,
            appEggGroup: EggGroup,
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
                    capture_rate: {},
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

                this.data = data;
                this.data.image = require(`../assets/static/pokemons/${data.number}.png`);
                this.data.types = data.types.map(type => {
                    type.image = require(`../assets/types/${type.type.name}.png`);
                    return type;
                });
                this.data.capture_rate = Math.round((this.data.capture_rate/255)*100);
                this.data.hatch_steps = (this.data.hatch_counter + 1) * 255;

                this.mountStats();

            },

            mountStats() {

                let stats = {};

                this.data.stats.forEach(function (entry) {

                    stats[entry.stat.name] = {
                        base_stat: entry.base_stat,
                        effort: entry.effort,
                        url: entry.stat.url
                    }

                }.bind(this));

                this.data.stats = stats;

            },

            statProgress(value) {
                console.log(`${(value*0.125)*100}%`);
                return `${(value*0.125)*100}%`;
            },

            happinessProgress(value) {
                return (value/255)*100;
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
