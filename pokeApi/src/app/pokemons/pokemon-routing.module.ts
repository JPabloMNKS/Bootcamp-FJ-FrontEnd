import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PokemonProfileComponent } from "./pokemon/pokemon-profile/pokemon-profile.component";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokemonListComponent
  },
  {
    path: 'pokedex/:id',
    component: PokemonProfileComponent
  // component: PokemonListComponent

  },
  {
    path: '',
    redirectTo:' /pokedex', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class PokemonRoutingModule{

}
