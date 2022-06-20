import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeBodyComponent } from './components/poke-body/poke-body.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PokeBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
