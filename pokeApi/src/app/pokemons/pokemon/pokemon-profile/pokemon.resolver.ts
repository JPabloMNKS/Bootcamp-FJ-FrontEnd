import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PokemonProfileComponent } from "./pokemon-profile.component";
import { PokemonService } from '../../../services/pokemon.service';
import { Observable } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class PokemonResolver implements Resolve<PokemonProfileComponent>{
//   constructor(private pokemonService: PokemonService){}

//   // resolve(route: ActivatedRouteSnapshot, ): PokemonProfileComponent | Observable<PokemonProfileComponent> | Promise<PokemonProfileComponent> {
//   //   return this.pokemonService.getPokemon(route.paramMap.get('id') || '1');

//   // }

// }

