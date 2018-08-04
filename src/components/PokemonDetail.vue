<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            Error fetching pokemon
        </div>
        <div class="row" v-if="fetched">
            <div class="col-12 col-md-8">Pokemon image</div>
            <div class="col-6 col-md-4">
                <div class="col-12 ">Pokémon type</div>
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

        		setTimeout(function () {

        			console.log('timeout');
                    this.loading = this.error = false;
			        this.fetched = true;
                    console.log(this.loading + ', ' + this.fetched);

		        }.bind(this), 500);
            }
        }
    }
</script>

<style scoped>

  div {
    border: solid 1px #babaca;
  }

</style>
