import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { evolutionChainType } from './config'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';
axios.defaults.headers.get['Content-Type'] = 'jsonp';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {

        pokemonList: [
	        {number: 1, name: 'Bulbasaur', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 2, name: 'Ivysaur', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 3, name: 'Venusaur', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 4, name: 'Charmander', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 5, name: 'Charmeleon', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 6, name: 'Charizard', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 7, name: 'Squirtle', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 8, name: 'Wartortle', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 9, name: 'Blastoise', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 10, name: 'Caterpie', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 11, name: 'Metapod', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 12, name: 'Butterfree', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 13, name: 'Weedle', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 14, name: 'Kakuna', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 15, name: 'Beedrill', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 16, name: 'Pidgey', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 17, name: 'Pidgeotto', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 18, name: 'Pidgeot', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 19, name: 'Rattata', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 20, name: 'Raticate', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 21, name: 'Spearow', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 22, name: 'Fearow', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 23, name: 'Ekans', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 24, name: 'Arbok', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 25, name: 'Pikachu', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 26, name: 'Raichu', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 27, name: 'Sandshrew', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 28, name: 'Sandslash', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 29, name: 'Nidoran', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 30, name: 'Nidorina', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 31, name: 'Nidoqueen', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 32, name: 'Nidoran', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 33, name: 'Nidorino', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 34, name: 'Nidoking', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 35, name: 'Clefairy', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 36, name: 'Clefable', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 37, name: 'Vulpix', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 38, name: 'Ninetales', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 39, name: 'Jigglypuff', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 40, name: 'Wigglytuff', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 41, name: 'Zubat', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 42, name: 'Golbat', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 43, name: 'Oddish', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 44, name: 'Gloom', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 45, name: 'Vileplume', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 46, name: 'Paras', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 47, name: 'Parasect', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 48, name: 'Venonat', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 49, name: 'Venomoth',evolutionChainType: evolutionChainType.LINEAR},
	        {number: 50, name: 'Diglett', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 51, name: 'Dugtrio', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 52, name: 'Meowth', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 53, name: 'Persian', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 54, name: 'Psyduck', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 55, name: 'Golduck', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 56, name: 'Mankey', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 57, name: 'Primeape', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 58, name: 'Growlithe', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 59, name: 'Arcanine', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 60, name: 'Poliwag', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 61, name: 'Poliwhirl', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 62, name: 'Poliwrath', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 63, name: 'Abra', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 64, name: 'Kadabra', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 65, name: 'Alakazan', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 66, name: 'Machop', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 67, name: 'Machoke', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 68, name: 'Machamp', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 69, name: 'Bellsprout', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 70, name: 'Weepinbell', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 71, name: 'Victreebel', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 72, name: 'Tentacool', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 73, name: 'Tentacruel', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 74, name: 'Geodude', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 75, name: 'Graveler', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 76, name: 'Golem', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 77, name: 'Ponyta', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 78, name: 'Rapidash', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 79, name: 'Slowpoke', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 80, name: 'Slowbro', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 81, name: 'Magnemite', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 82, name: 'Magneton', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 83, name: 'Farfetch\'d', alias: 'farfetchd', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 84, name: 'Doduo', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 85, name: 'Dodrio', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 86, name: 'Seel', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 87, name: 'Dewgong', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 88, name: 'Grimer', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 89, name: 'Muk', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 90, name: 'Shellder', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 91, name: 'Cloyster', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 92, name: 'Gastly', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 93, name: 'Haunter', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 94, name: 'Gengar', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 95, name: 'Onix', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 96, name: 'Drowzee', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 97, name: 'Hypno', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 98, name: 'Krabby', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 99, name: 'Kingler', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 100, name: 'Voltorb', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 101, name: 'Electrode', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 102, name: 'Exeggcute', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 103, name: 'Exeggutor', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 104, name: 'Cubone', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 105, name: 'Marowak', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 106, name: 'Hitmonlee', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 107, name: 'Hitmonchan', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 108, name: 'Lickitung', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 109, name: 'Koffing', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 110, name: 'Weezing', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 111, name: 'Rhyhorn', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 112, name: 'Rhydon', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 113, name: 'Chansey', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 114, name: 'Tangela', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 115, name: 'Kangaskhan', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 116, name: 'Horsea', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 117, name: 'Seadra', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 118, name: 'Goldeen', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 119, name: 'Seaking', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 120, name: 'Staryu', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 121, name: 'Starmie', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 122, name: 'Mr. Mime', alias: 'mr-mime', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 123, name: 'Scyther', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 124, name: 'Jynx', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 125, name: 'Electabuzz', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 126, name: 'Magmar', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 127, name: 'Pinsir', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 128, name: 'Tauros', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 129, name: 'Magikarp', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 130, name: 'Gyarados', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 131, name: 'Lapras', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 132, name: 'Ditto', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 133, name: 'Eevee', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 134, name: 'Vaporeon', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 135, name: 'Jolteon', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 136, name: 'Flareon', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 137, name: 'Porygon', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 138, name: 'Omanyte', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 139, name: 'Omastar', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 140, name: 'Kabuto', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 141, name: 'Kabutops', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 142, name: 'Aerodactyl', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 143, name: 'Snorlax', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 144, name: 'Articuno', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 145, name: 'Zapdos', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 146, name: 'Moltres', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 147, name: 'Dratini', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 148, name: 'Dragonair', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 149, name: 'Dragonite', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 150, name: 'Mewtwo', evolutionChainType: evolutionChainType.LINEAR},
	        {number: 151, name: 'Mew', evolutionChainType: evolutionChainType.LINEAR}

        ],

	    fetchedPokemons: []
    },

	mutations: {

		updatePokemonDetails(state, data) {

		    let pokemon = data.pokemon;

			let flavorTextEntries = data.species.flavor_text_entries.filter(entry => {
				return entry.language.name === "en";
			});

			let uniqueEntries = [];

            flavorTextEntries.forEach(function (textEntry) {

                if(uniqueEntries.indexOf(textEntry.flavor_text) === -1) {
                    uniqueEntries.push(textEntry.flavor_text);
                }

            }.bind(this));

            let genera = data.species.genera.find(entry => {

                return entry.language.name === "en";

            });

		    pokemon.types = data.details.types;
		    pokemon.description = uniqueEntries.join(' ');
		    pokemon.genera = genera.genus;
		    pokemon.evolutionChain = data.evolutionChain;

		}
	},

	actions: {

    	fetchPokemonDetails(context, id) {

            return new Promise((resolve, reject) => {

	            id = parseInt(id);
                let pokemon = context.state.pokemonList.find(pokemon => {
                	console.log(pokemon.number+' === '+id);
                    return pokemon.number === id;
                });

                if(context.state.fetchedPokemons.indexOf(pokemon.number) > -1) {
                	resolve(pokemon);
                	return;
                }

                axios.get(`pokemon/${pokemon.number}/`).then(response => {

                	let details = response.data;

                    axios.get(`pokemon-species/${pokemon.number}/`).then(response => {

                        let species = response.data;

                        axios.get(species.evolution_chain.url).then(response => {

                            let evolutionChain = response.data;

                            context.commit('updatePokemonDetails', {

                                pokemon: pokemon,
                                details: details,
                                species: species,
                                evolutionChain: evolutionChain

                            });

	                        context.state.fetchedPokemons.push(pokemon.number);
                            resolve(pokemon);

                        }).catch(error => {
                            reject(error);
                        });

                    }).catch(error => {
                        reject(error);
                    });

                }).catch(error => {
                    reject(error);
                });

            });
	    }

	},

    getters: {

    	pokemonList(state) {
    		return state.pokemonList;
	    },

	    fetchedPokemons(state) {
    		return state.fetchedPokemons;
	    }
    }

});
