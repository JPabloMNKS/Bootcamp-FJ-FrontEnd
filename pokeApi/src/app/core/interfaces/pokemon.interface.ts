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
  stats?: {
    base_stat: number;
    effort: number;
    stat: { name: string };
  }[];
  types: { type: { name: string } }[];
  description?: any[];
  species?: any;

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
