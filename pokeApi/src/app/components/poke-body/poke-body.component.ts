import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { dataPokemons, getPokemonImageUri, pokemonColorMap } from 'src/utils/utils';

@Component({
  selector: 'app-poke-body',
  templateUrl: './poke-body.component.html',
  styleUrls: ['./poke-body.component.scss']
})
export class PokeBodyComponent implements OnInit{

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
