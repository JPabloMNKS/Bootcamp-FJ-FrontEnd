import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { SearchComponent } from '../core/search/search.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,

  ],
  exports: [
    PokemonListComponent,
    PokemonComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  providers: [],
})
export class PokemonModule { }
