import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PokemonDescription } from '../../core/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.scss'],
})
export class PokemonAddComponent implements OnInit {
  profileForm = new FormGroup({
    pokemonName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    pokemonDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(75),
    ]),
    pokemonHeight: new FormControl('', [Validators.required]),
    pokemonWeight: new FormControl('', [Validators.required]),
    pokemonType: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}

  typesOfPokemon = ['Normal', 'Fighting', 'Flying', 'Poison', 'Fire', 'Water'];

  ngOnInit(): void {}

  get types() {
    return this.profileForm.get('types') as FormArray;
  }

  addType() {
    this.types.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
