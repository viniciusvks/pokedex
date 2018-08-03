import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import PokemonDetail from './components/PokemonDetail.vue';

Vue.use(VueRouter);

const routes = [

    {path: '/', component: Home},
    {path: '/pokemon/detail', component: PokemonDetail}

];

export default new VueRouter({mode: 'history', routes});
