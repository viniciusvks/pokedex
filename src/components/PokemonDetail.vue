<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            Error fetching pokemon
        </div>
        <div class="row" v-if="fetched">
            <div class="col-12 col-md-8">
                <!--<img class="card-img-top shadow-sm"  :src="'src/assets/static/pokemons/'+this.$route.params.id+'.png'" alt="Card image cap">-->
            </div>
            <div class="col-6 col-md-4">
                <div class="col-12 ">{{ this.data.hasOwnProperty('name') ? this.data.name : '' }}</div>
                <div class="col-12 ">Pokémon type:</div>
                <div class="col-12 ">Pokémon type: {{ this.data.hasOwnProperty('types') ? this.data.types.join('|') : '' }}</div>
                <div class="col-12 ">Pokémon description</div>
            </div>
            <div class="col-12">Evolution chain</div>
        </div>
    </div>
</template>

<script>
    export default {

        name: "PokemonDetail",

        created() {

        	this.fetchData();

        },

        data() {
        	return {

        	    data: null,
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
                    this.data = data;
                    console.log(this.data.type);
                    console.log(data);

                }).catch(error => {

                    this.error = true;
                    this.fetched = this.loading = false;
                    console.log(error);

                });
            }
        }
    }
</script>

<style scoped>

  div {
    border: solid 1px #babaca;
  }

</style>
