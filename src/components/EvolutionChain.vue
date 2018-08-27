<template>
    <div class="col-12">
        <!--<div class="col-12">Evolution chain</div>-->
        <div class="row">
            <div class="col" v-for="pokemon in this.data"> {{ pokemon.id }}</div>
        </div>
    </div>
</template>

<script>

    export default {

        name: "EvolutionChain",

        props: ['data'],

        computed: {
	        typeColClass() {
		        return `col-${ 12/this.data.length }`;
            }
        }

    }
</script>

<style scoped>

  div {
    border: solid 1px #babaca;
  }

</style>
