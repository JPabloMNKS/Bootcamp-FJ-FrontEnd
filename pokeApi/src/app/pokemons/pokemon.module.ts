import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

import { PokemonCardComponent } from './pokemon-list/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { SearchComponent } from '../core/search/search.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonListComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NotFoundComponent,
    PokemonProfileComponent
  ],
  imports: [
    PokemonRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MatPaginatorModule

  ],
  exports: [
    PokemonListComponent,
    PokemonCardComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NotFoundComponent,
    PokemonProfileComponent,
    PokemonRoutingModule
  ],
  providers: [MatPaginatorModule],
})
export class PokemonModule { }
