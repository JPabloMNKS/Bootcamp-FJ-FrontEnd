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

  listOfPokemonsToDisplay: Pokemon[] = [];
  extraPokemons: Pokemon[] = [];

  limit: number = 100;
  offset: number = 0;
  pageEvent!: PageEvent;

  pageSizeOptions: number[] = [25, 50];
  pageSize: number = 18;
  lenght!: number;

  sorted: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }



  pokemonsToDisplay(bajo: number, alto: number) {
    this.listOfPokemonsToDisplay = [];
    this.searchedPokemons.forEach((value, index) => {
      if (index >= bajo && index < alto)
        this.listOfPokemonsToDisplay.push(value);
    });

    this.extraPokemons = this.listOfPokemonsToDisplay;
  }

  searchPokemon(pokemonSearched: string) {
    this.listOfPokemonsToDisplay = this.extraPokemons.filter((pokemon) =>
      pokemon.name.includes(pokemonSearched)
    );
  }

  paginatorOrganizer(event: PageEvent) {
    this.listOfPokemonsToDisplay = [];
    const bajo = (event.pageIndex + 1) * event.pageSize - 19;
    const alto = (event.pageIndex + 1) * event.pageSize;

    this.searchedPokemons.forEach((value, index) => {
      if (index > bajo && index < alto)
        this.listOfPokemonsToDisplay.push(value);
    });

    this.extraPokemons = this.listOfPokemonsToDisplay;
  }

  getPokemons() {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((data: { results: Pokemon[] }) => {
        this.pokemons = this.setPokemonsData(data);
        this.searchedPokemons = this.pokemons;
        this.pokemonsToDisplay(0, 18);
      });
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
