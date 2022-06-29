import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { SearchComponent } from '../core/search/search.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  exports: [
    PokemonListComponent,
    PokemonComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NotFoundComponent
  ],
  providers: [],
})
export class PokemonModule { }
