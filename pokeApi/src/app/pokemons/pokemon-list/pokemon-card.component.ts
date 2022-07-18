import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input()
  pokemon!: Pokemon;

  constructor(private router: Router) {}

  goToPokemonProfile() {
    this.router.navigate([`/pokedex/${this.pokemon.id}`]);
  }
}
