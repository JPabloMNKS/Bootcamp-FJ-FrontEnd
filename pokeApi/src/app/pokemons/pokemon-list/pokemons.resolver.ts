import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Pokemon } from "src/app/core/interfaces/pokemon.interface";
import { PokemonService } from '../../services/pokemon.service';

@Injectable({
    providedIn: 'root'
})

export class PokemonsResolver implements Resolve<{results: Pokemon[]}> {
    constructor(private pokemonService: PokemonService) {}

    resolve() {
        return this.pokemonService.getPokemonList(50, 0);
    }

}
