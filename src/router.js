import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import PokemonDetail from './components/PokemonDetail.vue';

Vue.use(VueRouter);

const routes = [

    {name: 'home', path: '/', component: Home},
    {name: 'pokemon-detail', path: '/pokemon/detail/:id', component: PokemonDetail}

];

export default new VueRouter({
	mode: 'history',
	routes
});
