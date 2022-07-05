import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import {
  dataPokemons,
  getPokemonImageUri,
  pokemonColorMap,
} from 'src/app/utils/utils';

import { HeaderComponent } from 'src/app/core/header/header.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonList: Pokemon[] = [];
  searchedPokemons: Pokemon[] = [];

  limit: number = 50;
  offset: number = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe(
        (data: { results: Pokemon[] }) =>{
          this.pokemonList = [...this.pokemonList, ...data.results];
          this.searchedPokemons = this.getPokemons(data);
          this.pokemons = this.getPokemons(data);
        }
      );
        this.offset += this.limit;
    // this.getPokemons();
  }

  searchPokemon(pokemonSearched: string) {
    this.searchedPokemons = this.pokemons.filter((pokemon) =>
      pokemon.name.includes(pokemonSearched)
    );
  }

  getPokemons(data: { results: Pokemon[] }) {
    return data.results.map((pokemon, index) => {
      const id: number = index + 1;
      const backgroundColor = pokemonColorMap[id];
      pokemon.id = id;
      pokemon.image = this.pokemonService.getPokemonImageUri(id);
      pokemon.backroundColor = backgroundColor;
      pokemon.textColor = backgroundColor[1] === 'f' ? '#000' : '#fff';
      return pokemon;
    });
  }

  // getPokemons() {
  //   dataPokemons.results.map((pokemon, index) => {
  //     const id = index + 1;
  //     const image = getPokemonImageUri(id);
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
  //   this.searchedPokemons = this.pokemons;
  // }


}
