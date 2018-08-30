<template>
    <component :is=layoutComponent :chain=chain></component>
</template>

<script>

    import Linear from './layouts/Linear';
    import Branch from './layouts/Branch';

    export default {

        name: "EvolutionChain",
        props: ['pokemonName', 'chain'],

	    components: {

		    linearLayout: Linear,
		    branchLayout: Branch

	    },

	    created() {

		    this.pokemon = this.findPokemonByName(this.pokemonName);
		    this.layoutComponent = this.getLayoutComponent(this.pokemon);
	    },

	    data() {

		    return {

			    pokemon: {},
			    layoutComponent: "",
                defaultLayoutComponent: "linearLayout",
			    customLayoutComponents: [

				    {pokemonNumber: 133, layoutComponent: "branchLayout"},
				    {pokemonNumber: 134, layoutComponent: "branchLayout"},
				    {pokemonNumber: 135, layoutComponent: "branchLayout"},
				    {pokemonNumber: 136, layoutComponent: "branchLayout"}

			    ]
		    }
	    },

        methods: {

	        getLayoutComponent(pokemon) {

		        let len = this.customLayoutComponents.length;

		        for (let i = 0; i < len; i++) {
			        if(this.customLayoutComponents[i].pokemonNumber === pokemon.number) {
				        return this.customLayoutComponents[i];
			        }
		        }

		        return this.defaultLayoutComponent;

	        },

	        findPokemonByName(requestedPokemonName) {

		        requestedPokemonName = requestedPokemonName.toLowerCase();

		        return this.$store.getters.pokemonList.find(function(currentPokemon){

			        let currentPokemonName = currentPokemon.hasOwnProperty('alias') ? currentPokemon.alias
				        : currentPokemon.name.toLowerCase();

			        return currentPokemonName === requestedPokemonName;

		        }.bind(this));

	        }
        }
    }
</script>

<style scoped>

    div {
        /*border: solid 1px #babaca;*/
    }

</style>
