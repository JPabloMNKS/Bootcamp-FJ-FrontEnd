import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonResolver } from './pokemon/pokemon-profile/pokemon.resolver';
import { PokemonsResolver } from './pokemon-list/pokemons.resolver';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { HomeComponent } from '../core/home/home.component';

const routes: Routes = [
  {
    path: '../',
    component: HomeComponent
  },
  {
    path: '',
    component: PokemonListComponent,
    resolve: {
      pokemons: PokemonsResolver,
    },
  },
  {
    path: 'add',
    component: PokemonAddComponent
  },
  {
    path: ':id',
    component: PokemonProfileComponent,
    resolve: {
      pokemon: PokemonResolver,
    },
  },




  // {
  //   path: 'pokedex',
  //   component: PokemonListComponent,
  // },
  // {
  //   path: 'add',
  //   component: PokemonAddComponent
  // },
  // {
  //   path: 'pokedex/:id',
  //   component: PokemonProfileComponent,
  // },




  // {
  //   path: '',
  //   redirectTo: ' pokedex',
  //   pathMatch: 'full',
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
