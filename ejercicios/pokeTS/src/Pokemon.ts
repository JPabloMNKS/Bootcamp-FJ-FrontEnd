import axios from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves
   should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
  name: string;
  url: string;
};

const MAX_ID_POKEMONS = 500;
const POKEMONS_DISPLAYED = 3;

export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = Array.from({ length: POKEMONS_DISPLAYED }, () => Math.floor(Math.random() * MAX_ID_POKEMONS) + 1);
  }
}

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: any) {
    this.buildFieldsPokemon(pokemonResult);
  }

  async buildFieldsPokemon(pokemon: Pokemon) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    this.getSinglePokemonInformation(this.id);
  }


  async getSinglePokemonInformation(pokemonID: number) {
    const pokemonInformation = getSinglePokemon(pokemonID);
    const results = await Promise.resolve(pokemonInformation);

    let movements = [];
    results.data.moves.forEach(move => {
      movements.push(move.move.name)
    });
    let randomMovements = [];
    for (let i = 0; i < 4; i++) {
      const randomMove = Math.floor(Math.random() * movements.length);
      randomMovements.push(movements[randomMove]);
    }

    console.log(`==========================`);
    console.log(`
  Name: ${results.data.name},
  ID: ${results.data.id},
  height: ${results.data.height},
  weight: ${results.data.weight}`);
    console.log('  types: ')
    results.data.types.forEach(type => {
      console.log(`     ${type.type.name}`);
    });
    console.log('  moves: ')
    randomMovements.forEach(move => {
      console.log(`     ${move}`);
    });
  }
}

@getNewPokemons
export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [];
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
    const results = await Promise.all(listPokemons)
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result.data));
    });
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
  }

}

