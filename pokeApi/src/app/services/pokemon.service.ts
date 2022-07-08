import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../core/interfaces/pokemon.interface';
import { Observable } from 'rxjs/internal/Observable';
import { pokemonColorMap } from '../utils/utils';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
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
    return this.http.get(`${this.API}/pokemon/${id}`) as Observable<{
      results: any;
    }>;
  }

  // pokemons: Pokemon[] = [];
  // private pokemonsData = new BehaviorSubject<void>(undefined);

  // pokemonRequest = this.getPokemonList(0, 50)
  // .subscribe((data: { results: Pokemon[] }) => {
  //   this.pokemons = this.setPokemonsData(data);
  // });

  // public pokemonService = this.pokemonsData.pipe(
  //   switchMap(async () => this.pokemonRequest),
  //   shareReplay(1)
  // );

  // getPokemons() {
  //   this.getPokemonList(0, 50)
  //     .subscribe((data: { results: Pokemon[] }) => {
  //       this.pokemons = this.setPokemonsData(data);
  //     });
  //     return this.pokemons;
  // }

  // setPokemonsData(data: { results: Pokemon[] }) {
  //   return data.results.map((pokemon, index) => {
  //     const id: number = index + 1;
  //     const backgroundColor = pokemonColorMap[id];
  //     pokemon.id = id;
  //     pokemon.image = this.getPokemonImageUri(id);
  //     pokemon.backroundColor = backgroundColor;
  //     pokemon.textColor = backgroundColor[1] === 'f' ? '#000' : '#fff';
  //     return pokemon;
  //   });
  // }



}
