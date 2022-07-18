import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pokemon, PokemonDescription } from '../core/interfaces/pokemon.interface';
import { Observable } from 'rxjs/internal/Observable';
import { pokemonColorMap } from '../utils/utils';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class PokemonService {
  pokemons!: Pokemon;

  constructor(private http: HttpClient) {}

  private API = 'https://pokeapi.co/api/v2';

  getPokemonList(offset: number = 0, limit: number = 25) {
    return this.http.get(
      `${this.API}/pokemon/?limit=${limit}&offset=${offset}`
    ) as Observable<{ results: Pokemon[] }>;
  }

  getPokemonImageUri(id: number) {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }

  getPokemon(id: string) {
    return this.http.get<Pokemon>(`${this.API}/pokemon/${id}`);
    // return this.http.get(`${this.API}/pokemon/${id}`) as Observable<{
    //   results: Pokemon;
    // }>;
  }

  getPokemonDescription(id:string){
    return this.http.get<PokemonDescription>(`${this.API}/pokemon/${id}`);
  }

  getPokemonDetails(id:string){
    return this.http.get(`${this.API}/pokemon/${id}`);
  }

  getPokemonGeneration(id: string) {
    return this.http.get(`${this.API}/generation/${id}`);
  }

  getPokemonEvolutiontree(id: string) {
    return this.http.get(`${this.API}/evolution-chain/${id}`)
  }

  getPokemonImage(id: string) {
    return this.http.get(`${this.API}/evolution-chain/${id}`)
  }

  getPokemonData(id: string)  {

    this.getPokemon(id).subscribe((data) => {
      return this.pokemons = this.setPokemonsData(data, parseInt(id));
    });
    return this.pokemons;
  }

  // getPokemons() {
  //   this.pokemonService
  //     .getPokemonList(this.offset, this.limit)
  //     .subscribe((data: { results: Pokemon[] }) => {
  //       this.pokemons = this.setPokemonsData(data);
  //       this.searchedPokemons = this.pokemons;
  //       this.pokemonsToDisplay(0, 18);
  //     });
  // }

  setPokemonsData(data: Pokemon, ids:number) {
    return data.results.map((pokemon: { id: number; image: string; backroundColor: any; textColor: string; }) => {
      const id: number = ids;
      const backgroundColor = pokemonColorMap[id];
      pokemon.id = id;
      pokemon.image = this.getPokemonImageUri(id);
      pokemon.backroundColor = backgroundColor;
      pokemon.textColor = backgroundColor[1] === 'f' ? '#000' : '#fff';
      return pokemon;
    });
  }
}
