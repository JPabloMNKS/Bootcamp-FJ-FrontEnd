import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Pokemon,
  PokemonDescription,
  PokemonEvolutionChain,
  PokemonSpecies,
} from '../core/interfaces/pokemon.interface';
import { Observable } from 'rxjs/internal/Observable';
import { pokemonColorMap } from '../utils/utils';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';
import { pokemonTypeColorMap } from '../utils/pokemonColorHash';

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
  }

  getPokemonDescription(id: string) {
    return this.http.get<PokemonDescription>(`${this.API}/pokemon/${id}`);
  }

  getPokemonDetails(id: string) {
    return this.http.get(
      `${this.API}/pokemon/${id}`
    ) as Observable<PokemonDescription>;
  }

  getPokemonGeneration(id: string) {
    return this.http.get(`${this.API}/generation/${id}`);
  }

  getPokemonEvolutiontree(id: string) {
    return this.http.get(`${this.API}/evolution-chain/${id}`);
  }

  getPokemonImage(id: string) {
    return this.http.get(`${this.API}/evolution-chain/${id}`);
  }

  getPokemonData(id: string) {
    this.getPokemon(id).subscribe((data) => {
      return (this.pokemons = this.setPokemonsData(data, parseInt(id)));
    });
    return this.pokemons;
  }

  setPokemonsData(data: Pokemon, ids: number) {
    return data.results.map(
      (pokemon: {
        id: number;
        image: string;
        backroundColor: any;
        textColor: string;
      }) => {
        const id: number = ids;
        const backgroundColor = pokemonColorMap[id];
        pokemon.id = id;
        pokemon.image = this.getPokemonImageUri(id);
        pokemon.backroundColor = backgroundColor;
        pokemon.textColor = backgroundColor[1] === 'f' ? '#000' : '#fff';
        return pokemon;
      }
    );
  }

  getPokemonSpecies(id: string) {
    return this.http
      .get<PokemonSpecies>(`${this.API}/pokemon-species/${id}`)
      .pipe(
        map((data) => {
          return {
            ...data,
            image: this.getPokemonImageUri(data.id),
          };
        })
      ) as Observable<PokemonSpecies>;
  }

  getPokemonInformation(id: string) {
    const species = this.getPokemonSpecies(id);
    const details = this.getPokemonDetails(id);
    return forkJoin([species, details]).pipe(
      map(([species, details]) => {
        const updatedPokemon = {
          ...details,
          types: details.types.map((data) => {
            return {
              name: data.type.name,
              color: pokemonTypeColorMap[data.type.name],
            };
          }),
          evolution_chain: species.evolution_chain,
          description: this.getDescription(species),
          image: this.getPokemonImageUri(Number(id)),
          color: pokemonColorMap[id],
        };
        return updatedPokemon;
      })
    ) as unknown as Observable<PokemonDescription>;
  }

  getDescription(species: PokemonSpecies) {
    let description: Iterable<any> | any | string | number = [];
    species.flavor_text_entries
      .filter((description) => description.language.name === 'en')
      .map((description) =>
        description.flavor_text.replace('\n', ' ').replace('\f', ' ')
      )
      .forEach((des, index) => {
        description[index] = des;
      });
    return [...new Set(description)];
  }

  getPokemonEvolutions(url: string) {
    return this.http.get<{ chain: PokemonEvolutionChain }>(url).pipe(
      catchError((error, data) => {
        return of(null);
      })
    );
  }

  getPokemonIdByUrl(url: string) {
    return url.split('/').slice(-2, -1)[0];
  }
}
