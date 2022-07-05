import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokemon-profile-component',
  templateUrl: './pokemon-profile.component.html',
})
export class PokemonProfileComponent implements OnInit{
  id: string = '1';
  fields: any;

  constructor(
    private location: Location,
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.pokemonService.getPokemon(this.id)
      .subscribe( pokemonDetail => {
        this.fields = pokemonDetail});
  }

  goBack(): void {
    this.location.back;
  }
}
