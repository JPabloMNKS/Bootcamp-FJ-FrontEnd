import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { pokemonColorMap } from 'src/app/utils/utils';

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

  pageSizeOptions: number[] = [25, 50];
  pageSize: number = 50;
  lenght!: number;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((data: { results: Pokemon[] }) => {
        this.pokemons = this.getPokemons(data);
        this.searchedPokemons = this.pokemons;
      });
    this.offset += this.limit;
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
}
