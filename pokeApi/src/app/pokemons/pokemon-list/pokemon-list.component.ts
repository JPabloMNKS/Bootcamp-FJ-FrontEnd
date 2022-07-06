import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  pageEvent!: PageEvent;

  pageSizeOptions: number[] = [25, 50];
  pageSize: number = 50;
  lenght!: number;

  constructor(private pokemonService: PokemonService) {}



  test(event: PageEvent) {

    this.offset = ((event.pageIndex+1) * event.pageSize) - 9;

    console.log( this.offset);

    this.limit = (event.pageIndex+1) * event.pageSize;
    console.log( this.limit);

    this.getPokemons();
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  searchPokemon(pokemonSearched: string) {
    this.searchedPokemons = this.pokemons.filter((pokemon) =>
      pokemon.name.includes(pokemonSearched)
    );
  }

  getPokemons() {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((data: { results: Pokemon[] }) => {
        this.pokemons = this.setPokemonsData(data);
        this.searchedPokemons = this.pokemons;
      });
    // this.offset += this.limit;

    // this.searchedPokemons = [];
    // this.pokemons = [];
  }

  setPokemonsData(data: { results: Pokemon[] }) {
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
