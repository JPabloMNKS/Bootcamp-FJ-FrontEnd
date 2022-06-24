import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    PokemonListComponent,
    PokemonComponent
  ],
  providers: [],
})
export class PokemonModule { }
