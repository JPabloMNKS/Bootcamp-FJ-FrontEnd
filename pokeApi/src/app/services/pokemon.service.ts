import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../core/interfaces/pokemon.interface';
import { Observable } from "rxjs/internal/Observable";
import { pokemonColorMap } from "../utils/utils";

@Injectable({
  providedIn: 'root'
})

export class PokemonService{
  constructor(private http: HttpClient){}

  private API = 'https://pokeapi.co/api/v2';

  getPokemonList(offset: number= 0, limit:number = 25){
    return this.http.get(`${this.API}/pokemon/?limit=${limit}&offset=${offset}`)as Observable<{results: Pokemon[]}>;
  }

  getPokemonImageUri (id: number) {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }

  getPokemon( id: string ) {
    return this.http.get(`${this.API}/pokemon/${id}`) as Observable<{results: any}>;
  }

  // pokemons: Pokemon[] = [];
  // getPokemons2(offset: number, limit:number) {
  //   const pokemonList = this.getPokemonList(offset, limit);
  //   pokemonList.results.map((pokemon, index) => {
  //     const id = index + 1;
  //     const image = this.getPokemonImageUri(id);
  //     const backgroundColor = pokemonColorMap[id];
  //     const textcolor = backgroundColor[1] === 'f' ? '#000' : '#fff';
  //     this.pokemons.push({
  //       id: id,
  //       name: pokemon.name,
  //       image: image,
  //       backroundColor: backgroundColor,
  //       textColor: textcolor,
  //     });
  //   });

  // }

}

