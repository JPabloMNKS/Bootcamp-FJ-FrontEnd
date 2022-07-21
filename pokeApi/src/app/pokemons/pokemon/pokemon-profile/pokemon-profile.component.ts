import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Location } from '@angular/common';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Pokemon,
  PokemonEvolutionChain,
} from 'src/app/core/interfaces/pokemon.interface';
import { pokemonColorMap } from 'src/app/utils/utils';
import {
  PokemonDescription,
  PokemonSpecies,
} from '../../../core/interfaces/pokemon.interface';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'pokemon-profile-component',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  id: string = '1';
  fields!: any;
  pokemon!: PokemonDescription;
  pokemonProfile!: PokemonDescription;

  pokemonSpecies!: PokemonSpecies;
  pokemonEvolution!: PokemonEvolutionChain;
  evolutionsData: any = [];
  constructor(
    private location: Location,
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPokemonDescription();
    this.getPokemonDescription2();
    this.router.navigateByUrl(`/pokedex/${this.id}`);
  }

  staats = '';

  getPokemonDescription() {
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.pokemonService
      .getPokemonInformation(this.id)
      .subscribe((pokemonData: PokemonDescription) => {
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
      });
  }

  getPokemonDescription2() {
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.pokemonService
      .getPokemonSpecies(this.id)
      .subscribe((pokemonData: PokemonSpecies) => {
        this.pokemonSpecies = pokemonData;

        this.getEvolution(this.pokemonSpecies.evolution_chain?.url as string);
      });
  }

  goBack(): void {
    this.location.back();
  }

  getEvolution(url: string) {
    if (url != null) {
      this.pokemonService.getPokemonEvolutions(url).subscribe((data) => {
        if (data) this.pokemonEvolution = data.chain;
        do {
          let evolutionDetails = this.pokemonEvolution['evolution_details'][0];
          const id = this.pokemonService.getPokemonIdByUrl(
            this.pokemonEvolution.species.url
          );
          this.evolutionsData.push({
            id: id,
            image: this.pokemonService.getPokemonImageUri(Number(id)),
            species_name: this.pokemonEvolution.species.name,
            min_level: !evolutionDetails ? 1 : evolutionDetails.min_level,
            trigger_name: !evolutionDetails
              ? null
              : evolutionDetails.trigger.name,
          });
          this.pokemonEvolution = this.pokemonEvolution['evolves_to'][0];
        } while (
          !!this.pokemonEvolution &&
          this.pokemonEvolution.hasOwnProperty('evolves_to')
        );
      });
    }
  }
}
