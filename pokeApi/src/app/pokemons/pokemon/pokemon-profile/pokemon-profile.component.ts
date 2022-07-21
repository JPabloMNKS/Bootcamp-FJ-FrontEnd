import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { pokemonColorMap } from 'src/app/utils/utils';
import { PokemonDescription } from '../../../core/interfaces/pokemon.interface';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'pokemon-profile-component',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  id: string = '1' ;
  fields!: any;
  pokemon!: PokemonDescription;
  pokemonProfile!: PokemonDescription;


  constructor(
    private location: Location,
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    // this.route.data.subscribe((data) => {
    //   this.pokemonProfile = data['pokemon']
    // })


    this.getPokemonDescription();


    this.router.navigateByUrl(`/pokedex/${this.id}`);
    // this.getPokemon();
  }

  // getPokemon(){
  //   this.id = this.route.snapshot.paramMap.get('id') || '1';
  //   this.pokemonService.getPokemon(this.id).subscribe((pokemonData: Pokemon) => {
  //     this.pokemon = pokemonData;
  //     const pokemonID = parseInt(this.id);
  //     const backgroundColor = pokemonColorMap[pokemonID];
  //     this.pokemon.id = pokemonID;
  //     this.pokemon.image = this.pokemonService.getPokemonImageUri(pokemonID);
  //     this.pokemon.backgroundColor = backgroundColor;
  //     this.pokemon.textColor = backgroundColor[1] === 'f' ? '#000' : '#fff';

  //     console.log('Test ', pokemonData);

  //   });
  // }
  staats= '';

  getPokemonDescription(){
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.pokemonService.getPokemonInformation(this.id).subscribe((pokemonData: PokemonDescription) => {
      this.pokemon = pokemonData;
      const pokemonID = parseInt(this.id);
      const backgroundColor = pokemonColorMap[pokemonID];
      this.pokemon.id = pokemonID;
      this.pokemon.image = this.pokemonService.getPokemonImageUri(pokemonID);
      this.pokemon.backgroundColor = backgroundColor;
      this.pokemon.textColor = backgroundColor[1] === 'f' ? '#000' : '#fff';
      this.pokemon.height = pokemonData.height;
      this.pokemon.weight = pokemonData.weight;
      this.pokemon.stats = pokemonData.stats;

      console.log('Test  2 dsa dsa ', this.pokemon.abilities );

    });
  }



  goBack(): void {
    this.location.back();
  }


}
