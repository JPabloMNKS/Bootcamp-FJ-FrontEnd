import axios from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/
export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}



function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = [1,2,3];
  }
}

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

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: any) {
    this.buildFieldsPokemon(pokemonResult);
  }

  buildFieldsPokemon(pokemon: any) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    // you can only choose four moves from the list of moves
    // this.moves = someFn(pokemon.moves);
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`${this.id} ${this.name}`);
    this.types.forEach(type => {
      console.log(`${type.name}`);
    });
    this.moves.forEach(move => {
      console.log(`${move.name}`);
    });
  }
}

export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [2,4];
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

  async getSinglePokemonInformation(pokemonID: number){
    const pokemonInformation =  getSinglePokemon(pokemonID);
    const results = await Promise.resolve(pokemonInformation);
    console.log(`Pokemon
    Name: ${results.data.name}, 
    ID: ${results.data.id},
    types: ${results.data.types.type.Name},
    moves: ${results.data.moves.move},
    height: ${results.data.height},
    weight: ${results.data.weight}`);
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
    this.pokemons.forEach(pokemon => {
      pokemon.displayInfo();
    });
  }
}
function someFn(moves: any): Move[] {
  throw new Error("Function not implemented.");
}

