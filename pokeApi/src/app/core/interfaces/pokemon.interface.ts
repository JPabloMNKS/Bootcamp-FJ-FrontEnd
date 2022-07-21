export interface Pokemon {
  [x: string]: any;
  id: number;
  name: string;
  image: string;
  backroundColor: string;
  textColor: string;
}

export interface PokemonDescription extends Pokemon {
  height: string;
  weight: string;
  type?: string[];
  description?: any[];
  species?: any;
  color?: string;
  types: any[];
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  id: number;
  held_items: any[];
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  sprites: any;
  stats: Stat[];

  image: string;
}

export interface Stat {
  base_stat: string;
  effort: string;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonStats {
  hp: string;
  attack: string;
  defense: string;
  specialAttack: string;
  specialDefense: string;
  Speed: string;
}

export interface FlavorText {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {};
}

export interface PokemonDetailsApi {
  name: string;
  url: string;
}

export interface PokemonSpecies {
  base_happiness: any;
  capture_rate: any;
  color: PokemonDetailsApi;
  egg_groups: [];
  evolution_chain: { url: string } | null;
  evolves_from_species: PokemonDetailsApi | null;
  flavor_text_entries: FlavorText[];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: [];
  generation: {};
  growth_rate: {};
  habitat: any;
  has_gender_differences: boolean;
  hatch_counter: any;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  order: number;
  pal_park_encounters: [];
  pokedex_numbers: [];
  shape: {};
  varieties: [];
}

export interface PokemonEvolutionChain {
  evolution_details: any[];
  evolves_to: PokemonEvolutionChain[];
  is_baby: boolean;
  species: PokemonDetailsApi;
}
