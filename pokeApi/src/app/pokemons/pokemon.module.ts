import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { PokemonCardComponent } from './pokemon-list/pokemon-card.component';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { SearchComponent } from '../core/search/search.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CommonModule } from '@angular/common';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonListComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NotFoundComponent,
    PokemonProfileComponent,
    PokemonAddComponent
  ],
  imports: [
    PokemonRoutingModule,
    MatProgressBarModule,
    CommonModule,
    BrowserModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule

  ],
  exports: [
    PokemonListComponent,
    PokemonCardComponent,
    HeaderComponent,
    PokemonAddComponent,
    FooterComponent,
    SearchComponent,
    NotFoundComponent,
    PokemonProfileComponent,
    PokemonRoutingModule
  ],
  providers: [MatPaginatorModule],
})
export class PokemonModule { }
