import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { dataPokemons, getPokemonImageUri, pokemonColorMap } from 'src/app/utils/utils';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor() {  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    dataPokemons.results.map((pokemon, index) => {
        const id =  index + 1;
        const image = getPokemonImageUri(id);
        const backgroundColor = pokemonColorMap[id];
        const textcolor = backgroundColor[1] === "f" ? "#000" : "#fff";
        this.pokemons.push({
            id: id,
            name: pokemon.name,
            image: image,
            backroundColor: backgroundColor,
            textColor: textcolor
        })
    });
  }
}
