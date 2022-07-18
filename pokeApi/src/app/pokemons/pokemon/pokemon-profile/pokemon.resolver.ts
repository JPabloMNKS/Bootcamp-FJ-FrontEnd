import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PokemonProfileComponent } from "./pokemon-profile.component";
import { PokemonService } from '../../../services/pokemon.service';
import { Observable } from "rxjs";
import { PokemonDescription } from "src/app/core/interfaces/pokemon.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<PokemonDescription>{
  constructor(private pokemonService: PokemonService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PokemonDescription | Observable<PokemonDescription> | Promise<PokemonDescription> {
    return this.pokemonService.getPokemonDescription(route.paramMap.get('id') || '1');
  }



  // resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> {
  //   return this.pokemonService.getPokemon(route.paramMap.get('id') || '1');
  // }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PokemonProfileComponent | Observable<PokemonProfileComponent> | Promise<PokemonProfileComponent> | Observable<Pokemon>{
  //   return this.pokemonService.getPokemon2(route.paramMap.get('id') || '1');
  //   return this.pokemonService.getPokemon2(route.paramMap.get('id')?.slice(1) || '1');
  // }

//   resolve(route: ActivatedRouteSnapshot): Observable<PokemonInformation> | Promise<PokemonInformation> | PokemonInformation {
//     return this.pokemonService.getPokemonInformation(route.paramMap.get('id')?.slice(1) || '1');
// }

  // resolve(route: ActivatedRouteSnapshot, ): PokemonProfileComponent | Observable<PokemonProfileComponent> | Promise<PokemonProfileComponent> {
  //   return this.pokemonService.getPokemon(route.paramMap.get('id') || '1');

  // }

}

