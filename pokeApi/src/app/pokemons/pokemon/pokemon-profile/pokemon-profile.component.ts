import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { pokemonColorMap } from 'src/app/utils/utils';

@Component({
  selector: 'pokemon-profile-component',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  id: string = '1';
  fields!: any;
  pokemon!: Pokemon;

  constructor(
    private location: Location,
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id') || '1';
    // console.log(this.id);
    // this.pokemonService.getPokemon(this.id).subscribe((pokemonData: Pokemon) => {
    //   this.pokemon = pokemonData;
    //   console.log(this.pokemon.name);
    //   console.log(this.pokemon.image);
    // });
    this.getPokemon();
  }

  getPokemon(){
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.pokemonService.getPokemon(this.id).subscribe((pokemonData: Pokemon) => {
      this.pokemon = pokemonData;
      const pokemonID = parseInt(this.id);
      this.pokemon.id = pokemonID
      this.pokemon.image = this.pokemonService.getPokemonImageUri(pokemonID);
      this.pokemon.backgroundColor = pokemonColorMap[pokemonID];
      this.pokemon.textColor = pokemonColorMap[pokemonID] === 'f' ? '#000' : '#fff';

      console.log('id ',this.pokemon.id);
      console.log('image ',this.pokemon.image);
      console.log('backcolor ',this.pokemon.backroundColor);
      console.log('txtcolor ',this.pokemon.textColor);

    });
  }






  goBack(): void {
    this.location.back();
  }





}
