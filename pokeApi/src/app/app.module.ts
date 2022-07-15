import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemons/pokemon.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    PokemonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [MatPaginatorModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
