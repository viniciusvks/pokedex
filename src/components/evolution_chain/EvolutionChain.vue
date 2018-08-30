<template>
    <component :is=layoutComponent :chain=chain></component>
</template>

<script>

    import Linear from './layouts/Linear.vue';
    import Branch from './layouts/Branch.vue';
    import Fork from './layouts/Fork.vue';

    export default {

        name: "EvolutionChain",
        props: ['pokemonName', 'chain'],

	    components: {

		    linearLayout: Linear,
		    branchLayout: Branch,
		    forkLayout: Fork,

	    },

	    created() {

		    this.pokemon = this.findPokemonByName(this.pokemonName);
		    this.layoutComponent = this.getLayoutComponent(this.pokemon);
		    console.log(this.layoutComponent);
	    },

	    data() {

		    return {

			    pokemon: {},
			    layoutComponent: "",
                defaultLayoutComponent: "linearLayout",
			    customLayoutComponents: [

				    {pokemonNumber: 43, layoutComponent: "forkLayout"},
				    {pokemonNumber: 44, layoutComponent: "forkLayout"},
				    {pokemonNumber: 45, layoutComponent: "forkLayout"},
                    {pokemonNumber: 60, layoutComponent: "forkLayout"},
                    {pokemonNumber: 61, layoutComponent: "forkLayout"},
                    {pokemonNumber: 62, layoutComponent: "forkLayout"},
                    {pokemonNumber: 79, layoutComponent: "branchLayout"},
                    {pokemonNumber: 80, layoutComponent: "branchLayout"},
                    {pokemonNumber: 106, layoutComponent: "branchLayout"},
                    {pokemonNumber: 107, layoutComponent: "branchLayout"},
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
				        return this.customLayoutComponents[i].layoutComponent;
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
