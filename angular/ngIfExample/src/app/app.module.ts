import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './component/example/example.component';
import {NgIfAs} from './component/example/ngasif/ngasif.component'

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    NgIfAs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
