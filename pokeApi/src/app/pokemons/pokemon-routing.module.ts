import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
// import { PokemonResolver } from './pokemon/pokemon-profile/pokemon.resolver';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PokemonListComponent,
  //   resolve: {
  //     pokemons: PokemonResolver
  //   }
  // },
  // {
  //   path: ':id',
  //   component: PokemonProfileComponent,
  //   resolve: {
  //     pokemon: PokemonResolver
  //   }
  // }




  {
    path: 'pokedex',
    component: PokemonListComponent,
  },
  {
    path: 'pokedex/:id',
    component: PokemonProfileComponent,
  },
  // {
  //   path: '',
  //   redirectTo: ' pokedex',
  //   pathMatch: 'full',
  // },


  

  // {
  //   path: ':id',
  //   component: PokemonProfileComponent,
  //   resolve:{
  //     pokemon: PokemonResolver
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class PokemonRoutingModule {}
