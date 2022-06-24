import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    HeaderComponent,
    FooterComponent
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
